import axios from "axios";

const detailServices = async () => {
  try {
    const response = await axios.get(
      `https://server.maclabs.co.id/api/detail_services`
    );
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

const getDetailServicesId = async (category: number, url: string) => {
  if (!Number.isInteger(category) || category <= 0) {
    throw new Error("Invalid category value");
  }
  try {
    const response = await axios.get(`
    https://server.maclabs.co.id/api/detail_services?category=${category}&url=${url}`);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const getDetailServicesByUrl = async (url: string) => {
  try {
    const response = await axios.get(
      `https://server.maclabs.co.id/api/detail_services?url=${url}`
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export { detailServices, getDetailServicesId, getDetailServicesByUrl };
