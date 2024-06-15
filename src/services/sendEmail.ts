import axios from "axios";

const sendEmail = async (data: any) => {
  try {
    const response = await axios.post(
      `https://server.maclabs.co.id/api/send-reservation-email`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export { sendEmail };
