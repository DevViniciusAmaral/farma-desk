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
    const { formatted } = await geocodingClient.geocoding(coords);
    return formatted;
  };

  return { getCoordinates, geocoding };
};
