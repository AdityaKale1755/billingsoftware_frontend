import axios from "axios";

export const createRazorpayOrder = async (data) => {
  return await axios.post(
    `https://billingsoftware17-b.onrender.com/payments/create-order`,
    data,
    { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
  );
};

export const verifyPayment = async (paymentData) => {
  return await axios.post(
    `https://billingsoftware17-b.onrender.com/payments/verify`,
    paymentData,
    { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
  );
};
