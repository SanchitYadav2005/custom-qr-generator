"use client";

import axios from "axios";
import { useState } from "react";

export const useGetQr = () => {
  const [qrinfo, setQr] = useState<object>();

  const getQr = async (qr_id: string) => {
    try {
      const res = await axios.get(
        `https://api-ssl.bitly.com/v4/qr-codes/${qr_id}/image?format=`
      );
      if (res) {
        setQr(res.data?.qr_code_image);
      }
    } catch (e: any) {
      console.log(e);
    }
  };
  return { qrinfo, getQr };
};
