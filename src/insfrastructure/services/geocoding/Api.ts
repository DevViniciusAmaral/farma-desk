import axios from "axios";

export const geocodingApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_GOOGLE_API_URL,
});
