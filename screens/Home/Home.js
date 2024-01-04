import React, { useState, useEffect, useCallback } from "react"
import { View, FlatList, TouchableOpacity, Text } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { loadNotes } from "../../utils/dataManager"
import { useNavigation } from "@react-navigation/native"
import NoteCard from "../../components/NoteCard/NoteCard"
import ClearStorageBtn from "../../components/ClearStorageBtn/ClearStorageBtn"

import styles from "./home.style"

const Home = () => {
  const [notes, setNotes] = useState([])
  const navigation = useNavigation()

  const fetchNotes = useCallback(async () => {
    const loadedNotes = await loadNotes()
    setNotes(loadedNotes)
  }, [])

  useEffect(() => {
    fetchNotes()

    const unsubscribe = navigation.addListener("focus", fetchNotes)

    return () => unsubscribe()
  }, [navigation, fetchNotes])

  const handleAddNote = () => {
    navigation.navigate("Add Note")
  }

  return (
    <View style={styles.container}>
      {notes.length === 0 && (
        <Text style={styles.noNotes}>You don't have any notes</Text>
      )}

      <FlatList
        data={notes}
        renderItem={({ item, index }) => <NoteCard note={item} key={index} />}
        keyExtractor={(note) => note.id}
        showsVerticalScrollIndicator={false}
      />

      <View>
        <TouchableOpacity style={styles.button} onPress={handleAddNote}>
          <Icon name="plus" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Helper */}
      {/* <View>
        <ClearStorageBtn />
      </View> */}
    </View>
  )
}

export default Home
