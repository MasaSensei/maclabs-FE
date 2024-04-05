import axios from "axios";

const sendEmail = async (data: any) => {
  try {
    const response = await axios.post(
      `${process.env.SERVER}/send-reservation-email`,
      data
    );
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export { sendEmail };
