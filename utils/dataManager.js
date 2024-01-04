import AsyncStorage from "@react-native-async-storage/async-storage"

const KEY = "notes"

export const addNote = async (note) => {
  try {
    const oldNotes = await loadNotes()
    const newNote = { ...note, id: Date.now().toString() } // Add a unique ID to the new note
    const jsonNotes = JSON.stringify([...oldNotes, newNote])
    await AsyncStorage.setItem(KEY, jsonNotes)
  } catch (error) {
    console.error("Error saving notes:", error)
  }
}

export const updateNote = async (noteId, updatedNote) => {
  try {
    const oldNotes = await loadNotes()
    const updatedNotes = oldNotes.map((note) =>
      note.id === noteId ? { ...note, ...updatedNote } : note
    )
    const jsonNotes = JSON.stringify(updatedNotes)
    await AsyncStorage.setItem(KEY, jsonNotes)
  } catch (error) {
    console.error("Error updating note:", error)
  }
}

export const deleteNote = async (noteId) => {
  try {
    const oldNotes = await loadNotes()
    const updatedNotes = oldNotes.filter((note) => note.id !== noteId)
    const jsonNotes = JSON.stringify(updatedNotes)
    await AsyncStorage.setItem(KEY, jsonNotes)
  } catch (error) {
    console.error("Error deleting note:", error)
  }
}

export const loadNotes = async () => {
  try {
    const jsonNotes = await AsyncStorage.getItem(KEY)
    return jsonNotes != null ? JSON.parse(jsonNotes) : []
  } catch (error) {
    console.error("Error loading notes:", error)
    return []
  }
}

export const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear()
    console.log("AsyncStorage cleared successfully")
  } catch (error) {
    console.error("Error clearing AsyncStorage:", error)
  }
}
