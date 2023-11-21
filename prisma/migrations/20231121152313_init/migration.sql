-- CreateTable
CREATE TABLE "Project" (
    "projectID" SERIAL NOT NULL,
    "projectName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("projectID")
);

-- CreateTable
CREATE TABLE "Technology" (
    "technologyID" SERIAL NOT NULL,
    "technologyName" TEXT NOT NULL,

    CONSTRAINT "Technology_pkey" PRIMARY KEY ("technologyID")
);

-- CreateTable
CREATE TABLE "ProjectTechnologies" (
    "projectID" INTEGER NOT NULL,
    "technologyID" INTEGER NOT NULL,

    CONSTRAINT "ProjectTechnologies_pkey" PRIMARY KEY ("projectID","technologyID")
);

-- CreateTable
CREATE TABLE "Image" (
    "imageID" SERIAL NOT NULL,
    "projectID" INTEGER NOT NULL,
    "imagePath" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("imageID")
);

-- CreateTable
CREATE TABLE "_ProjectToTechnology" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToTechnology_AB_unique" ON "_ProjectToTechnology"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToTechnology_B_index" ON "_ProjectToTechnology"("B");

-- AddForeignKey
ALTER TABLE "ProjectTechnologies" ADD CONSTRAINT "ProjectTechnologies_projectID_fkey" FOREIGN KEY ("projectID") REFERENCES "Project"("projectID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectTechnologies" ADD CONSTRAINT "ProjectTechnologies_technologyID_fkey" FOREIGN KEY ("technologyID") REFERENCES "Technology"("technologyID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_projectID_fkey" FOREIGN KEY ("projectID") REFERENCES "Project"("projectID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTechnology" ADD CONSTRAINT "_ProjectToTechnology_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("projectID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTechnology" ADD CONSTRAINT "_ProjectToTechnology_B_fkey" FOREIGN KEY ("B") REFERENCES "Technology"("technologyID") ON DELETE CASCADE ON UPDATE CASCADE;
