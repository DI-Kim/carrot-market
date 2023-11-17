import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  return res.json({ ok: true });
}

export default withHandler("POST", handler);
/**
 * login ways
 * phone number -> user is exist?
 * --> token --> user #123456
 * --> #123456 --> SMS --> phon number (twilio)
 * --> #123456 --> token is exist? --> user --> login
 */
