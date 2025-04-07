import axios from "axios";

export const googleGeocodingApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_GOOGLE_API_URL,
});

googleGeocodingApi.interceptors.response.use((response) => response.data);
