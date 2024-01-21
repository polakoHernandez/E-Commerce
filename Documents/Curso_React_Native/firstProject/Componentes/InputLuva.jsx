import { View, Text } from "react-native";
import React, { useState } from "react";
import { DataTable } from "react-native-paper";

const InputLuva = () => {
  const titulos = ["Uno", "Dos", "Tres", "Cuatro"];
  const [items, setItems] = useState([
    {
      key: 1,
      name: "Cupcake",
      calories: 356,
      fat: 16,
    },
    {
      key: 2,
      name: "Eclair",
      calories: 262,
      fat: 16,
    },
    {
      key: 3,
      name: "Frozen yogurt",
      calories: 159,
      fat: 6,
    },
    {
      key: 4,
      name: "Gingerbread",
      calories: 305,
      fat: 3.7,
    },
    {
      key: 4,
      name: "Gingerbread",
      calories: 305,
      fat: 3.7,
    },
    {
      key: 4,
      name: "Gingerbread",
      calories: 305,
      fat: 3.7,
    },
    {
      key: 4,
      name: "Gingerbread",
      calories: 305,
      fat: 3.7,
    },
    {
      key: 4,
      name: "Gingerbread",
      calories: 305,
      fat: 3.7,
    },
  ]);
  return (
    <View
      style={{
        marginTop: 60,
      }}
    >
      <DataTable>
        <DataTable.Header>
          {titulos.map((elemento, index) => (
            <DataTable.Title key={index}>{elemento}</DataTable.Title>
          ))}
        </DataTable.Header>
        {items.map((elemento, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{elemento.name}</DataTable.Cell>
            <DataTable.Cell>{elemento.calories}</DataTable.Cell>
            <DataTable.Cell>{elemento.fat}</DataTable.Cell>
            <DataTable.Cell>{elemento.fat}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
};

export default InputLuva;
