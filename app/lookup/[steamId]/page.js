import User from "@/app/_components/User";

export default function Page({ params }) {
  return <User userId={params.steamId} />;
}
