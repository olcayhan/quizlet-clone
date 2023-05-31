import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { card } = req.body;
    const updatedCard = await prisma.card.update({
      where: {
        id: card.id,
      },
      data: {
        level: card.level + 1,
      },
    });
    return res.status(200).json(updatedCard);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
