// components/BackgroundWrapper.tsx
import { ImageBackground, StyleSheet } from 'react-native';

export const BackgroundWrapper = ({ children, source }) => {
  return (
    <ImageBackground source={source} style={styles.bg}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});
