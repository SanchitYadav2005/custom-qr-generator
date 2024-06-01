"use client";

import axios from "axios";
import { useState } from "react";

export const useCreateQr = () => {
  const [qrdata, setData] = useState<object>();

  const createQr = async (
    patternType: string,
    dotType: string,
    presetColor: string,
    url: string,
    logo: any
  ) => {
    const TOKEN = process.env.BITLY_TOKEN;
    try {
      const res = await axios.post("https://api-ssl.bitly.com/v4/qr-codes", {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Default QR Code",
          group_guid: process.env.GROUP_ID,
          destination: { bitlink_id: url },
          archived: false,
          render_customizations: {
            background_color: "#ffffff",
            dot_pattern_color: presetColor,
            dot_pattern_type: patternType,
            corners: {
              corner_1: {
                inner_color: presetColor,
                outer_color: presetColor,
                shape: dotType,
              },
              corner_2: {
                inner_color: presetColor,
                outer_color: presetColor,
                shape: dotType,
              },
              corner_3: {
                inner_color: presetColor,
                outer_color: presetColor,
                shape: dotType,
              },
            },
            logo: logo,
            branding: { bitly_brand: true },
            spec_settings: { error_correction: 4 },
          },
        }),
      });
      if (res) {
        console.log(res);
        setData(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return { qrdata, createQr };
};
