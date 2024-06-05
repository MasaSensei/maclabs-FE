"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

interface PartListProps {
  device?: any;
  category?: string;
  slug?: string;
}

const usePartList: React.FC<PartListProps> = (props) => {
  const { device, category, slug } = props;
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://server.maclabs.co.id/api/part_lists/`;

        if (device) {
          url += `?device=${device}`;
        }
        if (category) {
          url += `&category=${category}`;
        }
        if (slug) {
          url += `&category=${category}&slug=${slug}`;
        }

        const response = await axios.get(url);
        setData(response.data.data);
        console.log(setData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [device, category, slug]);

  return data;
};

export default usePartList;
