import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { getScreenOrientation } from "../hooks/getScreenOrientation "; // Ajusta la ruta correcta

const Responsive = () => {
  useEffect(() => {
    const fetchData = async () => {
      const orientation = await getScreenOrientation();
      console.log("Screen orientation:", orientation);
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Some other component content</Text>
    </View>
  );
};

export default Responsive;
