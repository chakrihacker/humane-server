import { queryType, intArg, stringArg } from "nexus";
import { getUserId, paginateResults } from "../utils";

export const Query = queryType({
  definition(t) {
    t.field("status", {
      type: "String",
      nullable: true,
      resolve: (parent, args, ctx) => {
        return `GraphQL Api is working`;
      },
    });

    t.field("me", {
      type: "User",
      nullable: true,
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx);
        return ctx.prisma.user.findOne({
          where: {
            id: Number(userId),
          },
        });
      },
    });

    t.field("spend_history", {
      type: "SpendHistory",
      args: {
        cursor: intArg({required: false, default: undefined})
      },
      nullable: true,
      resolve: async (parent, args, ctx) => {
        try {
          const userId = getUserId(ctx);
          const spends = await ctx.prisma.transaction.findMany({
            where: {
              userId: Number(userId),
              id: {
                gt: args.cursor
              }
            },
            first: 10,
            include: {
              merchant: true
            }
          });
  
          return {
            spends: spends,
            hasMore: true,
            cursor: spends.length ? spends[spends.length - 1].id.toString() : null
          };
        } catch (e) {
          throw new Error(e)
        }
      },
    });
  },
});
