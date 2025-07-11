import { ImageBackground, StyleSheet, View } from 'react-native';

export const ScreenWrapper = ({ children }) => {
  return (
    <ImageBackground
      source={require('../assets/images/forest-simon-l-kLSg1mIMA-unsplash.jpg')}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.overlay}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
});
