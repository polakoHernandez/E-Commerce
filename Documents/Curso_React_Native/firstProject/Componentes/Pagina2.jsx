import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

const Pagina2 = () => {
  const [origin, setOrigin] = useState({
    latitude: 10.44819,
    longitude: -73.28276,
  });

  const [dirDomi, setDirDomi] = useState({
    latitude: 10.45224355567004,
    longitude: -73.27455387454266,
    nombre: "",
    apellido: "",
  });

  const handleMarkerDragEnd = (event) => {
    const { coordinate } = event.nativeEvent;
    setDirDomi((prevData) => ({
      ...prevData,
      latitude: parseFloat(coordinate.latitude),
      longitude: coordinate.longitude,
    }));
    console.log("Nuevo marcador:", coordinate);
  };

  const catchDir = (id, text) => {
    setDirDomi((prevData) => ({
      ...prevData,
      [id]: text,
    }));
    console.log("Nuevo valor en el input:", id, text);
  };

  const handleEnviarPress = () => {
    console.log("Datos finales:", dirDomi);
  };

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
        <Marker
          draggable
          coordinate={{
            latitude: dirDomi.latitude,
            longitude: dirDomi.longitude,
          }}
          onDragEnd={handleMarkerDragEnd}
        ></Marker>
      </MapView>
      <View>
        <Text>{origin.latitude}</Text>
        <Text>{origin.longitude}</Text>
      </View>
      <View style={styles.containerInputs}>
        <TextInput
          style={styles.inputs}
          placeholder="Ingrese la latitud"
          onChangeText={(text) => catchDir("latitude", text)}
        ></TextInput>
        <TextInput
          style={styles.inputs}
          placeholder="Ingrese longitud"
          onChangeText={(text) => catchDir("longitude", text)}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={handleEnviarPress}>
          <Text style={styles.enviar}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 400,
  },
  inputs: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
  },
  containerInputs: {
    width: "90%",
    height: "20%",
    marginLeft: "5%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "rgb(0,164,228)",
    borderRadius: 15,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
  },
  enviar: {
    color: "white",
  },
});

export default Pagina2;
