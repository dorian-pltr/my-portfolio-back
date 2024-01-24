import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Project", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    description: t.exposeString("description"),
    startDate: t.expose("startDate", {
      type: "Date",
    }),
    endDate: t.expose("endDate", {
      type: "Date",
      nullable: true,
    }),
    statusId: t.exposeInt("statusId"),
    status: t.relation("status"),
    images: t.relation("images"),
    technologies: t.relation("technologies"),
    url: t.exposeString("url", { nullable: true }),
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
