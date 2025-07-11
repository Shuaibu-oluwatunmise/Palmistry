import { View, Image, Pressable, StyleSheet, Text } from 'react-native';
import { useRouter, useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useNavigationState } from '@react-navigation/native';

export default function Header() {
  const router = useRouter();
  const navigation = useNavigation();

  const canGoBack = useNavigationState(state => state?.routes?.length > 1);

  return (
    <View style={styles.container}>
      {canGoBack && (
        <Pressable onPress={router.back} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </Pressable>
      )}

      <View style={styles.logoWrapper}>
        <Image
          source={require('../assets/images/palmistry_logo-removebg-preview.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.logoText}>Palmistry</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  logoText: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'CinzelDecorative',
  },
});
