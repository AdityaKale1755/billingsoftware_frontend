import axios from "axios";

import React from "react";

export const login = async (data) => {
  return await axios.post("http://localhost:8080/login", data);
};
