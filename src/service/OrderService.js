import axios from "axios";

export const latestOrders = async () => {
  return await axios.get(
    "https://billingsoftware17-b.onrender.com/orders/latest",
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
};

export const createOrder = async (order) => {
  return await axios.post(
    "https://billingsoftware17-b.onrender.com/orders",
    order,
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
};

export const deleteOrder = async (orderId) => {
  return await axios.delete(
    `https://billingsoftware17-b.onrender.com/orders/${orderId}`,
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
};
