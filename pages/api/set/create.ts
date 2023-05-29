import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/libs/serverAuth";

import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { currentUser } = await serverAuth(req, res);
    const { info } = req.body;

    const set = await prisma.set.create({
      data: {
        name: info.name,
        desc: info.desc,
        userId: currentUser.id,
      },
    });

    return res.status(200).json(set);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
