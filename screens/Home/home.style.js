import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  button: {
    borderRadius: 50,
    width: 60,
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5b132",
    position: "absolute",
    bottom: 20,
    right: 20,
    elevation: 5,
  },
  noNotes: {
    textAlign: "center",
    fontSize: 18,
    color: "#8c8c8c",
  },
})

export default styles
