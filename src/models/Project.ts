import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Project", {
  fields: (t) => ({
    projectID: t.exposeID("projectID"),
    projectName: t.exposeString("projectName"),
    description: t.exposeString("description"),
    startDate: t.expose("startDate", {
      type: "Date",
    }),
    endDate: t.expose("endDate", {
      type: "Date",
      nullable: true,
    }),
    status: t.exposeString("projectName"),
    images: t.relation("images"),
    technologies: t.relation("technologies"),
  }),
});

builder.queryField("project", (t) =>
  t.prismaField({
    type: ["Project"],
    resolve: async (query, root, args, ctx, info) => {
      return prisma.project.findMany({ ...query });
    },
  })
);
