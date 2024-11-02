// server/src/middlewares/generateToken.ts
import axios from "axios";
import { NextFunction, Request, Response } from "express";

export type RequestExtended = Request & { token?: string };

export const generateToken = async (
  req: RequestExtended,
  res: Response,
  next: NextFunction
) => {
  const CONSUMER_KEY = process.env.MPESA_CONSUMER_KEY as string;
  const CONSUMER_SECRET = process.env.MPESA_CONSUMER_SECRET as string;

  // Temporary logging
  console.log("CONSUMER_KEY:", CONSUMER_KEY);
  console.log("CONSUMER_SECRET:", CONSUMER_SECRET);

  const URL =
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";

  const auth = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString(
    "base64"
  );
  console.log("Authorization Header:", `Basic ${auth}`);

  try {
    const response = await axios.get(URL, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    req.token = response.data.access_token;
    next();
  } catch (error: any) {
    console.error(
      "Error generating token:",
      error.response?.data || error.message
    );
    res.status(500).json({
      message: "Failed to generate access token",
      error: error.response?.data || error.message,
    });
  }
};
