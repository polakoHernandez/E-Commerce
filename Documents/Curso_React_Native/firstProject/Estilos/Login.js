import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerGeneral: {
    backgroundColor: "white",
    width: "100%",
    height: 850,
  },

  containerGeneralFormulario: {
    backgroundColor: "white",

    width: "90%",
    height: "80%",
    marginTop: "20%",
    marginLeft: "5%",
    paddingTop: 50,
    borderWidth: 1,
    borderColor: "rgb( 207, 207, 207  )",
    borderRadius: 5,
    alignItems: "center",
  },

  logo: {
    // backgroundColor: "red",
    width: 200,
    height: 200,
    borderWidth: 1,
  },

  titulo: {
    fontSize: 40,
    fontWeight: "bold",
  },
  inputs: {
    width: "90%",
    borderColor: "blue",
  },
  button: {
    backgroundColor: "rgb(0,164,228)",
    color: "white",
    width: "100%",
    borderRadius: 3,
  },
  containerButtons: {
    // backgroundColor: "red",
    marginTop: 10,
    height: 80,
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
  },

  textIniciar: {
    color: "white",
  },
  containerLogos: {
    // backgroundColor: "red",
    width: "40%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  conoce: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },

  labels: {
    width: "90%",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
