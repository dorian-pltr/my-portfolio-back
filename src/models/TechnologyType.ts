import { builder } from "../builder";

builder.prismaObject("TechnologyType", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    technologies: t.relation("technologies"),
  }),
});
