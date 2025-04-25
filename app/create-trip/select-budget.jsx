import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { SelectBudgetOptions } from '../../constants/Options';
import OptionsCard from '../../components/CreateTrip/OptionsCard';
import { FlatList } from 'react-native';
import { CreateTripContext } from '../../context/CreateTripContext';
import { Alert } from 'react-native';

export default function SelectBudget() {

const navigation=useNavigation();
const [selectedBudget,setSelectedBudget]=useState();
const {tripData,setTripData}=useContext(CreateTripContext);
const router=useRouter();

useEffect(()=>{
    navigation.setOptions({
                headerShown:true,
                headerTransparent:true,
                headerTitle:''
            })
        },[]);
    
useEffect(()=>{
    selectedBudget&&setTripData({...tripData,
        budget:selectedBudget?.title
    })
},[selectedBudget]);

const onClickContinue = () => {
      if (!selectedBudget) {
        Alert.alert('Incomplete Selection', 'Please select an option');
        return;
      }
      
      router.push('/create-trip/review-trip')
    };
 

  return (
    <View style={{
            padding:25,
            paddingTop:105,
            backgroundColor:Colors.WHITE,
            height:'100%'
        }}>
     <Text style={{
        fontFamily:'outfit-bold',
             fontSize:35,
             marginTop:20
           }}>Budget
           
           </Text>
           <View style={{
            marginTop:20,
            }}>
            <Text style={{
                fontSize:20,
                   fontFamily:'outfit-medium',
                  }}>Choose Spending habits for your Trip:</Text>
           
                  <FlatList
                  data={SelectBudgetOptions}
                  renderItem={({item,index})=>(
                   <TouchableOpacity
                   onPress={()=>setSelectedBudget(item)}
                    style={{
                     marginVertical:10
                   }}>
                     <OptionsCard option={item} selectedOption={selectedBudget}/>
                   </TouchableOpacity>
                  )}
                  />
        </View>

        <TouchableOpacity 
        onPress={()=>onClickContinue()}        
        style={{
              padding:15,
              backgroundColor:Colors.PRIMARY,
              borderRadius:15,
              marginTop:20
             }}>
               
              <Text style={{
                textAlign:'center',
                color:Colors.WHITE,
                fontFamily:'outfit-medium',
                fontSize:20
              }}>
                Continue</Text>
        
             </TouchableOpacity>
    </View>
    
  )
}