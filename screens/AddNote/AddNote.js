import { Text } from "react-native"
import NoteForm from "../../components/NoteForm/NoteForm"
import { useEffect } from "react"

const AddNote = ({ navigation }) => {
  return <NoteForm navigation={navigation} />
}

export default AddNote
