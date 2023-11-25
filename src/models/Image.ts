import { builder } from "../builder";

builder.prismaObject("Image", {
  fields: (t) => ({
    imageID: t.exposeID("imageID"),
    projectID: t.exposeID("projectID"),
    imagePath: t.exposeString("imagePath"),
    project: t.relation("project"),
  }),
});
