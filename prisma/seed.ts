import { PrismaClient } from '@prisma/client';
import { index } from './default'; 

const prisma = new PrismaClient();

async function main() {
    // วนลูปผ่านแต่ละ table ใน index
    for (const tableData of index) {
        const { table, data } = tableData;

        if (!data || data.length === 0) continue;

        for (const record of data) {
            try {
                await prisma[table].upsert({
                    where: { name: record.name },
                    update: {},
                    create: record,
                });
            } catch (error) {
                console.error(`❌ Error inserting/updating data for table: ${table}`, error);
            }
        }
        console.log(`✅ ${table} and related tables seeded successfully`);
    }
}

main()
    .catch((e) => {
        console.error('❌ Error seeding data:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
