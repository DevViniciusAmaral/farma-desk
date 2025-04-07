export interface IGeocodingClient<Request, Response> {
  geocoding: (data: Request) => Promise<Response>;
}
