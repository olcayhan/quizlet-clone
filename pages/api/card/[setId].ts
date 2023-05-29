import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/libs/serverAuth";

import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const { setId } = req.query;

    const cards = await prisma.card.findMany({
      where: {
        setId: setId,
      },
    });
    return res.status(200).json(cards);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
