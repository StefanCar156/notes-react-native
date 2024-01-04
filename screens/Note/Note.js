import React from "react"
import NoteForm from "../../components/NoteForm/NoteForm"

const Note = ({ navigation, route }) => {
  return <NoteForm route={route} navigation={navigation} />
}

export default Note
