import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { useState, useEffect } from 'react';

export const useAppAssets = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    async function loadAssets() {
      try {
        const bgImage = require('../assets/images/background.jpg');
        const logoImage = require('../assets/images/palmistry_logo-removebg-preview.png');

        await Promise.all([
          // Fonts
          Font.loadAsync({
            'CinzelDecorative': require('../assets/fonts/CinzelDecorative-Regular.ttf'),
            'Lora': require('../assets/fonts/Lora-Regular.ttf'),
          }),

          // Images
          Asset.loadAsync([bgImage, logoImage]),
        ]);

        setAssetsLoaded(true);
      } catch (e) {
        console.warn('Asset loading error:', e);
      }
    }

    loadAssets();
  }, []);

  return assetsLoaded;
};
