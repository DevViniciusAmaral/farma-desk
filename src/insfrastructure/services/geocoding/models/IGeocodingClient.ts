import { AxiosPromise } from "axios";
import { IGeocodingRequest } from "./request/IGeocodingRequest";
import { IGeocodingResponse } from "./response/IGeocodingResponse";

export interface IGeocodingClient {
  geocoding: (data: IGeocodingRequest) => AxiosPromise<IGeocodingResponse>;
}
