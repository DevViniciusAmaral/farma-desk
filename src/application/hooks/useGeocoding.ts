import { geocodingClient } from "../../insfrastructure/services/geocoding";
import * as Location from "expo-location";

interface Coords {
  latitude: number;
  longitude: number;
}

export const useGeocoding = () => {
  const getCoordinates = async () => {
    const { granted } = await Location.getForegroundPermissionsAsync();
    if (!granted) {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) throw new Error("Erro ao obter sua localização!");
    }
    const { coords } = await Location.getCurrentPositionAsync();
    return { latitude: coords.latitude, longitude: coords.longitude };
  };

  const geocoding = async (coords: Coords) => {
    const { data } = (await geocodingClient.geocoding(coords)) as any;
    const formatted = data.results[0].formatted_address;
    return formatted as string;
  };

  return { getCoordinates, geocoding };
};
