echo "🔧 Initializing PostgreSQL Master..."

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" -d "$POSTGRES_DB" <<-EOSQL

    -- ✅ 1. Create Read-Write User
    DO \$\$
    BEGIN
        IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'elzth159') THEN
            CREATE USER elzth159 WITH ENCRYPTED PASSWORD '${POSTGRES_PASSWORD}';
        END IF;
    END
    \$\$;
    GRANT ALL PRIVILEGES ON DATABASE ${POSTGRES_DB} TO elzth159;

    -- ✅ 2. Create Read-Only + Replication User
    DO \$\$
    BEGIN
        IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'elzth159_ro') THEN
            CREATE ROLE elzth159_ro WITH LOGIN REPLICATION ENCRYPTED PASSWORD '${POSTGRES_RO_PASSWORD}';
        END IF;
    END
    \$\$;

    GRANT CONNECT ON DATABASE ${POSTGRES_DB} TO elzth159_ro;

    -- ✅ 3. Grant USAGE on schema public
    GRANT USAGE ON SCHEMA public TO elzth159_ro;

    -- ✅ 4. Grant SELECT on existing tables & sequences
    GRANT SELECT ON ALL TABLES IN SCHEMA public TO elzth159_ro;
    GRANT SELECT ON ALL SEQUENCES IN SCHEMA public TO elzth159_ro;
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO elzth159_ro;

    -- ✅ 5. Ensure default privileges apply to tables/sequences created *by postgres user*
    ALTER DEFAULT PRIVILEGES FOR ROLE ${POSTGRES_USER} IN SCHEMA public GRANT SELECT ON TABLES TO elzth159_ro;
    ALTER DEFAULT PRIVILEGES FOR ROLE ${POSTGRES_USER} IN SCHEMA public GRANT SELECT ON SEQUENCES TO elzth159_ro;

EOSQL

echo "✅ Database & Roles setup completed."


# Update pg_hba.conf to allow connections from trusted networks
# Use md5 instead of trust for better security
echo "local   all             all             md5" > /var/lib/postgresql/data/pg_hba.conf
echo "host    all             all             0.0.0.0/0        md5" >> /var/lib/postgresql/data/pg_hba.conf
echo "host    ${POSTGRES_RO_USER} all 0.0.0.0/0 md5" >> /var/lib/postgresql/data/pg_hba.conf
echo "host replication ${POSTGRES_RO_USER} 0.0.0.0/0 md5" >> /var/lib/postgresql/data/pg_hba.conf


echo "✅ Master Setup Completed."

# Restart PostgreSQL container to apply changes
psql -U elzth159 -d ${POSTGRES_DB}   -c "SELECT pg_reload_conf();"


echo "PostgreSQL Restarted!"
