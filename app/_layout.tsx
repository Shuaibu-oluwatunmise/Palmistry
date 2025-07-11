// app/_layout.tsx
import { Stack, useSegments, useNavigationContainerRef, useGlobalSearchParams, Slot } from 'expo-router';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { useAppAssets } from '../hooks/useAppAssets';
import { ImageBackground, StyleSheet, View } from 'react-native';

export default function RootLayout() {
  const assetsLoaded = useAppAssets();

  useEffect(() => {
    if (assetsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [assetsLoaded]);

  if (!assetsLoaded) return null;

  // Global default background image
  const background = require('../assets/images/forest-simon-l-kLSg1mIMA-unsplash.jpg');

  return (
    <ImageBackground
      source={background}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Slot />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
});
