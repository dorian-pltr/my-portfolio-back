/*
  Warnings:

  - The primary key for the `Image` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `imageID` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `imagePath` on the `Image` table. All the data in the column will be lost.
  - The primary key for the `Project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `projectID` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `projectName` on the `Project` table. All the data in the column will be lost.
  - The primary key for the `Technology` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `technologyID` on the `Technology` table. All the data in the column will be lost.
  - You are about to drop the column `technologyName` on the `Technology` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Technology` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `path` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Technology` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_projectID_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectToTechnology" DROP CONSTRAINT "_ProjectToTechnology_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectToTechnology" DROP CONSTRAINT "_ProjectToTechnology_B_fkey";

-- DropIndex
DROP INDEX "Project_projectName_key";

-- DropIndex
DROP INDEX "Technology_technologyName_key";

-- AlterTable
ALTER TABLE "Image" DROP CONSTRAINT "Image_pkey",
DROP COLUMN "imageID",
DROP COLUMN "imagePath",
ADD COLUMN     "ID" SERIAL NOT NULL,
ADD COLUMN     "path" TEXT NOT NULL,
ADD CONSTRAINT "Image_pkey" PRIMARY KEY ("ID");

-- AlterTable
ALTER TABLE "Project" DROP CONSTRAINT "Project_pkey",
DROP COLUMN "projectID",
DROP COLUMN "projectName",
ADD COLUMN     "ID" SERIAL NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD CONSTRAINT "Project_pkey" PRIMARY KEY ("ID");

-- AlterTable
ALTER TABLE "Technology" DROP CONSTRAINT "Technology_pkey",
DROP COLUMN "technologyID",
DROP COLUMN "technologyName",
ADD COLUMN     "ID" SERIAL NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD CONSTRAINT "Technology_pkey" PRIMARY KEY ("ID");

-- CreateIndex
CREATE UNIQUE INDEX "Project_name_key" ON "Project"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Technology_name_key" ON "Technology"("name");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_ID_fkey" FOREIGN KEY ("ID") REFERENCES "Project"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTechnology" ADD CONSTRAINT "_ProjectToTechnology_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("ID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTechnology" ADD CONSTRAINT "_ProjectToTechnology_B_fkey" FOREIGN KEY ("B") REFERENCES "Technology"("ID") ON DELETE CASCADE ON UPDATE CASCADE;
