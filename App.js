import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Write Something</Text>
      <Text>Write Something</Text>
          <Text>PUSH/PULL Testing</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#9933ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
