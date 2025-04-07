import { googleGeocodingApi } from "./Api";
import { IGeocodingClient } from "../../models/IGeocodingClient";
import { IGeocodingRequest } from "../../models/request/IGeocodingRequest";
import { IGeocodingResponse } from "../../models/response/IGeocodingResponse";

const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

export const googleGeocodingClient: IGeocodingClient<
  IGeocodingRequest,
  IGeocodingResponse
> = {
  geocoding: async ({ latitude, longitude }) => {
    const data = (await googleGeocodingApi.get(
      `/json?latlng=${latitude},${longitude}&key=${API_KEY}`
    )) as any;
    return { formatted: data.results[0].formatted_address };
  },
};
