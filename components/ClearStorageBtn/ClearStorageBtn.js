import React from "react"
import { View, Button } from "react-native"
import { clearAsyncStorage } from "../../utils/dataManager"

const ClearStorageButton = () => {
  const handleClearStorage = async () => {
    await clearAsyncStorage()
  }

  return (
    <View>
      <Button title="Clear AsyncStorage" onPress={handleClearStorage} />
    </View>
  )
}

export default ClearStorageButton
