import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';

export default function ReadingScreen() {
  // Dummy data for now
  const username = 'User'; // In future: pull from route params or context
  const email = 'example@example.com'; // fallback
  const palmImage = require('../../assets/images/sample-palm.jpg'); // replace with real image later

  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.greeting}>Hey {username}</Text>
        <Text style={styles.email}>{email}</Text>

        <Image source={palmImage} style={styles.palmImage} />

        <View style={styles.readingBlock}>
          <Text style={styles.readingText}>
            🔮 Your palm reveals a curious and intuitive mind. The heart line shows deep emotional intelligence and a compassionate nature.
            {"\n\n"}💼 Your head line suggests strong reasoning and leadership potential. A long life line hints at vibrant energy and resilience.
            {"\n\n"}🌿 Your fate line indicates you're driven by purpose, possibly in a creative or healing field.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  greeting: {
    fontSize: 26,
    fontFamily: 'CinzelDecorative',
    color: '#fff',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#ccc',
    fontFamily: 'Lora',
    marginBottom: 20,
  },
  palmImage: {
    width: 220,
    height: 320,
    resizeMode: 'cover',
    borderRadius: 16,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#32a88b',
  },
  readingBlock: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 16,
    borderRadius: 12,
    borderColor: '#32a88b',
    borderWidth: 1,
  },
  readingText: {
    color: '#fff',
    fontFamily: 'Lora',
    fontSize: 16,
    lineHeight: 24,
  },
});
