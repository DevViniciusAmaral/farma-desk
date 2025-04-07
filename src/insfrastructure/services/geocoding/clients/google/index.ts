import { geocodingApi } from "../../Api";
import { IGeocodingClient } from "../../models/IGeocodingClient";

const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

export const googleGeocodingClient: IGeocodingClient = {
  geocoding: async ({ latitude, longitude }) => {
    return await geocodingApi.get(
      `/json?latlng=${latitude},${longitude}&key=${API_KEY}`
    );
  },
};
