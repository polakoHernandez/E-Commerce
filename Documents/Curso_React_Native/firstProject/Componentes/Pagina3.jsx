import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button, Card, Surface } from "react-native-paper";

const Pagina3 = () => {
  const miLista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <ScrollView>
      <View>
        <Text>Pagina3</Text>
        <Button
          mode="contained"
          color="rgb(0,164,228)"
          onPress={() => alert("¡Sí funcionó!")}
        >
          Mi primer Boton
        </Button>
        {miLista.map((elemento, index) => (
          <View key={index} style={styles.containerButton}>
            <Button style={styles.button} color="white">
              {elemento}
            </Button>
          </View>
        ))}
        <Card>
          <Card.Content>
            <Text>Hola mi amor</Text>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Text>Hola mi amor</Text>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Text>Hola mi amor</Text>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Text>Hola mi amor</Text>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Text>Hola mi amor</Text>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    height: 50,
    marginTop: 10,
    marginLeft: 10,
  },
  button: {
    backgroundColor: "rgb(0,164,228)",
  },
});

export default Pagina3;
