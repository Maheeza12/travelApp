import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/FireBaseConfig';
import Toast from 'react-native-toast-message';


export default function SignUp() {
    const navigation=useNavigation();
    const router=useRouter();

    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [fullName,setFullName]=useState();
    
    
    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[]);

    const OnCreateAccount=()=>{
        if (!email&&!password&&!fullName)
        {
             Alert.show({
                type:'error',
                position:'bottom',
                text1:'Please enter all details',
                visibilityTime:3000
        });
            return;
        }
        
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    router.replace('/mytrip')
    // ...
    Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Account created successfully!',
        visibilityTime: 3000,
  });
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode);
    
    // ..
    Toast.show({
        type: 'error',
        position: 'bottom',
        text1: errorMessage,
        visibilityTime: 3000,
  });
  })
    }
  return (
    <View
        style={{
            padding:25,
            paddingTop:50,
            backgroundColor:Colors.WHITE,
            height:'100%'
        }}>
        <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" /></TouchableOpacity>    
        <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        marginTop:30
        
      }}>Create New Account</Text>

      {/* User Full Name */}
      <View style={{
                  marginTop:50
              }}>
                  <Text style={{
                      fontFamily:'outfit'
                  }}>Full Name</Text>
                  <TextInput style={styles.input} 
                      placeholder='Enter Full Name'
                      onChangeText={(value)=>setFullName(value)}                      
                      />
              </View>

         {/* Email */}
              <View style={{
                  marginTop:20
              }}>
                  <Text style={{
                      fontFamily:'outfit'
                  }}>Email</Text>
                  <TextInput 
                  style={styles.input}
                  onChangeText={(value)=>setEmail(value)} 
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
                  onChangeText={(value)=>setPassword(value)} 
                      placeholder='Enter Password'/>
              </View>
      
        {/* Sign Up Button */}
              <TouchableOpacity onPress={OnCreateAccount} style={{
                  padding:20,
                  backgroundColor:Colors.PRIMARY,
                  borderRadius:15,
                  marginTop:50 
              }}>
                  <Text style={{
                      
                      color:Colors.WHITE,
                      textAlign:'center'
                  }}>Create Account</Text>
              </TouchableOpacity>
              {/* Sign-In Button */}
                      <TouchableOpacity
                          onPress={()=>router.replace('auth/sign-in')}
                      
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
                          }}>Sign In</Text>
                      </TouchableOpacity>
                      {/* Toast Container */}
            <Toast/>      
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
}})