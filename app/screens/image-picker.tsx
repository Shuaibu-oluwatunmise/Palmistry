import { View, Image, StyleSheet, Pressable, Text, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import Header from '../../components/Header';

export default function ImagePickerScreen() {
  const [image, setImage] = useState<string | null>(null);
  const router = useRouter();

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Gallery access is needed.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Camera access is needed.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Let's look at Your Palm</Text>

        <Pressable style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Select from Gallery</Text>
        </Pressable>

        <Pressable style={[styles.button, { marginTop: 15 }]} onPress={takePhoto}>
          <Text style={styles.buttonText}>Take a Picture</Text>
        </Pressable>

        {image && <Image source={{ uri: image }} style={styles.preview} />}

        {image && (
          <Pressable
            style={[styles.button, { marginTop: 20 }]}
            onPress={() => router.push('/screens/reading')}
          >
            <Text style={styles.buttonText}>Read My Palm</Text>
          </Pressable>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'CinzelDecorative',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#32a88b',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#32a88b',
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'CinzelDecorative',
    fontSize: 16,
  },
  preview: {
    width: 250,
    height: 350,
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: 30,
    borderWidth: 2,
    borderColor: '#32a88b',
  },
});
