import { Text, View, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

import styles from "./noteCard.style"

const NoteCard = ({ note }) => {
  const navigation = useNavigation()

  const handleCardPress = () => {
    navigation.navigate("Note", { note })
  }

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.content}>{note.content}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NoteCard
