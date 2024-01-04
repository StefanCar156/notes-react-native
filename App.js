import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Home from "./screens/Home/Home"
import AddNote from "./screens/AddNote/AddNote"
import Note from "./screens/Note/Note"

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Notes" component={Home} />
        <Stack.Screen name="Note" component={Note} />
        <Stack.Screen name="Add Note" component={AddNote} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
