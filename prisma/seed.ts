const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const seedDatabase = async () => {
  const project = await prisma.project.create({
    data: {
      projectName: "My Portfolio",
      description:
        "Un super projet permettant de mettre en avant mon savoir faire en tant que développeur web",
      startDate: new Date(),
      status: "En cours",
      technologies: {
        create: [
          { technologyName: "React" },
          { technologyName: "Next.js" },
          { technologyName: "Node.js" },
          { technologyName: "Express" },
          { technologyName: "GraphQL" },
          { technologyName: "Prisma" },
          { technologyName: "PostgreSQL" },
        ],
      },
    },
  });

  const image = await prisma.image.create({
    data: {
      imagePath:
        "https://fakeimg.pl/440x230/282828/eae0d0/?retina=1&text=Problem?%20%3C%3Apepw%3A989410572514758676%3E", // Remplacez cela par un chemin d'image réel
      project: {
        connect: {
          projectID: project.projectID,
        },
      },
    },
  });

  console.log("Données de *seed* insérées avec succès:", {
    project,
    image,
  });
};

seedDatabase()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
