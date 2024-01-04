import { useState, useEffect } from "react"
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { addNote, deleteNote, updateNote } from "../../utils/dataManager"

import styles from "./noteFormStyle"

const NoteForm = ({ route, navigation }) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [note, setNote] = useState({})

  const router = useNavigation()

  useEffect(() => {
    if (route) {
      setNote(route.params.note)
    }

    if (note) {
      setTitle(note.title)
      setContent(note.content)
    }
  }, [route, note])

  const handleSaveNote = async () => {
    if (note.id) {
      // If note has an 'id', it's an existing note, update it
      await updateNote(note.id, {
        title,
        content,
      })
    } else {
      // If note doesn't have an 'id', it's a new note, add it
      await addNote({
        title,
        content,
      })
    }

    router.goBack()
  }

  const handleDeleteNote = async () => {
    if (note.id) {
      await deleteNote(note.id)
      router.goBack()
    } else {
      Alert.alert("Unable to delete", "This note has not been saved yet.")
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.title}
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.content}
        placeholder="Content"
        value={content}
        onChangeText={(text) => setContent(text)}
        multiline
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveNote}>
        <Text style={styles.buttonText}>Save Note</Text>
      </TouchableOpacity>

      {note.id && (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDeleteNote}
        >
          <Text style={styles.buttonText}>Delete Note</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default NoteForm
