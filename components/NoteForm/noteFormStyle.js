import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    height: 60,
  },
  content: {
    flex: 1,
    textAlignVertical: "top",
    paddingTop: 10,
  },
  saveButton: {
    backgroundColor: "#4CAF50", // Green color
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#D32F2F", // Red color
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
})

export default styles
