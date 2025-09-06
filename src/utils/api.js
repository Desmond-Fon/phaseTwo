import axios from "axios";

const BASE_URL = "https://reqres.in/api";

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const register = async (fullName, email, password, confirmPassword) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      full_name: fullName,
      email,
      password,
      confirm_password: confirmPassword,
    });
    return response.data;
  } catch (error) {
    console.error("Error registering:", error);
    throw error;
  }
};

export const resetPassword = async (email) => {
  try {
    const response = await axios.post("https://reqres.in/api/forgot-password", {
      email,
    });
    return response.data; 
  } catch (error) {
    console.error("Error registering:", error);
    throw new Error("Failed to reset password");
  }
};

export const fetchCourses = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

export const getCourseDetails = async (courseId) => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/${courseId}`
  );
  return response.data;
};

export const fetchAssignments = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
};

export const fetchUserProfile = async () => {
  const response = await axios.get("https://randomuser.me/api/");
  return response.data.results[0]; 
};
