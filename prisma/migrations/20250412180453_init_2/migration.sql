-- AlterTable
ALTER TABLE "employee" ALTER COLUMN "deleted_at" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "employee_username_idx" ON "employee"("username");
