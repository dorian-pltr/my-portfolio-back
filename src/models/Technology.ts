import { builder } from "../builder";

builder.prismaObject("Technology", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    isMain: t.exposeBoolean("isMain"),
    typeId: t.exposeInt("typeId"),
    type: t.relation("type"),
    projects: t.relation("projects"),
  }),
});
