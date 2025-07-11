import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import Header from '../../components/Header';

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome Back</Text>

        <TextInput
          placeholder="Email or Username"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <Pressable style={styles.button} onPress={() => router.push('/screens/image-picker')}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>

        <Pressable onPress={() => router.push('/screens/sign-up')}>
          <Text style={styles.link}>Don't have an account? Sign up</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontFamily: 'CinzelDecorative',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#32a88b',
  },
  button: {
    backgroundColor: '#32a88b',
    padding: 14,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#32a88b',
    shadowOpacity: 0.7,
    shadowRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: 'CinzelDecorative',
    color: '#fff',
    fontSize: 18,
  },
  link: {
    textAlign: 'center',
    color: '#32a88b',
    fontSize: 14,
    marginTop: 10,
  },
});
