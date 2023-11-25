import { builder } from "../builder";

builder.prismaObject("Technology", {
  fields: (t) => ({
    technologyID: t.exposeID("technologyID"),
    technologyName: t.exposeString("technologyName"),
    projects: t.relation("projects"),
  }),
});
