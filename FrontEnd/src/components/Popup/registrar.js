import AsyncStorage from "@react-native-async-storage/async-storage";
import { ip } from "../../environments/develop";

export const Registrar = async (
  selectedSport,
  localName,
  newMarkerCoords,
  onClosePopup
) => {

  try {
    const userId = await AsyncStorage.getItem("userId");
    if (selectedSport && localName && newMarkerCoords && userId) { 
      const response = await fetch(`http://${ip}:3000/mandarCoords`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          latitude: newMarkerCoords.latitude,
          longitude: newMarkerCoords.longitude,
          esportesPraticados: selectedSport,
          nome: localName,
          userId: parseInt(userId) 
        }),
      });
      const data = await response.json();
      onClosePopup();
    } else {
      alert("Os campos não foram preenchidos corretamente.");
    }
  } catch (error) {
    console.error("Erro ao enviar coordenadas:", error);
  }
};
