"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

interface PartListProps {
  device?: any;
  category?: string;
  slug?: string;
}

interface PartListResponse {
  data: any;
  isLoading: boolean;
}

const usePartList = (props: PartListProps): PartListResponse => {
  const { device, category, slug } = props;
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://server.maclabs.co.id/api/part_lists`;

        if (device) {
          url += `/${device}`;
        }
        if (category) {
          url += `/${category}`;
        }
        if (slug) {
          url += `/${slug}`;
        }

        const response = await axios.get(url, {
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        });
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [device, category, slug]);

  return {
    data,
    isLoading,
  };
};

export default usePartList;
