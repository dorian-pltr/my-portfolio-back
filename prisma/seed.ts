const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const seedDatabase = async () => {
  const technologiesTypes = await prisma.TechnologyType.createMany({
    data: [
      { name: "Front-End" },
      { name: "Back-End" },
      { name: "Transverse" },
      { name: "Gestion de projet" },
      { name: "Low Code" },
    ],
    skipDuplicates: true,
  });

  console.log(technologiesTypes);

  const technologies = await prisma.Technology.createMany({
    data: [
      {
        name: "React",
        typeId: 1,
        isMain: true,
      },
      {
        name: "Next.js",
        typeId: 1,
        isMain: true,
      },
      {
        name: "TypeScript",
        typeId: 3,
        isMain: false,
      },
      {
        name: "HTML",
        typeId: 1,
        isMain: false,
      },
      {
        name: "CSS",
        typeId: 1,
        isMain: false,
      },
      {
        name: "Node.js",
        typeId: 2,
        isMain: true,
      },
      {
        name: "Express",
        typeId: 2,
        isMain: false,
      },
      {
        name: "GraphQL",
        typeId: 3,
        isMain: false,
      },
      {
        name: "Apollo",
        typeId: 2,
        isMain: false,
      },
      {
        name: "PostgreSQL",
        typeId: 2,
        isMain: false,
      },
      {
        name: "MySQL",
        typeId: 2,
        isMain: false,
      },
      {
        name: "MongoDB",
        typeId: 2,
        isMain: false,
      },
      {
        name: "InfluxDB",
        typeId: 2,
        isMain: false,
      },
      {
        name: "Git",
        typeId: 3,
        isMain: false,
      },
      {
        name: "Agile",
        typeId: 3,
        isMain: false,
      },
      {
        name: "Scrum",
        typeId: 3,
        isMain: false,
      },
      {
        name: "Jira",
        typeId: 3,
        isMain: false,
      },
      {
        name: "Confluence",
        typeId: 3,
        isMain: false,
      },
      {
        name: "Trello",
        typeId: 3,
        isMain: false,
      },
      {
        name: "Airtable",
        typeId: 4,
        isMain: false,
      },
      {
        name: "Power Automate",
        typeId: 4,
        isMain: false,
      },
      {
        name: "WordPress",
        typeId: 4,
        isMain: false,
      },
    ],
    skipDuplicates: true,
  });

  const status = await prisma.ProjectStatus.createMany({
    data: [
      { name: "À faire" },
      { name: "En cours" },
      { name: "Terminé" },
      { name: "En attente" },
      { name: "Annulé" },
    ],
    skipDuplicates: true,
  });

  const myself = await prisma.Project.create({
    data: {
      name: "Dorian PELLETIER",
      description: "Un développeur web qui aime coder et qui aime la vie",
      startDate: new Date("1997-09-25"),
      statusId: 2,
    },
  });

  const myPortfolio = await prisma.Project.create({
    data: {
      name: "My Portfolio",
      description:
        "Un super projet permettant de mettre en avant mon savoir faire en tant que développeur web",
      startDate: new Date("2023-07-30"),
      statusId: 2,
    },
  });

  const images = await prisma.Image.createMany({
    data: [
      {
        url: "https://www.dorian-pltr.com/images/color_portrait.png",
        isMain: true,
        projectId: 1,
      },
      {
        url: "https://fakeimg.pl/440x230/282828/eae0d0/?retina=1&text=Problem?%20%3C%3Apepw%3A989410572514758676%3E",
        isMain: true,
        projectId: 2,
      },
    ],
    skipDuplicates: true,
  });

  console.log("Données de *seed* insérées avec succès:", {
    technologiesTypes,
    technologies,
    status,
    myself,
    myPortfolio,
    images,
  });
};

seedDatabase()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
