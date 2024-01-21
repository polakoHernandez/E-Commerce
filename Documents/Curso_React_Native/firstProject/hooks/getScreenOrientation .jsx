import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

// Función utilitaria para obtener la orientación de la pantalla
const getScreenOrientation = async () => {
  const orientationInfo = await ScreenOrientation.getOrientationAsync();
  return orientationInfo.orientation;
};

const Responsive = () => {
  const [screenOrientation, setScreenOrientation] = useState(
    ScreenOrientation.Orientation.PORTRAIT_UP
  );

  useEffect(() => {
    const onOrientationChange = async () => {
      const newOrientation = await getScreenOrientation();
      setScreenOrientation(newOrientation);
    };

    // Suscribe al cambio de orientación
    const subscription =
      ScreenOrientation.addOrientationChangeListener(onOrientationChange);

    // Inicializa la orientación al cargar el componente
    getScreenOrientation().then((initialValue) =>
      setScreenOrientation(initialValue)
    );

    // Limpia el listener al desmontar el componente
    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);

  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    ></View>
  );
};

export { getScreenOrientation }; // Exporta la función utilitaria
export default Responsive;
