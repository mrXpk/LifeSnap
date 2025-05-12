import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function IdentifyScreen() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Identify Organism</Text>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={takePhoto}
          style={styles.button}
          icon="camera"
        >
          Take Photo
        </Button>
        <Button
          mode="contained"
          onPress={pickImage}
          style={styles.button}
          icon="image"
        >
          Pick from Gallery
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    gap: 10,
  },
  button: {
    marginVertical: 5,
  },
}); 