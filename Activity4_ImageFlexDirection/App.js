import React from 'react';
import {View, Image, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const TextInputExample = () => {
  const [name, onChangeName] = React.useState('Name: ');
  const [age, onChangeAge] = React.useState('Age: ');
  const [address, onChangeAddress] = React.useState('Address: ');
  const [school, onChangeSchool] = React.useState('School: ');
  const [course, onChangeCourse] = React.useState('Course: ');
  const [email, onChangeEmail] = React.useState('Email: ');
  const [number, onChangeContact] = React.useState('Contact No: : ');
  const [value, onChangeAboutMe] = React.useState('About Me: ');


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.icon} source={{uri: 'https://icons.veryicon.com/png/o/weather/yochie-icons/me-8.png'}} />
          <TextInput style={styles.input} 
          onChangeText={onChangeName} 
          value={name} />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.icon} source={{uri: 'https://cdn-icons-png.flaticon.com/512/5541/5541575.png'}} />
          <TextInput style={styles.input} 
          onChangeText={onChangeAge} 
          value={age} />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.icon} source={{uri: 'https://icon-library.com/images/home-address-icon/home-address-icon-1.jpg'}} />
          <TextInput style={styles.input} 
          onChangeText={onChangeAddress} 
          value={address} />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.icon} source={{uri: 'https://static.vecteezy.com/system/resources/previews/002/206/174/original/school-building-icon-free-vector.jpg'}} />
          <TextInput style={styles.input} 
          onChangeText={onChangeSchool} 
          value={school} />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.icon} source={{uri: 'https://icon-library.com/images/course-icon/course-icon-6.jpg'}} />
          <TextInput style={styles.input} 
          onChangeText={onChangeCourse} 
          value={course} />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.icon} source={{uri: 'https://th.bing.com/th/id/OIP.MvrHgBzLaVfvb9k54h2iqwHaHa?rs=1&pid=ImgDetMain'}} />
          <TextInput style={styles.input} 
          onChangeText={onChangeEmail} 
          value={email} />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.icon} source={{uri: 'https://icon-library.com/images/phone-number-icon-png/phone-number-icon-png-6.jpg'}} />
          <TextInput style={styles.input} 
          onChangeText={onChangeContact} 
          value={number} />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.icon} source={{uri: 'https://cdn.dribbble.com/users/1125518/screenshots/3597491/about-me-icon.png'}} />
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={onChangeAboutMe}
            value={value}
            style={styles.textInput}
          />
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
  },
  input: {
    height: 40,
    flex: 1,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  textInput: {
    padding: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
});

export default TextInputExample;