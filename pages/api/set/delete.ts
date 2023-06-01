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
    const { setId } = req.body;
    console.log(setId);
    const deleteSet = await prisma.set.delete({
      where: {
        id: setId,
      },
    });
    const deleteCards = await prisma.card.deleteMany({
      where: {
        setId: setId,
      },
    });

    return res.status(200).json({ deleteSet, deleteCards });
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
