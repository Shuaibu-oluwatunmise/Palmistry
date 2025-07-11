// hooks/useCustomFonts.ts
import * as Font from 'expo-font';

export const useCustomFonts = () => {
  return Font.useFonts({
    'CinzelDecorative': require('../assets/fonts/CinzelDecorative-Regular.ttf'),
    'Lora': require('../assets/fonts/Lora-Regular.ttf'),
  });
};
