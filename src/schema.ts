import { nexusPrismaPlugin } from "nexus-prisma";
import { makeSchema } from "nexus";
import { applyMiddleware } from "graphql-middleware";
import * as types from "./types";
import { permissions } from "./permissions";

export const schema = applyMiddleware(
  makeSchema({
    types,
    plugins: [nexusPrismaPlugin()],
    outputs: {
      schema: __dirname + "/../schema.graphql",
      typegen: __dirname + "/generated/nexus.ts",
    },
    typegenAutoConfig: {
      sources: [
        {
          source: "@prisma/client",
          alias: "client",
        },
        {
          source: require.resolve("./context"),
          alias: "Context",
        },
      ],
      contextType: "Context.Context",
    },
  }),
  permissions
);
