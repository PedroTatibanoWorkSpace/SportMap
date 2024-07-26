import { authKey } from "../../../environments/develop";

export const LocalizacaoFisica = async (latitude, longitude, setAddress) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${authKey}`
    );
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      setAddress(data.results[0].formatted_address);
    } else {
      setAddress("Endereço não encontrado");
    }
  } catch (error) {
    console.error("Erro ao buscar endereço:", error);
    setAddress("Erro ao buscar endereço");
  }
};
