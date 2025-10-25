import axios from "axios";

export const fetchDashboardData = async () => {
  return await axios.get("https://billingsoftware17-b.onrender.com/dashboard", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
