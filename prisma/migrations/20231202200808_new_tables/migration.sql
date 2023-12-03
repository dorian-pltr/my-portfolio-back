/*
  Warnings:

  - Added the required column `projectId` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeId` to the `Technology` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_id_fkey";

-- DropForeignKey
ALTER TABLE "Technology" DROP CONSTRAINT "Technology_id_fkey";

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "projectId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Technology" ADD COLUMN     "typeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Technology" ADD CONSTRAINT "Technology_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "TechnologyType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
