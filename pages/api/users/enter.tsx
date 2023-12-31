import twilio from "twilio";
import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { Twilio } from "twilio";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
//! email은 사이트(sendgrid) 인증이 오래 걸려서 넘어감

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const { phone, email } = req.body;

  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const user = phone ? { phone } : email ? { email } : null;
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

  if (phone) {
    // const message = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.TWILIO_MSID,
    //   // to: phone
    //   to: process.env.TWILIO_PHONE!,
    //   body: `Your login token is ${payload}`,
    // });
    // console.log(message);
  }

  return res.json({
    ok: true,
  });
}

export default withHandler({ method: "POST", handler, isPrivate: false });
