import Header from "@/components/Header";
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
  const { data: currentUser } = useCurrentUser();
  return (
    <div className="w-full h-full">
      <Header />

      <p>Hello World</p>
      <button onClick={() => signOut()}>Çıkış Yap</button>
    </div>
  );
}
