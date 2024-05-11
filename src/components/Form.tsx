'use client'

import React, { useState, ChangeEvent } from "react";
import { useLinkShortner } from "@/hooks/useLinkShortner";

type Props = {};

export const Form = ({}: Props) => {
  const [data, setData] = useState<string>(""); 
  const [response, setResponse] = useState<object>();
    const linkShortner = useLinkShortner();
    if(!linkShortner){
        return null
    }
    const {getUrl, shortedLink} = linkShortner;
  const handleData = (e: ChangeEvent<HTMLInputElement>) => { 
    setData(e.target.value);
  };



  return (
    <>
      <form action="">
        <input type="text" value={data} onChange={handleData}/>
      </form>
      <button onClick={()=>getUrl(data)}>click</button>
      <h1>{shortedLink}</h1>
    </>
  );
};
