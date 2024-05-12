"use client";

import React, { useState, ChangeEvent } from "react";
import { useLinkShortner } from "@/hooks/useLinkShortner";
import Image from "next/image";
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

  const linkShortner = useLinkShortner();
  if (!linkShortner) {
    return null;
  }
  const { getUrl, shortedLink } = linkShortner;
  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const handlePatternChange = (pattern: string) => {
    setPatternType(pattern);
  };

  return (
    <>
      <div>
        <h2>Generate Qr</h2>
        <input
          type="text"
          value={shortedLink}
          className="url"
          placeholder="enter url"
          onChange={handleData}
        />
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
      </div>
    </>
  );
};
