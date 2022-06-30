import { trpc } from "../utils/trpc";

export default function Home() {
  const { data, isLoading, isError } = trpc.useQuery(["getAllGames"]);

  if (isLoading || !data) return <div>Loading...</div>;

  console.log(data);

  return <div>{data[0]?.name}</div>;
}
