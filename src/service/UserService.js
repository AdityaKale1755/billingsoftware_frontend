import axios from "axios";

export const addUser = async (user) => {
  return await axios.post(
    "https://billingsoftware17-b.onrender.com/admin/register",
    user,
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
};

export const deleteUser = async (id) => {
  return await axios.delete(
    `https://billingsoftware17-b.onrender.com/admin/users/${id}`,
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
};

export const fetchUsers = async () => {
  return await axios.get(
    "https://billingsoftware17-b.onrender.com/admin/users",
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
};
