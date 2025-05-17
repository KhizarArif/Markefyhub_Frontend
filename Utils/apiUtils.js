import axiosInstance from "./axiosInstance";

export const get = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const post = async (url, data) => {
  try {
    // const response = await axiosInstance.post(url, data);
    const isFormData = data instanceof FormData;

    const response = await axiosInstance.post(url, data, {
      headers: isFormData
        ? { "Content-Type": "multipart/form-data" }
        : { "Content-Type": "application/json" },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

