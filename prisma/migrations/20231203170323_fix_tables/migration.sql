/*
  Warnings:

  - You are about to drop the column `main` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `main` on the `Technology` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `TechnologyType` table. All the data in the column will be lost.
  - Added the required column `isMain` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isMain` to the `Technology` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "main",
ADD COLUMN     "isMain" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Technology" DROP COLUMN "main",
ADD COLUMN     "isMain" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "TechnologyType" DROP COLUMN "color";
