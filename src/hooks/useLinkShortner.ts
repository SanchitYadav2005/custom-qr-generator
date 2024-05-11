'use client'
import { useState } from "react"
import axios from "axios";

export const useLinkShortner = () => {
    const [shortedLink, setShortedLink] = useState<string>("");
    
    const getUrl = async (longUrl:string) => {
        try {
            const TOKEN = process.env.BITLY_TOKE;
            const res = await axios.post('https://api-ssl.bitly.com/v4/shorten', {
              long_url: longUrl,
              domain: "bit.ly",
              group_guid: process.env.GROUP_ID
            }, {
              headers: {
                'Authorization': `Bearer ${TOKEN}`,
                'Content-Type': 'application/json'
              }
            });
      
            setShortedLink(res.data.link);
            console.log(res.data.link);
          } catch (error) {
            console.log("error:", error);
          }
    }
    return {getUrl, shortedLink}
}