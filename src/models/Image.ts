import { builder } from "../builder";

builder.prismaObject("Image", {
  fields: (t) => ({
    id: t.exposeID("id"),
    url: t.exposeString("url"),
    isMain: t.exposeBoolean("isMain"),
    projectId: t.exposeInt("projectId"),
    project: t.relation("project"),
  }),
});
