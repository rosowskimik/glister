import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { prisma } from "../../../db/client";
import superjson from "superjson";

export const appRouter = trpc
  .router()
  .transformer(superjson)
  .query("getAllGames", {
    async resolve() {
      return await prisma.game.findMany();
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
