import { LocationAccuracy, watchPositionAsync } from "expo-location";
import { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const startWatching = async () => {
      await watchPositionAsync(
        {
          accuracy: LocationAccuracy.High,
          timeInterval: 100,
          distanceInterval: 0.005,
        },
        (resposta) => {
          setLocation(resposta);
          setCarregando(false);
        }
      );
    };
    startWatching();
  }, []);

  return { location, carregando };
};

export default useLocation;
