"use client";

import React, { useState, ChangeEvent } from "react";
import { useLinkShortner } from "@/hooks/useLinkShortner";
import Image from "next/image";
import { isUrl } from "check-valid-url";

//css
import "../styles/form.css";
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

type Props = {};

export const Form = ({}: Props) => {
  const [data, setData] = useState<string>("");
  const [patternType, setPatternType] = useState<string>("standard");
  const [presetColor, setPresetColor] = useState<string>("#000000");

  const linkShortner = useLinkShortner();
  if (!linkShortner) {
    return null;
  }
  const { getUrl, shortedLink } = linkShortner;

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const isValid = isUrl(data);
  const handlePatternChange = (pattern: string) => {
    setPatternType(pattern);
  };
  const handlePresetColorChange = (color: string) => {
    setPresetColor(color);
  };
  return (
    <>
      <div className="main">
        <h2 className="main-heading">Generate Qr</h2>
        <input
          type="text"
          value={data}
          className="url"
          placeholder="enter url"
          onChange={handleData}
        />
        {!isValid && data.length > 0 && <div>Error</div>}

        <div className="styles-container">
          <h3>Select a style</h3>
          <span>Patterns</span>
          <div className="pattern_container">
            <button onClick={() => handlePatternChange("rounded")}>
              <Image
                src={rounded}
                alt="pattern icon"
                width={50}
                height={50}
                placeholder={"blur"}
              />
            </button>
            <button onClick={() => handlePatternChange("standard")}>
              <Image
                src={standard}
                alt="pattern icon"
                width={50}
                height={50}
                placeholder={"blur"}
              />
            </button>
            <button onClick={() => handlePatternChange("horizontal")}>
              <Image
                src={horizontal}
                alt="pattern icon"
                width={50}
                height={50}
                placeholder={"blur"}
              />
            </button>
            <button onClick={() => handlePatternChange("blob")}>
              <Image
                src={blob}
                alt="pattern icon"
                width={50}
                height={50}
                placeholder={"blur"}
              />
            </button>
            <button onClick={() => handlePatternChange("block")}>
              <Image
                src={block}
                alt="pattern icon"
                width={50}
                height={50}
                placeholder={"blur"}
              />
            </button>
            <button onClick={() => handlePatternChange("circle")}>
              <Image
                src={circle}
                alt="pattern icon"
                width={50}
                height={50}
                placeholder={"blur"}
              />
            </button>
            <button onClick={() => handlePatternChange("vertical")}>
              <Image
                src={vertical}
                alt="pattern icon"
                width={50}
                height={50}
                placeholder={"blur"}
              />
            </button>
            <button onClick={() => handlePatternChange("diamond")}>
              <Image
                src={diamond}
                alt="pattern icon"
                width={50}
                height={50}
                placeholder={"blur"}
              />
            </button>
            <button onClick={() => handlePatternChange("star")}>
              <Image
                src={star}
                alt="pattern icon"
                width={50}
                height={50}
                placeholder={"blur"}
              />
            </button>
          </div>
          <span>Corners</span>
          <div className="dot_container">
            <button onClick={() => handlePatternChange("concave")}>
              <Image
                src={concave}
                alt="pattern icon"
                width={50}
                height={50}
                placeholder={"blur"}
              />
            </button>
            <button onClick={() => handlePatternChange("extra_rounded")}>
              <Image
                src={extra_rounded}
                alt="pattern icon"
                width={50}
                height={50}
                placeholder={"blur"}
              />
            </button>
            <button onClick={() => handlePatternChange("leaf")}>
              <Image
                src={leaf}
                alt="pattern icon"
                width={50}
                height={50}
                placeholder={"blur"}
              />
            </button>
            <button onClick={() => handlePatternChange("leaf_inner")}>
              <Image
                src={leaf_inner}
                alt="pattern icon"
                width={50}
                height={50}
                placeholder={"blur"}
              />
            </button>
            <button onClick={() => handlePatternChange("leaf_outer")}>
              <Image
                src={leaf_outer}
                alt="pattern icon"
                width={50}
                height={50}
                placeholder={"blur"}
              />
            </button>

            <button onClick={() => handlePatternChange("roundedDot")}>
              <Image
                src={roundedDot}
                alt="pattern icon"
                width={50}
                height={50}
                placeholder={"blur"}
              />
            </button>
            <button onClick={() => handlePatternChange("slightly_rounded")}>
              <Image
                src={slightly_rounded}
                alt="pattern icon"
                width={50}
                height={50}
                placeholder={"blur"}
              />
            </button>
            <button onClick={() => handlePatternChange("standardDot")}>
              <Image
                src={standardDot}
                alt="pattern icon"
                width={50}
                height={50}
                placeholder={"blur"}
              />
            </button>
            <button onClick={() => handlePatternChange("target")}>
              <Image
                src={target}
                alt="pattern icon"
                width={50}
                height={50}
                placeholder={"blur"}
              />
            </button>
          </div>
        </div>
        <div className="color-div">
          <div className="heading">Choose your color</div>
          <div className="color-preset">
            <div>Preset</div>
            <button
              className="preset0"
              onClick={() => handlePresetColorChange("#000000")}
              aria-label="black"
            ></button>
            <button
              className="preset1"
              onClick={() => handlePresetColorChange("#DE3121")}
              aria-label="red"
            ></button>
            <button
              className="preset2"
              onClick={() => handlePresetColorChange("#EF8000")}
              aria-label="orange"
            ></button>
            <button
              className="preset3"
              onClick={() => handlePresetColorChange("#198639")}
              aria-label="green"
            ></button>
            <button
              className="preset4"
              onClick={() => handlePresetColorChange("#229CE0")}
              aria-label="light-blue"
            ></button>
            <button
              className="preset5"
              onClick={() => handlePresetColorChange("#315BD7")}
              aria-label="blue"
            ></button>
            <button
              className="preset6"
              onClick={() => handlePresetColorChange("#6B52D1")}
              aria-label="purple"
            ></button>
            <button
              className="preset7"
              onClick={() => handlePresetColorChange("#D84280")}
              aria-label="pink"
            ></button>
          </div>
        </div>
        <div className="upload-logo">
          <div>Add a logo in the center</div>
          <div className="logo">
            <input type="file" />
          </div>
        </div>
      </div>
    </>
  );
};
