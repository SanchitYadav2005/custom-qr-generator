"use client";

import React, { useState, ChangeEvent } from "react";
import { useLinkShortner } from "@/hooks/useLinkShortner";
import Image from "next/image";
import { isUrl } from "check-valid-url";
import { useNextTheme } from "@/hooks/useNextTheme";
import { useCreateQr } from "@/hooks/useCreateQr";

//css
import "../styles/form.css";
// icons
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
//patterns
import rounded from "../../public/patterns/rounded.png";
import blob from "../../public/patterns/blob.png";
import block from "../../public/patterns/block.png";
import circle from "../../public/patterns/circle.png";
import diamond from "../../public/patterns/diamond.png";
import horizontal from "../../public/patterns/horizontal.png";
import standard from "../../public/patterns/standard.png";
import star from "../../public/patterns/star.png";
import vertical from "../../public/patterns/vertical.png";
//white patterns
import whiterounded from "../../public/patterns/whitePatterns/rounded.jpg";
import whiteblob from "../../public/patterns/whitePatterns/blob.jpg";
import whiteblock from "../../public/patterns/whitePatterns/block.png";
import whitecircle from "../../public/patterns/whitePatterns/circle.jpg";
import whitediamond from "../../public/patterns/whitePatterns/diamond.jpg";
import whitehorizontal from "../../public/patterns/whitePatterns/horizontal.jpg";
import whitestandard from "../../public/patterns/whitePatterns/standard.jpg";
import whitestar from "../../public/patterns/whitePatterns/star.jpg";
import whitevertical from "../../public/patterns/whitePatterns/vertical.jpg";
//dots
import concave from "../../public/dots/concave.png";
import extra_rounded from "../../public/dots/extra-rounded.png";
import leaf_inner from "../../public/dots/leaf-inner.png";
import leaf_outer from "../../public/dots/leaf-outer.png";
import leaf from "../../public/dots/leaf.png";
import roundedDot from "../../public/dots/rounded.png";
import slightly_rounded from "../../public/dots/slightly-rounded.png";
import standardDot from "../../public/dots/standard.png";
import target from "../../public/dots/target.png";
//white dots
import whiteConcave from "../../public/dots/whitedots/concave.jpg";
import whiteExtra_rounded from "../../public/dots/whitedots/extra-rounded.jpg";
import whiteLeafInner from "../../public/dots/whitedots/leaf-inner.jpg";
import whiteLeafOuter from "../../public/dots/whitedots/leaf-outer.jpg";
import whiteLeaf from "../../public/dots/whitedots/leaf.jpg";
import whiteRounded from "../../public/dots/whitedots/rounded.jpg";
import whiteSlightyRounded from "../../public/dots/whitedots/slightly-rounded.jpg";
import whiteStandard from "../../public/dots/whitedots/standard.jpg";
import whiteTarget from "../../public/dots/whitedots/target.jpg";

type Props = {};

export const Form = ({}: Props) => {
  const [data, setData] = useState<string>("");
  const [patternType, setPatternType] = useState<string>("standard");
  const [selectedPattern, setSelectedPattern] = useState<string>("standard");
  const [dotType, setDotType] = useState<string>("concave");
  const [selectedDotType, setSelectedDotType] = useState<string>("concave");
  const [presetColor, setPresetColor] = useState<string>("#000000");
  const [logo, setLogo] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("#000000");

  const nextTheme = useNextTheme();
  const linkShortner = useLinkShortner();
  const createQR = useCreateQr();

  if (!nextTheme || !linkShortner || !createQR) {
    return null;
  }

  const { resolvedTheme } = nextTheme;
  const { getUrl, shortedLink } = linkShortner;
  const { qrdata, createQr } = createQR;

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const isValid = isUrl(data);

  const handlePatternChange = (pattern: string) => {
    setPatternType(pattern);
    setSelectedPattern(pattern);
  };
  const handleDotChange = (dot: string) => {
    setDotType(dot);
    setSelectedDotType(dot);
  };
  const handlePresetColorChange = (color: string) => {
    setPresetColor(color);
    setSelectedColor(color);
  };
  const handleLogo = (logo: string) => {
    setLogo(logo);
  };
  const patternArray =
    resolvedTheme === "light"
      ? [
          { name: "rounded", image: rounded },
          { name: "standard", image: standard },
          { name: "horizontal", image: horizontal },
          { name: "blob", image: blob },
          { name: "block", image: block },
          { name: "circle", image: circle },
          { name: "vertical", image: vertical },
          { name: "diamond", image: diamond },
          { name: "star", image: star },
        ]
      : [
          { name: "rounded", image: whiterounded },
          { name: "standard", image: whitestandard },
          { name: "horizontal", image: whitehorizontal },
          { name: "blob", image: whiteblob },
          { name: "block", image: whiteblock },
          { name: "circle", image: whitecircle },
          { name: "vertical", image: whitevertical },
          { name: "diamond", image: whitediamond },
          { name: "star", image: whitestar },
        ];
  const dotArray =
    resolvedTheme === "light"
      ? [
          { name: "concave", image: concave },
          { name: "extra_rounded", image: extra_rounded },
          { name: "leaf", image: leaf },
          { name: "leaf_inner", image: leaf_inner },
          { name: "leaf_outer", image: leaf_outer },
          { name: "roundedDot", image: roundedDot },
          { name: "slightly_rounded", image: slightly_rounded },
          { name: "standardDot", image: standardDot },
          { name: "target", image: target },
        ]
      : [
          { name: "concave", image: whiteConcave },
          { name: "extra_rounded", image: whiteExtra_rounded },
          { name: "leaf", image: whiteLeaf },
          { name: "leaf_inner", image: whiteLeafInner },
          { name: "leaf_outer", image: whiteLeafOuter },
          { name: "roundedDot", image: whiteRounded },
          { name: "slightly_rounded", image: whiteSlightyRounded },
          { name: "standardDot", image: whiteStandard },
          { name: "target", image: whiteTarget },
        ];

  const handleCreatingQr = async () => {
    await getUrl(data);
    await createQr(patternType, dotType, presetColor, shortedLink, logo);
    setData("");
    setPatternType("");
    setDotType("");
    setPresetColor("");
  };
  return (
    <>
      <div className="main">
        <h2 className="main-heading">Generate Qr</h2>
        <div className="input-container">
          <input
            type="text"
            value={data}
            className="url"
            placeholder="enter url"
            onChange={handleData}
            style={{ color: isValid ? "#000000" : "#c1121f" }}
          />
          {!isValid && data.length > 0 && (
            <div className="error-class">url not valid!</div>
          )}
        </div>

        <div className="styles-container">
          <h3>Select a style</h3>
          <span>Patterns</span>
          <div className="pattern_container">
            {patternArray.map((pattern) => (
              <button
                key={pattern.name}
                onClick={() => handlePatternChange(pattern.name)}
                className={selectedPattern === pattern.name ? "select" : ""}
              >
                <Image
                  src={pattern.image}
                  alt="pattern icon"
                  width={50}
                  height={50}
                  placeholder={"blur"}
                />
              </button>
            ))}
          </div>
          <span>Corners</span>
          <div className="dot_container">
            {dotArray.map((dot) => (
              <button
                key={dot.name}
                onClick={() => handleDotChange(dot.name)}
                className={selectedDotType === dot.name ? "select" : ""}
              >
                <Image
                  src={dot.image}
                  alt="dot icon"
                  width={50}
                  height={50}
                  placeholder={"blur"}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="color-div">
          <div className="heading">Choose your color</div>
          <div className="color-preset">
            <span>Preset</span>
            {[
              { color: "#000000", label: "black", className: "preset0" },
              { color: "#DE3121", label: "red", className: "preset1" },
              { color: "#EF8000", label: "orange", className: "preset2" },
              { color: "#198639", label: "green", className: "preset3" },
              { color: "#229CE0", label: "light-blue", className: "preset4" },
              { color: "#315BD7", label: "blue", className: "preset5" },
              { color: "#6B52D1", label: "purple", className: "preset6" },
              { color: "#D84280", label: "pink", className: "preset7" },
            ].map((preset) => (
              <button
                key={preset.label}
                className={`${preset.className} ${
                  selectedColor === preset.color ? "select" : ""
                }`}
                onClick={() => handlePresetColorChange(preset.color)}
                aria-label={preset.label}
                style={{ backgroundColor: preset.color }}
              ></button>
            ))}
          </div>
        </div>
        <div className="upload-logo">
          <div>Add a logo in the center</div>
          <div className="logo">
            <input
              type="file"
              name="file"
              id="file"
              className="inputFile"
              onChange={() => handleLogo}
            />
            <label htmlFor="file" className="file-label">
              <ArrowUpTrayIcon className="arrow-logo" />
            </label>
          </div>
        </div>
        <button className="generate-button" onClick={handleCreatingQr}>
          Generate
        </button>
      </div>
    </>
  );
};
