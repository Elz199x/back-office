
#!/bin/bash
set -e

# ตรวจสอบว่าอยู่ใน container หรือ host
echo "🛠️ Preparing PostgreSQL replica..."

# Clear data directory ก่อนเริ่ม replication
echo "🧹 Cleaning up old data directory..."
rm -rf /var/lib/postgresql/data/*

# ใช้ pg_basebackup ดึงข้อมูลจาก master
echo "📦 Running pg_basebackup from master..."
pg_basebackup -h postgres-master -D /var/lib/postgresql/data -U "$POSTGRES_RO_USER" -W -Fp -Xs -P -R

# ตรวจสอบว่าทำงานเสร็จแล้วหรือไม่
echo "✅ pg_basebackup completed."

# Step 3: Ensure pg_hba.conf is correctly configured for replication
# Ensure the pg_hba.conf file has the necessary replication user access
echo "host    all     ${POSTGRES_RO_USER}  0.0.0.0/0        md5" >> /var/lib/postgresql/data/pg_hba.conf
echo "host    ${POSTGRES_DB}    ${POSTGRES_RO_USER}  0.0.0.0/0        md5" >> /var/lib/postgresql/data/pg_hba.conf
echo "host    all             all             0.0.0.0/0        md5" >> /var/lib/postgresql/data/pg_hba.conf

# เพิ่ม restore_command และ replica config อื่นๆ (ถ้ายังไม่ได้ใส่ไว้ใน master)
cat >> /var/lib/postgresql/data/postgresql.conf <<EOF
# Replication settings
hot_standby = on
primary_conninfo = 'host=postgres-master port=5432 user=${POSTGRES_RO_USER} password=${POSTGRES_RO_PASSWORD}'
EOF

# รีสตาร์ท PostgreSQL container เพื่อให้การตั้งค่ามีผล
echo "🌀 Restarting PostgreSQL to apply changes..."
docker exec postgres-replica pg_ctl restart -D /var/lib/postgresql/data

echo "✅ Replica setup complete and ready to start PostgreSQL in standby mode."





