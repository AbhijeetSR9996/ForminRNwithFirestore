import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, View, Text, Image} from 'react-native';
import Home from './Home';

const Splash = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      Hide_Splash_Screen();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const Hide_Splash_Screen = () => {
    setIsVisible(false);
  };

  let Splash_Screen = (
    <View style={styles.SplashScreen_RootView}>
      <View style={styles.SplashScreen_ChildView}>
        {/* <Text
          style={{
            fontSize: 30,
            marginBottom: '10%',
            fontWeight: 'bold',
            color: '#000',
          }}>
          LAKSHYA EDUCATIONAL CONSULTANCY
        </Text> */}
        <Image
          source={require('../assets/images/image.jpeg')}
          style={{
            alignSelf: 'center',
            height: undefined,
            width: '80%',
            aspectRatio: 1,
            display: 'flex',
            borderRadius: 15,
          }}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.MainContainer}>
      <Home />
      {isVisible === true ? Splash_Screen : null}
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
  SplashScreen_RootView: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  SplashScreen_ChildView: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#00bcd4',
    backgroundColor: '#fff',
    flex: 1,
    marginVertical: '-10%',
  },
});

export default Splash;
