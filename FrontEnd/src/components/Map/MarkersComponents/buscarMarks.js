import { ip } from "../../../environments/develop";

export const BuscarMarks = async () => {
  try {
    const response = await fetch(`http://${ip}:3000/marks`);

    const markers = await response.json();

    return markers;
  } catch (err) {
    throw err;
  }
};

export const buscarMarcadores = async (setMarkers) => {
  try {
    const markersData = await BuscarMarks();
    const markers = markersData.map((marker) => ({
      key: marker.IdCoord,
      coords: {
        latitude: parseFloat(marker.Latitude),
        longitude: parseFloat(marker.Longitude),
      },
      id: marker.IdCoord,
      nome: marker.Nome,
      esporte: marker.EsportesPraticados,
    }));
    setMarkers(markers);
  } catch (err) {
    throw err;
  }
};
