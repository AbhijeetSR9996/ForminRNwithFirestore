import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';

const {width, height} = Dimensions.get('window');

const Enquiry = props => {
  const navigation = useNavigation();

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedItems, setSelectedItems] = useState('');
  const [Desired, setDesired] = useState('');
  const [selectedItemss, setSelectedItemss] = useState('');

  const [Preferred, setPreferred] = useState('');
  const [Additional, setAdditional] = useState('');

  //for others option in Courses Interested In Dropdown
  const [textInputVisible, setTextInputVisible] = useState(false);
  const [others, setOthers] = useState('');

  // const toggleTextInput = () => {
  //   setTextInputVisible(!textInputVisible);
  // if (selectedItemss === 'Others') {
  //   setTextInputEnabled(true);
  // } else {
  //   setTextInputEnabled(false);
  // }
  // };

  // const handleValueChange = itemValue => {
  //   setSelectedValue(itemValue);
  //   // Check if the selected option is the specific option that enables the TextInput.
  // if (selectedItemss === 'Others') {
  //   setTextInputEnabled(true);
  // } else {
  //   setTextInputEnabled(false);
  // }
  // };

  const abdata = [{value: 'Science '}, {value: 'Commerce '}, {value: 'Arts '}];
  const celdata = [
    {value: 'High School(10th) '},
    {value: 'Matriculation(12th) '},
    {value: 'Diploma '},
  ];
  const ciidata = [
    {value: 'MBA '},
    {value: 'MSW '},
    {value: 'BSW '},
    {value: 'PGDM '},
    {value: 'MSC '},
    {value: 'BSc.Nursing '},
    {value: 'Post BSc. '},
    {value: 'GNM '},
    {value: 'BPT '},
    {value: 'BPharma '},
    {value: 'DPharma '},
    {value: 'BMLT '},
    {value: 'DMLT '},
    {value: 'Others '},
  ];

  //validations
  const strongRegex = new RegExp(
    '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
  );

  const submit = () => {
    if (Name == '') {
      Toast.show({
        type: 'error',
        text1: 'Please fill Name.',
      });
      return;
    }
    if (Email == '') {
      Toast.show({
        type: 'error',
        text1: 'Please fill Email.',
      });
      return;
    }
    if (!strongRegex.test(Email)) {
      Toast.show({
        type: 'error',
        text1: 'Please fill valid Email.',
      });
      return;
    }
    if (Phone == '') {
      Toast.show({
        type: 'error',
        text1: 'Please fill Phone number.',
      });
      return;
    }
    if (Phone.length < 10) {
      Toast.show({
        type: 'error',
        text1: 'Please fill valid Phone number.',
      });
      return;
    }
    if (selectedItem == '') {
      Toast.show({
        type: 'error',
        text1: 'Please choose academic background.',
      });
      return;
    }
    if (selectedItems == '') {
      Toast.show({
        type: 'error',
        text1: 'Please choose education level.',
      });
      return;
    }
    if (selectedItemss == '') {
      Toast.show({
        type: 'error',
        text1: 'Please choose interested course.',
      });
      return;
    } else {
      handleRegistration();
    }
  };

  const handleRegistration = () => {
    if (
      (Name &&
        Email &&
        Phone &&
        selectedItem &&
        selectedItems &&
        selectedItemss) ||
      Desired ||
      Preferred ||
      Additional ||
      others
    ) {
      firestore()
        .collection('Users')
        .add({
          name: Name,
          email: Email,
          phone: Phone,
          background: selectedItem,
          educationlevel: selectedItems,
          desiredcourse: Desired,
          interestedcourse: selectedItemss,
          othercourse: others,
          preferreduniv: Preferred,
          addetails: Additional,
        })
        .then(() => {
          // Alert.alert(
          //   'Success',
          //   `Thanks ${Name}. Contact you soon..!!`,
          //   [
          //     {
          //       text: 'OK',
          //       onPress: () => props.navigation.navigate('Home'),
          //     },
          //   ],
          //   {cancelable: false},
          // );
          Toast.show({
            type: 'success',
            text1: `Thanks ${Name}. Contact you soon..!!`,
          });
          navigation.navigate('Home');
        })
        .catch(error => {
          // Alert.alert(
          //   'Exception',
          //   error,
          //   [
          //     {
          //       text: 'OK',
          //       onPress: () => props.navigation.navigate('Home'),
          //     },
          //   ],
          //   {cancelable: false},
          // );
          Toast.show({
            type: 'error',
            //text1: '',
            error,
          });
          navigation.navigate('Home');
        });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Please fill all the details.',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/image.jpeg')}
        imageStyle={styles.watermark}
        resizeMode="contain">
        <View style={styles.headingview}>
          <Text style={styles.headingtext}>ENQUIRY FORM </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollview}>
          <View style={styles.descriptionview}>
            <TextInput
              placeholder=" Full Name:"
              placeholderTextColor={'#000'}
              style={styles.txtInput}
              value={Name}
              onChangeText={setName}
            />
            <TextInput
              placeholder=" Email Address:"
              placeholderTextColor={'#000'}
              keyboardType="email-address"
              style={styles.txtInput}
              value={Email}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder=" Phone Number:"
              placeholderTextColor={'#000'}
              keyboardType="number-pad"
              maxLength={10}
              style={styles.txtInput}
              value={Phone}
              onChangeText={setPhone}
            />

            {/* <SelectDropdown
              data={data}
              buttonStyle={styles.input}
              placeholder={'Academic Background:'}
              onSelect={(selectedItem, index) => {
                setSelectedItem(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
            /> */}

            <SelectDropdown
              data={abdata}
              onSelect={value => {
                setSelectedItem(value);
              }}
              buttonStyle={styles.dropdown3BtnStyle}
              renderCustomizedButtonChild={(selectedItem, index) => {
                return (
                  <View style={styles.dropdown3BtnChildStyle}>
                    <Text style={styles.dropdown3BtnTxt}>
                      {selectedItem
                        ? selectedItem.value
                        : 'Academic Background:'}
                    </Text>
                  </View>
                );
              }}
              renderDropdownIcon={isOpened => {
                return isOpened ? null : (
                  <Image
                    source={require('../assets/images/dropdownicon.png')}
                    style={styles.dropdownIcon}
                  />
                );
              }}
              dropdownIconPosition={'right'}
              rowStyle={styles.dropdown3RowStyle}
              renderCustomizedRowChild={(item, index) => {
                return (
                  <View style={styles.dropdown3RowChildStyle}>
                    <Image style={styles.dropdownRowImage} />
                    <Text style={[styles.dropdown3RowTxt]}>{item.value}</Text>
                  </View>
                );
              }}
            />

            <SelectDropdown
              data={celdata}
              onSelect={value => {
                setSelectedItems(value);
              }}
              buttonStyle={styles.dropdown3BtnStyle}
              renderCustomizedButtonChild={(selectedItems, index) => {
                return (
                  <View style={styles.dropdown3BtnChildStyle}>
                    <Text style={styles.dropdown3BtnTxt}>
                      {selectedItems
                        ? selectedItems.value
                        : ' Current Educational Level: '}
                    </Text>
                  </View>
                );
              }}
              renderDropdownIcon={isOpened => {
                return isOpened ? null : (
                  <Image
                    source={require('../assets/images/dropdownicon.png')}
                    style={styles.dropdownIcon}
                  />
                );
              }}
              dropdownIconPosition={'right'}
              rowStyle={styles.dropdown3RowStyle}
              renderCustomizedRowChild={(item, index) => {
                return (
                  <View style={styles.dropdown3RowChildStyle}>
                    <Image style={styles.dropdownRowImage} />
                    <Text style={[styles.dropdown3RowTxt]}>{item.value}</Text>
                  </View>
                );
              }}
            />

            <TextInput
              placeholder=" Desired Courses and Universities(if any):"
              placeholderTextColor={'#000'}
              multiline={true}
              numberOfLines={3}
              style={styles.txtInput}
              value={Desired}
              onChangeText={setDesired}
            />

            <SelectDropdown
              data={ciidata}
              onSelect={value => {
                setSelectedItemss(value);
              }}
              buttonStyle={styles.dropdown3BtnStyle}
              renderCustomizedButtonChild={(selectedItemss, index) => {
                return (
                  <View style={styles.dropdown3BtnChildStyle}>
                    <Text style={styles.dropdown3BtnTxt}>
                      {selectedItemss
                        ? selectedItemss.value
                        : ' Courses Interested In:  '}
                    </Text>
                  </View>
                );
              }}
              renderDropdownIcon={isOpened => {
                return isOpened ? null : (
                  <Image
                    source={require('../assets/images/dropdownicon.png')}
                    style={styles.dropdownIcon}
                  />
                );
              }}
              dropdownIconPosition={'right'}
              rowStyle={styles.dropdown3RowStyle}
              renderCustomizedRowChild={(item, index) => {
                return (
                  <View style={styles.dropdown3RowChildStyle}>
                    <Image style={styles.dropdownRowImage} />
                    <Text style={[styles.dropdown3RowTxt]}>{item.value}</Text>
                  </View>
                );
              }}
            />
            {/* Others courses textInput */}

            {/* {textInputVisible && (
              <TextInput
                placeholder=" Please specify(if select Others):"
                placeholderTextColor={'#000'}
                style={styles.txtInput}
                value={others}
                onChangeText={setOthers}
              />
            )} */}

            <TextInput
              placeholder=" Please specify(if select Others):"
              placeholderTextColor={'#000'}
              style={styles.txtInput}
              value={others}
              onChangeText={setOthers}
            />

            <TextInput
              placeholder=" Preferred Universities/Locations(if any):"
              placeholderTextColor={'#000'}
              multiline={true}
              numberOfLines={3}
              style={styles.txtInput}
              value={Preferred}
              onChangeText={setPreferred}
            />
            <TextInput
              placeholder=" Additional Details/Feedback/Comments:"
              placeholderTextColor={'#000'}
              multiline={true}
              numberOfLines={5}
              style={styles.txtInput}
              value={Additional}
              onChangeText={setAdditional}
            />
          </View>
          <View style={styles.buttonview}>
            <TouchableOpacity
              style={styles.buttoncontainer}
              activeOpacity={0.7}
              onPress={submit}>
              <Text style={styles.buttontext}>SUBMIT NOW </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Enquiry;

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
    opacity: 0.4,
    left: 0,
  },
  headingview: {
    flex: 0.1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollview: {
    //backgroundColor: '#808080',
    flex: 1,
    marginTop: 20,
    marginBottom: 30,
  },
  descriptionview: {
    flex: 0.9,
    //justifyContent: 'space-evenly',
    //alignItems: 'stretch',
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  buttonview: {
    //marginTop: 20,
    marginVertical: 20,
  },
  txtInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    color: '#000',
    marginHorizontal: 0,
    marginBottom: 10,
  },
  buttoncontainer: {
    backgroundColor: '#000',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 40,
    alignItems: 'center',
  },
  headingtext: {
    color: '#000',
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  buttontext: {
    color: '#fff',
  },
  dropdown3BtnStyle: {
    width: '100%',
    //width: 200,
    //padding: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
    //marginHorizontal: 10,
    borderRadius: 10,
    //paddingHorizontal: 20,
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    //marginHorizontal: 2,
    //paddingHorizontal: 7,
  },
  dropdown3BtnTxt: {
    color: '#000',
    textAlign: 'center',
  },
  dropdown3RowStyle: {
    borderBottomColor: '#fff',
    height: 50,
    borderRadius: 10,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 7,
    borderRadius: 10,
    backgroundColor: 'rgba(178, 37, 204, 0.02)',
  },
  dropdown3RowTxt: {
    color: '#000',
    textAlign: 'center',
    //fontWeight: '600',
  },
  dropdownIcon: {
    height: 10,
    width: 10,
  },
});
