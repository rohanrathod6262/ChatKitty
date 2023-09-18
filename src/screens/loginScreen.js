import React, { useContext, useState } from 'react';
import { Dimensions, StyleSheet, View ,ImageBackground, Image} from 'react-native';
import { Title } from 'react-native-paper';

import FormButton from '../components/formButton.js';
import FormInput from '../components/formInput.js';
import Loading from '../components/loading.js';
import { AuthContext } from '../context/authProvider.js';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const { login, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }


  return (
    <ImageBackground source={require('../../assets/Login.jpg')} resizeMode="cover" style={styles.backgroundImage}>
<Image 
    style={{ width: 130, height: 130 }}
    source={require('../../assets/fourtybear.jpg')}
    />
      

    <View style={styles.container}>
      
      <Title style={styles.titleText}>Welcome Back😀!</Title>
      
      <FormInput
      
        labelName='Email'
        value={email}
        autoCapitalize='none'
        onChangeText={(userEmail) => setEmail(userEmail)}
      />
      <FormInput
      
        labelName='Password'
        value={password}
        secureTextEntry={true}
        onChangeText={(userPassword) => setPassword(userPassword)}
      />
      <FormButton
        title='Login'
        modeValue='contained'
        labelStyle={styles.loginButtonLabel}
        onPress={() => {
          login(email, password);
        }}
      />
      <FormButton
      style="justify-content: center"
        title='Sign up here'
        modeValue='text'
        uppercase={false}
        labelStyle={styles.navButtonText}
        onPress={() => navigation.navigate('Signup')}
      />
      
    </View>

    <View style={{backgroundColor:"#98AFC7", height:50, width:1920,borderTopLeftRadius:500,borderTopRightRadius:500}}>
    </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  titleText: {
    fontSize: 45,
    fontWeight:'bold', 
    marginBottom:50,
  },
  loginButtonLabel: {

    fontSize: 22
  },
  navButtonText: {
    fontSize: 16,
    fontWeight:'bold'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  
});