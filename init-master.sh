#!/bin/bash
set -e

echo "Configuring PostgreSQL Master for Replication..."

# ตรวจสอบว่าตัวแปรที่ใช้มีการตั้งค่าหรือไม่
if [ -z "${POSTGRES_REPLICATION_USER}" ] || [ -z "${POSTGRES_REPLICATION_PASSWORD}" ]; then
  echo "REPLICATION_USER หรือ REPLICATION_PASSWORD ไม่ได้ตั้งค่า!"
  exit 1
fi

# กำหนดให้ Replica เชื่อมต่อได้
echo "host replication ${POSTGRES_REPLICATION_USER} all md5" >> /var/lib/postgresql/data/pg_hba.conf


# ตั้งค่า Streaming Replication
echo "wal_level = replica" >> /var/lib/postgresql/data/postgresql.conf
echo "max_wal_senders = 5" >> /var/lib/postgresql/data/postgresql.conf
echo "wal_keep_size = 64MB" >> /var/lib/postgresql/data/postgresql.conf
echo "archive_mode = on" >> /var/lib/postgresql/data/postgresql.conf
echo "archive_command = 'cp %p /var/lib/postgresql/archive/%f'" >> /var/lib/postgresql/data/postgresql.conf

# รีสตาร์ท PostgreSQL เพื่อใช้ค่าใหม่
echo "Restarting PostgreSQL to apply changes..."
pg_ctl restart -D /var/lib/postgresql/data

# ตรวจสอบสถานะของ PostgreSQL
echo "Waiting for PostgreSQL to restart..."
sleep 10  # รอ PostgreSQL รีสตาร์ท

# ตั้งค่าการ replication master
echo "PostgreSQL Master is ready for replication!"
