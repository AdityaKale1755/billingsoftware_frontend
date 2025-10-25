import axios from "axios";

export const addCategory = async (category) => {
  return await axios.post(
    "https://billingsoftware17-b.onrender.com/admin/categories",
    category,
    {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }
  );
};

export const deleteCategory = async (categoryId) => {
  return await axios.delete(
    `https://billingsoftware17-b.onrender.com/admin/categories/${categoryId}`,
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
};

export const fetchCategory = async () => {
  return await axios.get(
    "https://billingsoftware17-b.onrender.com/categories",
    {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }
  );
};

// https://billingsoftware17-b.onrender.com/api/v1/categories
