import { googleGeocodingClient } from "./clients/google";
import { IGeocodingClient } from "./models/IGeocodingClient";

export const geocodingClient: IGeocodingClient = googleGeocodingClient;
