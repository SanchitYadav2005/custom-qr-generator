"use client";

import React, { useState, ChangeEvent } from "react";

import Image from "next/image";
import { isUrl } from "check-valid-url";
import { useCreateQr } from "@/hooks/useCreateQr";
import "../styles/form.css";

type Props = {};

export const Form = ({}: Props) => {
  const [url, setUrl] = useState<string>("");
  const [img_url, setImg_url] = useState<string>("");
  const [img_width, setWidth] = useState<string>("");
  const [img_height, setHeight] = useState<string>("");

  const createQR = useCreateQr();

  if (!createQR) {
    return null;
  }

  const { qrdata, createQr } = createQR;

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const isValid = isUrl(url);

  const handleCreatingQr = async () => {
    setUrl("");
  };
  const handleLogo = (logo: string) => {
    setImg_url(logo);
  };
  const handleWidthChange = (width: string) => {
    setWidth(width);
  };
  const handleHeightChange = (height: string) => {
    setHeight(height);
  };

  return (
    <>
      <div className="main">
        <h2 className="main-heading">Generate Qr</h2>
        <div className="input-container">
          <input
            type="text"
            value={url}
            className="url"
            placeholder="enter url"
            onChange={handleData}
            required
            style={{ color: isValid ? "#000000" : "#c1121f" }}
          />
          {!isValid && url.length > 0 && (
            <div className="error-class">url not valid!</div>
          )}
        </div>
        <div className="other_fillings">
          <input type="text" placeholder="hex color" className="hex_color" />
          <input
            type="text"
            placeholder="image url"
            className="img_url"
            onChange={() => handleLogo}
          />
          <input
            type="number"
            placeholder="image width"
            className="img_width"
            onChange={() => handleWidthChange}
          />
          <input
            type="number"
            placeholder="image height"
            className="img_height"
            onChange={() => handleHeightChange}
          />
        </div>
        <button className="generate-button" onClick={handleCreatingQr}>
          Generate
        </button>
      </div>
    </>
  );
};
