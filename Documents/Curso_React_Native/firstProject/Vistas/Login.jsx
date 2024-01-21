import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect } from "react";
import imgLogin from "../assets/img-principal.jpg";
import { styles } from "../Estilos/Login";
import { Button, TextInput } from "react-native-paper";
import Delivery from "../assets/DeliveryFondo.png";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

const Login = () => {
  const obtenerAdminDocumento = async (documento) => {
    try {
      const respuesta = await fetch(
        `https://api-app-domiciios.vercel.app/apiDomicilios/obtenerAdmin/${documento}`
      );

      switch (respuesta.status) {
        case 200:
          const respone = await respuesta.json();

          console.log(respone);

          break;

        case 404:
          alert(JSON.stringify(respuesta));
          break;
        case 401:
          alert(JSON.stringify(respuesta));
          break;
      }
    } catch (error) {
      alert(error);
    }
  };
  const theme = useTheme();

  useEffect(() => {
    obtenerAdminDocumento(1065828184);
  }, []);

  return (
    <View style={{ ...styles.containerGeneral }}>
      <View style={{ ...styles.containerGeneralFormulario }}>
        <Text style={{ ...styles.titulo }}>Delivery Express</Text>

        <Image source={Delivery} style={{ ...styles.logo }}></Image>

        <Text style={{ ...styles.labels }}> Usuario</Text>
        <TextInput
          outlineColor="black"
          activeOutlineColor="rgb(0,164,228)"
          mode="outlined"
          style={{
            ...styles.inputs,
          }}
          left={<TextInput.Icon icon="account" />}
        ></TextInput>
        <Text style={{ ...styles.labels }}>Contraseña</Text>
        <TextInput
          outlineColor="black"
          activeOutlineColor="rgb(0,164,228)"
          mode="outlined"
          style={{ ...styles.inputs }}
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        ></TextInput>
        <View style={{ ...styles.containerButtons }}>
          <Button style={{ ...styles.button }} textColor="white">
            <Text>Iniciar Sesión</Text>
          </Button>
          <Button
            style={{ ...styles.button, backgroundColor: "purple" }}
            textColor="white"
          >
            <Text>Olvide mi Contraseña</Text>
          </Button>
        </View>
        <Text style={{ ...styles.conoce }}>Conoce más acerca de nosotros</Text>
        <View style={{ ...styles.containerLogos }}>
          <Ionicons name="logo-instagram" size={32} color="black" />
          <Ionicons name="logo-facebook" size={32} color="black" />
          <Ionicons name="logo-whatsapp" size={32} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Login;
