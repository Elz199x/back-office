# #!/bin/bash
# set -e

# echo "⚙️ Initializing MongoDB users..."

# # ใช้ mongosh เชื่อมต่อและรันคำสั่ง
# mongosh <<EOF
# use admin
# db.createUser({
#   user: 'root',
#   pwd: '123456',
#   roles: [ { role: 'root', db: 'admin' } ]
# })

# use outbox
# db.createUser({
#   user: 'mongoelz',
#   pwd: 'mongoelz1234',
#   roles: [ { role: 'readWrite', db: 'outbox' } ]
# })


# echo "✅ MongoDB users created successfully."
