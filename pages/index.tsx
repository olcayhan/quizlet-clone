import Header from "@/components/Header";
import SetFeed from "@/components/SetFeed";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default function Home() {
  return (
    <div className="w-full h-full">
      <Header />
      <SetFeed />
    </div>
  );
}
