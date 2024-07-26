import { LocalizacaoFisica } from "../LocationComponents/endereçosFisicos.js";

export const AbrirPopUp = (e, setOpenPopup, setNewMarkerCoords, setAddress) => {
  const latitude = e.nativeEvent.coordinate.latitude;
  const longitude = e.nativeEvent.coordinate.longitude;
  setOpenPopup(true);
  setNewMarkerCoords({ latitude, longitude });
  LocalizacaoFisica(latitude, longitude, setAddress);
};

export const PegarDadosCoords = (marker, setSelectedMarker, setAddress) => {
  setSelectedMarker(marker);
  LocalizacaoFisica(marker.coords.latitude, marker.coords.longitude, setAddress);
};
