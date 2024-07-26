import {
  AbrirPopUp,
  PegarDadosCoords,
} from "./MarkersComponents/utilitarios.js";
import { ActivityIndicator, Image, TouchableOpacity, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import React, { useEffect, useRef, useState } from "react";

import { AcharRota } from "./LocationComponents/fazerRota.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BotaoRadio from "../Buttons/BotaoRadio";
import Label from "../Label/index.js";
import MarkerImg from "../../assets/Images/Marker.png";
import { Modalize } from "react-native-modalize";
import Popup from "../Popup";
import RoutesImg from "../../assets/Images/Routes.png";
import { addFavorite } from "./FavoritosComponents/addFavorite.js";
import { addHistory } from "./HistoricoComponents/addHistory.js";
import { buscarMarcadores } from "./MarkersComponents/buscarMarks.js";
import { customStyle } from "./StylesComponents/customMapStyle.js";
import { removerFavorito } from "./FavoritosComponents/removeFavorite.js";
import styles from "./StylesComponents/styles.js";
import useLocation from "./LocationComponents/useLocation.js";
import { useRoute } from "@react-navigation/native";
import BuscarFavs from "../../screens/Favoritos/buscarFav.js";


const Map = ({ navigation }) => {
  const { location, carregando } = useLocation();
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [newMarkerCoords, setNewMarkerCoords] = useState(null);
  const [address, setAddress] = useState("");
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [favoritado, setFavoritado] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const route = useRoute();
  const mapRef = useRef(null);

  useEffect(() => {
    if (location) {
      buscarMarcadores(setMarkers).catch((err) =>
        console.error("Erro ao buscar marcadores:", err)
      );
    }
  }, [location]);

  const verificarFavoritos = async (marker) => {
    if (marker) {
      try {
        const userId = await AsyncStorage.getItem("userId");
        const favoritos = await BuscarFavs(userId);
        const isFavorito = favoritos.some((fav) => fav.itemId === marker.id);
        setFavoritado(isFavorito);
      } catch (error) {
        console.error("Erro ao verificar favoritos:", error);
      }
    }
  };

  useEffect(() => {
    if (route.params?.selectedMarker) {
      const { selectedMarker } = route.params;
      setSelectedMarker(selectedMarker);
      setAddress(selectedMarker.endereco);
      setFavoritado(true);

      if (mapRef.current && selectedMarker.coords) {
        mapRef.current.animateToRegion({
          latitude: selectedMarker.coords.latitude,
          longitude: selectedMarker.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      }
    }
  }, [route.params]);

  const FazerRota = async () => {
    if (!location || !selectedMarker || !selectedMarker.coords) {
      console.error("Localização ou marcador não disponíveis");
      return;
    }
    const origin = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    const destination = {
      latitude: selectedMarker.coords.latitude,
      longitude: selectedMarker.coords.longitude,
    };
    AcharRota(origin, destination, setRouteCoordinates);
    setSelectedMarker(null);

    try {
      const userId = await AsyncStorage.getItem("userId");
      await addHistory(
        userId,
        selectedMarker.id,
        address,
        selectedMarker.nome,
        selectedMarker.esporte,
        selectedMarker.coords.latitude,
        selectedMarker.coords.longitude
      );
    } catch (error) {
      console.error("Erro ao adicionar ao histórico:", error);
    }
  };

  const FecharModal = () => {
    setSelectedMarker(null);
    setAddress("");
    setRouteCoordinates([]);
  };

  const Favoritar = async () => {
    if (selectedMarker) {
      try {
        const userId = await AsyncStorage.getItem("userId");
        if (favoritado) {
          await removerFavorito(selectedMarker.id, userId);
          setFavoritado(false);
        } else {
          await addFavorite(
            selectedMarker.id,
            address,
            userId,
            selectedMarker.nome,
            selectedMarker.esporte,
            selectedMarker.coords.latitude,
            selectedMarker.coords.longitude
          );
          setFavoritado(true);
        }
      } catch (error) {
        console.error("Erro ao adicionar/remover favorito:", error);
      }
    }
  };

  return (
    <View style={styles.mapContainer}>
      {carregando ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : location && location.coords ? (
        <MapView
          ref={mapRef}
          onPress={(e) =>
            AbrirPopUp(e, setOpenPopup, setNewMarkerCoords, setAddress)
          }
          showsMyLocationButton={false}
          showsUserLocation={true}
          customMapStyle={customStyle}
          showsCompass={false}
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.key}
              coordinate={marker.coords}
              image={MarkerImg}
              onPress={() => {
                PegarDadosCoords(marker, setSelectedMarker, setAddress);
                verificarFavoritos(marker);
              }}
            />
          ))}
          {routeCoordinates.length > 0 && (
            <Polyline
              coordinates={routeCoordinates}
              strokeWidth={4}
              strokeColor="#64E3A1"
            />
          )}
        </MapView>
      ) : null}
      {selectedMarker && (
        <Modalize
          adjustToContentHeight={380}
          modalStyle={styles.modalizeContainer}
          alwaysOpen={300}
          handlePosition="inside"
        >
          <View style={styles.viewModalize}>
            <Label text={selectedMarker.nome} type={"tittle"} />
            <Label
              text={selectedMarker.esporte}
              type="tittle"
              color={"verde"}
            />
            <Label text={address} />
            <View style={styles.viewRota}>
              <TouchableOpacity style={styles.buttonRoute} onPress={FazerRota}>
                <Image source={RoutesImg} style={{ width: 50, height: 50 }} />
                <Label text={"FAZER ROTA"} type={"tittle"} />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonsModalize}>
              <TouchableOpacity style={styles.buttonFav} onPress={Favoritar}>
                <BotaoRadio
                  favoritadoInicial={favoritado}
                  onPress={Favoritar}
                />
                <Label text={"FAVORITAR"} type={"negrito"} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonVoltar}
                onPress={FecharModal}
              >
                <Label text={"VOLTAR"} type={"negrito"} />
              </TouchableOpacity>
            </View>
          </View>
        </Modalize>
      )}
      {openPopup && (
        <Popup
          onClosePopup={() => setOpenPopup(false)}
          newMarkerCoords={newMarkerCoords}
          openPopup={openPopup}
        />
      )}
    </View>
  );
};

export default Map;
