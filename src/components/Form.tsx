"use client";

import React, { useState, ChangeEvent } from "react";
import { isUrl } from "check-valid-url";
import { useGetCustomQr } from "@/hooks/useGetCustomQr";
import "../styles/form.css";
import Qr from "./Qr";

type Props = {};

export const Form = ({}: Props) => {
  const [url, setUrl] = useState<string>("");
  const [img_url, setImg_url] = useState<string>("");
  const [img_width, setWidth] = useState<number | undefined>(undefined);
  const [img_height, setHeight] = useState<number | undefined>(undefined);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  const createQrHook = useGetCustomQr();

  if (!createQrHook) {
    return null;
  }

  const { createQr, qrImg } = createQrHook;

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const isValid = isUrl(url);

  const handleCreatingQr = async () => {
    if (isValid) {
      const width = img_width ?? 0;
      const height = img_height ?? 0;
      await createQr(url, img_url, width, height);
      setUrl("");
      setImg_url("");
      setWidth(undefined);
      setHeight(undefined);
      setShowOverlay(true); // Show overlay when QR code is generated
    }
  };

  const handleLogo = (e: ChangeEvent<HTMLInputElement>) => {
    setImg_url(e.target.value);
  };

  const handleWidthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWidth(Number(e.target.value));
  };

  const handleHeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(e.target.value));
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };
  return (
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
          style={{ color: isValid ? "#a8dadc" : "#c1121f" }}
        />
        {!isValid && url.length > 0 && (
          <div className="error-class">url not valid!</div>
        )}
      </div>
      <div className="other_fillings">
        <input
          type="text"
          placeholder="image url"
          className="img_url input"
          onChange={handleLogo}
        />
        <input
          type="number"
          placeholder="image width"
          className="img_width input"
          onChange={handleWidthChange}
        />
        <input
          type="number"
          placeholder="image height"
          className="img_height input"
          onChange={handleHeightChange}
        />
      </div>
      <button className="generate-button" onClick={handleCreatingQr}>
        Generate
      </button>
      {showOverlay && qrImg && (
        <div className="overlay-container">
          <div className="overlay-content">
            <button className="close-button" onClick={handleCloseOverlay}>X</button>
            <Qr URL={qrImg} />
          </div>
        </div>
      )}
    </div>
  );
};
