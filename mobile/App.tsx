import { StyleSheet, View } from 'react-native';
import { HomeScreen } from './screens/homeScreen/HomeScreen';

// Use require to avoid import error for image asset


export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
