import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {
    const router=useRouter();
  return (
    <View>
      <Image source={require('./../assets/images/Printable-Travel-Planner.jpeg')}
      style={{
        width:'100%',
        height:520
      }} />
      <View style={styles.container}>
        <Text style={{
          fontSize:28,
          fontFamily:'outfit-bold',
          textAlign:'center',
          marginTop:10
        }}>Travel Planner</Text>
        <Text style={{
          fontSize:18,
          fontFamily:'outfit',
          textAlign:'center',
          color: Colors.GRAY,
          marginTop:20
        }}>Discover your next adventure effortlessly. Personalised iteneraries  at your fingertips. Travel Smarter with AI-driven insights! </Text>

        <TouchableOpacity style={styles.button}
          onPress={()=>router.push('auth/sign-in')}        
        >
          <Text style= {{
            color:Colors.WHITE,
            textAlign:'center',
            fontFamily:'outfit',
            fontSize:17
          }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:Colors.WHITE,
    marginTop:-10,
    borderTopLeftRadius:23,
    borderTopRightRadius:23,
    height:'100%',
    padding:25
  },
  button:{
    padding:15,
    backgroundColor:Colors.PRIMARY,
    borderRadius:99,
    marginTop:'20%'
  }
})