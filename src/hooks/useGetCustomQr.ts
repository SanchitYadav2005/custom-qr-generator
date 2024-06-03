"use client";

import axios from "axios";
import { useState } from "react";

export const useGetCustomQr = () => {
  const [qrImg, setQrImg] = useState<string>("");

  const createQr = async (
    url: string,
    img_url: string,
    img_width: number,
    img_height: number
  ) => {
    const imgURL = img_url.length > 0 ? img_url : "";
    const imgHeight = img_height > 0 ? img_height : "";
    const imgWidth = img_width > 0 ? img_width : "";

    try {
      const res = await axios.get(
        `https://quickchart.io/qr?text=${encodeURIComponent(url)}&centerImageUrl=${encodeURIComponent(imgURL)}&centerImageWidth=${imgWidth}&centerImageHeight=${imgHeight}`,
        {
          responseType: 'blob',
        }
      );

      if (res && res.status === 200) {
        const imageUrl = URL.createObjectURL(res.data);
        setQrImg(imageUrl);
      }
    } catch (e: any) {
      console.error("Error generating QR code:", e);
    }
  };

  return { createQr, qrImg };
};
