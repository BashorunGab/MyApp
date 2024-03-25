import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Mylogin } from './Screens/Mylogin';
import { Login } from './Screens/Login';
import { Event } from './Screens/Event';
import { Position } from './Screens/Position';
import { MyScreen } from './Screens/MyScreen';


export default function App() {
  return (
    <View style={{flex:1}}>
      <MyScreen/>
    </View>
  );
}