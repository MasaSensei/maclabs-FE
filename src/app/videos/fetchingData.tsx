"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const VideoFetchingData = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://server.maclabs.co.id/api/videos`);
        setData(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
      {data?.data?.map((item: any) => (
        <div key={item.id} className="relative mb-4 group">
          <video
            src={`https://server.maclabs.co.id/public/storage/${item.video_url}`}
            className="w-full h-auto rounded-lg"
            loop
            controls
          ></video>
          <h3 className="text-lg font-semibold mt-2 uppercase text-center">
            {item.title.replace(/-/g, " ")}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default VideoFetchingData;
