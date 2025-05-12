import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import NatureBackground from '../components/NatureBackground';

export default function ScanScreen() {
  return (
    <NatureBackground>
      <View style={styles.container}>
        <MaterialCommunityIcons name="camera" size={80} color="#4CAF50" style={styles.icon} />
        <Text style={styles.text}>Ready to scan? Tap the button below to start identifying!</Text>
      </View>
    </NatureBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  icon: {
    marginBottom: 24,
  },
  text: {
    fontSize: 18,
    color: '#222',
    textAlign: 'center',
  },
}); 