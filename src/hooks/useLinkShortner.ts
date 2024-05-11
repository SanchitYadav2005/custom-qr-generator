'use client'
import { useState } from "react"
import axios from "axios";

export const useLinkShortner = () => {
    const [shortedLink, setShortedLink] = useState<string>("");
    
    const getUrl = async (longUrl:string) => {
        try {
            const TOKEN = '2fe7fce229764a09c119bfc3a57d97612f8c6c36';
            const res = await axios.post('https://api-ssl.bitly.com/v4/shorten', {
              long_url: longUrl,
              domain: "bit.ly",
              group_guid: "Bo5afALkuSl"
            }, {
              headers: {
                'Authorization': `Bearer ${TOKEN}`,
                'Content-Type': 'application/json'
              }
            });
      
            setShortedLink(res.data.link);
            console.log(res.data.lnik);
          } catch (error) {
            console.log("error:", error);
          }
    }
    return {getUrl, shortedLink}
}