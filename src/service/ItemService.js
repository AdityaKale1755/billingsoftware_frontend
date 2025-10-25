import axios from "axios";

export const addItem = async (item) => {
  return await axios.post(
    `https://billingsoftware17-b.onrender.com/admin/items`,
    item,
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
};

export const deleteItem = async (itemId) => {
  return await axios.delete(
    `https://billingsoftware17-b.onrender.com/admin/items/${itemId}`,
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
};

export const fetchItems = async () => {
  return await axios.get("https://billingsoftware17-b.onrender.com/items", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
