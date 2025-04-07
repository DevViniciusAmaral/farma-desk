import { googleGeocodingClient } from "./clients/google";
import { IGeocodingClient } from "./models/IGeocodingClient";
import { IGeocodingRequest } from "./models/request/IGeocodingRequest";
import { IGeocodingResponse } from "./models/response/IGeocodingResponse";

export const geocodingClient: IGeocodingClient<
  IGeocodingRequest,
  IGeocodingResponse
> = googleGeocodingClient;
