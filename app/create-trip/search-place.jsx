import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';
import { CreateTripContext } from './../../context/CreateTripContext';
import { useColorScheme } from 'react-native';

export default function SearchPlace() {
  const navigation=useNavigation();
  const {tripData,setTripData}=useContext(CreateTripContext);
  const colorScheme = useColorScheme();
  const router = useRouter();

  useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
      headerTitle:"Search",
      headerBackTitle: 'Back'
    })
  },[]);

  useEffect(()=>{
    console.log(tripData);
  }),[];
  
  return (
    <View
    style={{
      padding:25,
      paddingTop:105,
      backgroundColor: colorScheme === 'dark' ? '#000' : Colors.WHITE,
      height:'100%'
    }}>
       <GooglePlacesAutocomplete
      placeholder='Search Place'
      placeholderTextColor={colorScheme === 'dark' ? '#aaa' : '#7d7d7d'}
      fetchDetails={ true }
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setTripData({
          locationInfo:{
            name: data.description,
            coordinates: details?.geometry.location,
            photoRef:details?.photos[0]?.photo_reference,
            url: details?.url
          }
        });

        router.push('/create-trip/select-traveler')
      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}

      styles={{
        
        textInputContainer:{
          borderWidth:1,
          borderRadius:5,
          marginTop:25,
          backgroundColor: colorScheme === 'dark' ? '#1c1c1e' : '#fff',
        },
        textInput: {
          color: colorScheme === 'dark' ? '#fff' : '#000',
          backgroundColor: colorScheme === 'dark' ? '#1c1c1e' : '#fff',
          fontSize: 16,
          height: 44,
        },
        description: {
          color: colorScheme === 'dark' ? '#fff' : '#000',
        }
      }}
      textInputProps={{
        placeholderTextColor: colorScheme === 'dark' ? '#ccc' : '#7d7d7d',
      }}
      
    />
    </View>
  )
}