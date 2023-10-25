import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const WatermarkedContent = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/image.jpeg')}
        style={styles.watermark}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  watermark: {
    position: 'absolute',
    // bottom: 10,
    // right: 10,
    opacity: 0.5,
  },
});

export default WatermarkedContent;
