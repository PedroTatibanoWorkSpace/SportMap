import { authKey } from "../../../environments/develop";
import polyline from "@mapbox/polyline";

export const AcharRota = async (origin, destination, setRouteCoordinates) => {
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&key=${authKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.routes.length) {
      const points = polyline.decode(data.routes[0].overview_polyline.points);
      const routeCoordinates = points.map((point) => ({
        latitude: point[0],
        longitude: point[1],
      }));
      setRouteCoordinates(routeCoordinates);
    } else {
      console.error("Sem rotas achadas");
    }
  } catch (error) {
    console.error(error);
  }
};
