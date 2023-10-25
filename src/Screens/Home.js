import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/image.jpeg')}
        imageStyle={styles.watermark}
        resizeMode="contain">
        <View style={styles.headingview}>
          <Text style={styles.headingtext}>ABOUT US </Text>
        </View>
        <View style={styles.descriptionview}>
          <Text style={styles.firstdescriptiontext}>
            Lakshya Consultancy is a reputable organization dedicated to guiding
            and assisting students in their pursuit of higher education. They
            specialize in aiding individuals seeking admission to diverse
            courses at various universities. Through personalized consultations
            and comprehensive support, Lakshya Consultancy equips students with
            valuable insights, helping them make informed decisions about their
            academic future. Their expertise lies in providing assistance with
            university selection, application processes, documentation, and
            ensuring students are well-prepared for their academic journey. With
            a commitment to excellence and a focus on the best interests of
            students, Lakshya Consultancy strives to facilitate successful
            admissions and help students achieve their educational goals.
          </Text>
          <Text style={styles.secondescriptiontext}>
            So, what are you waiting for? Take first step toward your 🎯 and
            enquire now..!!
          </Text>
          <View style={styles.buttonview}>
            <TouchableOpacity
              style={styles.buttoncontainer}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Enquiry')}>
              <Text style={styles.buttontext}>OK.TAKE ME THERE </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  watermark: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    opacity: 0.3,
  },
  headingview: {
    flex: 0.1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'blue',
  },
  descriptionview: {
    flex: 0.9,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginHorizontal: 40,
    //backgroundColor: 'red',
  },
  buttonview: {
    marginTop: 20,
  },
  buttoncontainer: {
    backgroundColor: '#000',
    borderRadius: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  headingtext: {
    color: '#000',
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    bottom: 10,
  },
  firstdescriptiontext: {
    color: '#000',
    textAlign: 'justify',
    fontSize: 15,
  },
  secondescriptiontext: {
    color: '#000',
    textAlign: 'justify',
    fontSize: 18,
    marginTop: 10,
  },
  buttontext: {
    color: '#fff',
  },
});

export default Home;
