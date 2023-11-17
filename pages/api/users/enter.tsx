import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const { phone, email } = req.body;

  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  //upsert
  const token = await client.token.create({
    data: {
      payload: payload,
      user: {
        // 유저가 있으면 connect, 유저가 없으면 create
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  console.log(token);

  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);
