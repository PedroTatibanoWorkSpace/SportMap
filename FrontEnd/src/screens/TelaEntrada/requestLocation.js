import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { useEffect, useState } from "react";

export function RequestLocation() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    async function getLocation() {
      let { granted } = await requestForegroundPermissionsAsync();
      if (granted) {
        const currentPosition = await getCurrentPositionAsync();
        setLocation(currentPosition);
      }
    }

    getLocation();
  }, []);

  return location;
}
