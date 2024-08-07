import { DetailServices } from "@/types/detailServices";
import axios, { AxiosError } from "axios";

const detailServices = async () => {
  try {
    const response = await axios.get(
      `https://server.maclabs.co.id/api/detail_services`
    );
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

const getDetailServicesId = async (category: string, url: string) => {
  try {
    const response = await axios.get(
      `
    https://server.maclabs.co.id/api/detail_services/${category}/${url}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const getDetailServicesByUrl = async (
  url: string,
  retries: number = 3
): Promise<DetailServices | undefined> => {
  try {
    const response = await axios.get(
      `https://server.maclabs.co.id/api/detail_services/${url}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response?.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 429 && retries > 0) {
        const retryAfter = axiosError.response.headers["retry-after"] || 10; // fallback to 10 seconds if 'retry-after' header is missing
        console.log(`Rate limited. Retrying after ${retryAfter} seconds...`);
        await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
        return getDetailServicesByUrl(url, retries - 1); // Recursive retry
      } else {
        throw new Error("Request failed with status 429 and no retries left.");
      }
    } else {
      throw error;
    }
  }
};

export { detailServices, getDetailServicesId, getDetailServicesByUrl };
