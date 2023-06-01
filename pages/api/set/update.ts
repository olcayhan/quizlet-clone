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
    const { info } = req.body;
    console.log(info);

    const set = await prisma.set.update({
      where: {
        id: info.id,
      },
      data: {
        name: info.name,
        desc: info.desc,
      },
    });
    return res.status(200).json(set);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
