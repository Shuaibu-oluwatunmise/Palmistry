import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, Text } from 'react-native';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Defer navigation until after first mount
    const timeout = setTimeout(() => {
      router.replace('/screens/landing');
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Loading...</Text>
    </View>
  );
}
