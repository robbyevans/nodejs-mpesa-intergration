// server/src/controllers/stkController.ts
import axios from "axios";
import { Response } from "express";
import { generateTimestamp } from "../../utils/timeStamp";
import { RequestExtended } from "../middlewares/generateToken";

const handleStkPush = async (req: RequestExtended, res: Response) => {
  const { phone, amount } = req.body;

  const BUSINESS_SHORT_CODE = process.env.MPESA_BUSINESS_SHORT_CODE as string;
  const timestamp = generateTimestamp();

  const password = Buffer.from(
    BUSINESS_SHORT_CODE + process.env.MPESA_PASS_KEY + timestamp
  ).toString("base64");

  const payload = {
    BusinessShortCode: BUSINESS_SHORT_CODE,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: phone,
    PartyB: BUSINESS_SHORT_CODE,
    PhoneNumber: phone,
    CallBackURL: "https://mydomain.com/path",
    AccountReference: "BuySasa online shop",
    TransactionDesc: "Payment",
  };

  try {
    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      payload,
      {
        headers: {
          Authorization: `Bearer ${req.token}`,
        },
      }
    );
    res.status(201).json({
      message: true,
      data: response.data,
    });
  } catch (error: any) {
    console.error("Error response:", error.response?.data || error.message);
    res.status(500).json({
      message: "Failed",
      error: error.response?.data || error.message,
    });
  }
};
export { handleStkPush };
