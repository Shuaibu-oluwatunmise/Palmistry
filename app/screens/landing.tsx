import { View, Image, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
//import { ScreenWrapper } from '../../components/ScreenWrapper';

export default function LandingScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
    <Image
        source={require('../../assets/images/palmistry_logo-removebg-preview.png')}
        style={styles.logo}
        resizeMode="contain"
    />
    <Text style={styles.title}>Palmistry</Text>
    <Pressable style={styles.button} onPress={() => router.push('/screens/sign-up')}>
        <Text style={styles.buttonText}>Begin Reading</Text>
    </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    color: '#fff',
    fontFamily: 'CinzelDecorative',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#32a88b',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#32a88b',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'CinzelDecorative',
  },
});
