import axios from "axios";

const BASE_URL = "https://reqres.in/api";

const API_KEY = "reqres-free-v1"; // Your API key

// Login API
export const login = async (email, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/login`,
      { email, password },
      {
        headers: {
          "x-api-key": API_KEY, // Add the API key here in the headers
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

// Register API
export const register = async (email) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/register`,
      {
        username: "eve.holt@reqres.in",
        email,
        password: "pistol",
      },
      {
        headers: {
          "x-api-key": API_KEY, // Add the API key here in the headers
        },
      }
    );
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
  console.log(response)
  return response.data.results[0]; 
};
