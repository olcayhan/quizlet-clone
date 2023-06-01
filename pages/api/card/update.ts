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
    const { card, set } = req.body;

    if (card.setId !== undefined) {
      const item = await prisma.card.create({
        data: {
          cardId: card.id,
          term: card.term,
          level: card.level,
          starred: card.starred,
          definition: card.definition,
          setId: set.data.id,
        },
      });
      return res.status(200).json(item);
    }

    const item = await prisma.card.create({
      data: {
        cardId: card.id,
        term: card.term,
        level: card.level,
        starred: card.starred,
        definition: card.definition,
        setId: set.data.id,
      },
    });
    return res.status(200).json(item);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
