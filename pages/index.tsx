import Header from "@/components/Header";
import SetFeed from "@/components/SetFeed";
import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

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
      {/* <button onClick={() => signOut()}>Çıkış Yap</button> */}
    </div>
  );
}
