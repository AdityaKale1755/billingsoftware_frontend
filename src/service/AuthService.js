import axios from "axios";

import React from "react";

export const login = async (data) => {
  return await axios.post(
    "https://billingsoftware17-b.onrender.com/login",
    data
  );
};
