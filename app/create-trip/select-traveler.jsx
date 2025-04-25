import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { SelectTravelersList } from '../../constants/Options'
import OptionsCard from '../../components/CreateTrip/OptionsCard'
import { CreateTripContext } from '../../context/CreateTripContext'
 
export default function SelectTraveler() {

  const navigation=useNavigation();
  const [selectedTraveler,setSelectedTraveler]=useState();
  const {tripData,setTripData}=useContext(CreateTripContext);

  useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
      headerTitle:''
    })
  },[])

  useEffect(()=>{
    setTripData({...tripData,
      traveler:selectedTraveler
    })    
  },[selectedTraveler]);

  useEffect(()=>{
    console.log(tripData);
  },[tripData])

  const onClickContinue = () => {
        if (!selectedTraveler) {
          Alert.alert('Incomplete Selection', 'Please select an option');
          return;
        }
        navigation.navigate('create-trip/select-dates');
      }  

   return (
     <View style={{
      padding:25,
      paddingTop:105,
      backgroundColor:Colors.WHITE,
      height:'100%'
     }}>
       <Text style={{
        fontSize:35,
        fontFamily:'outfit-bold',
        marginTop:20
       }}>Who's going?</Text>
       <View style={{
      marginTop:20,
     }}>
       <Text style={{
        fontSize:23,
        fontFamily:'outfit-medium',
       }}>Choose your Travelers:</Text>

       <FlatList
       data={SelectTravelersList}
       renderItem={({item,index})=>(
        <TouchableOpacity
        onPress={()=>setSelectedTraveler(item)}
         style={{
          marginVertical:10
        }}>
          <OptionsCard option={item} selectedOption={selectedTraveler}/>
        </TouchableOpacity>
       )}
       />
     </View>

    
     <TouchableOpacity 
  onPress={onClickContinue}
  style={{
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 15,
    marginTop: 20,
  }}
>
  <Text style={{
    textAlign: 'center',
    color: Colors.WHITE,
    fontFamily: 'outfit-medium',
    fontSize: 20,
  }}>
    Continue
  </Text>
</TouchableOpacity>

     </View>
   )
 }