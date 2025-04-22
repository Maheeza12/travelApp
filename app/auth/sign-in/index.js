import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from 'C:/Users/Maheeza/Desktop/App/TravelApp/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/FireBaseConfig';
import Toast from 'react-native-toast-message';

export default function SignIn() {
    const navigation=useNavigation();
    const router =useRouter();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

    //Sign in Existing users
    const onSignIn=()=>{
        if (!email || !password) {
            Toast.show({
              type: 'error',
              text1: 'Missing Info',
              text2: 'Please enter both Email and Password',
              visibilityTime: 4000
            });
            return;
          }

        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/mytrip')
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode)
    if (errorCode === 'auth/invalid-credential') {
        Toast.show({
          type: 'error',
          text1: 'Login Failed',
          text2: 'Invalid credentials',
          visibilityTime: 4000,
        });
      } else if (errorCode === 'auth/invalid-email') {
        Toast.show({
          type: 'error',
          text1: 'Invalid Email',
          text2: 'Please enter a valid email address',
          visibilityTime: 4000,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Authentication Error',
          text2: errorMessage,
          visibilityTime: 4000,
        });
      }
      
  });

    }

  return (
    <View style={{
        padding:25,
        paddingTop:50,
        backgroundColor: Colors.WHITE,
        height:'100%'
    }}>
        <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" /></TouchableOpacity>
        <Text style={{
            fontFamily:'outfit-bold',
            fontSize:30,
            marginTop:30
        }}>Let's Sign You In</Text>
        <Text style={{
            fontFamily:'outfit',
            fontSize:30,
            color:Colors.GRAY,
            marginTop:20
        }}>Welcome back!</Text>
        <Text style={{
            fontFamily:'outfit',
            fontSize:30,
            color:Colors.GRAY,
            marginTop:10
        }}>You've been missed</Text>

        {/* Email */}
        <View style={{
            marginTop:50
        }}>
            <Text style={{
                fontFamily:'outfit'
            }}>Email</Text>
            <TextInput style={styles.input} 
            onChangeText={(value)=> setEmail(value)}
                placeholder='Enter Email'/>
        </View>

        {/* Password */}
        <View style={{
            marginTop:20
        }}>
            <Text style={{
                fontFamily:'outfit'
            }}>Password</Text>
            <TextInput
            secureTextEntry={true}
            style={styles.input} 
            onChangeText={(value)=> setPassword(value)}
                placeholder='Enter Password'/>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity onPress={onSignIn} style={{
            padding:20,
            backgroundColor:Colors.PRIMARY,
            borderRadius:15,
            marginTop:50 
        }}>
            <Text style={{
                
                color:Colors.WHITE,
                textAlign:'center'
            }}>Sign In</Text>
        </TouchableOpacity>

        {/* Create Account Button */}
        <TouchableOpacity
            onPress={()=>router.replace('auth/sign-up')}
        
        style={{
            padding:20,
            backgroundColor:Colors.WHITE,
            borderRadius:15,
            marginTop:20,
            borderWidth:1 
        }}>
            <Text style={{
                
                color:Colors.PRIMARY,
                textAlign:'center'
            }}>Create Account</Text>
        </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        padding:15,
        borderWidth:1,
        borderRadius:15,
        borderColor:Colors.GRAY,
        fontFamily:'outfit'
    }
})