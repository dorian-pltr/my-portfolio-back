import { builder } from "../builder";

builder.prismaObject("ProjectStatus", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    projects: t.relation("projects"),
  }),
});
