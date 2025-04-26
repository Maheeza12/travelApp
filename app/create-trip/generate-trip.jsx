import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { CreateTripContext } from '../../context/CreateTripContext';
import { AI_PROMPT } from '../../constants/Options';
import { chatSession } from '../../configs/AIModel1';
import { useRouter } from 'expo-router';
import { auth,db } from './../../configs/FireBaseConfig'
import { setDoc, doc } from "firebase/firestore";

export default function GenerateTrip() {
    const {tripData,setTripData} = useContext(CreateTripContext);
    const [loading, setLoading] = useState(false);
    const router=useRouter()
    const user=auth.currentUser;

    useEffect(()=>{
    GenerateAITrip()        
    },[])

    const GenerateAITrip=async()=>{
      setLoading(true);

        const FINAL_PROMPT= AI_PROMPT
        .replace('{location}',tripData?.locationInfo?.name)
        .replace('{totalDays}',tripData?.totalNoOfDays)
        .replace('{totalNights}',tripData?.totalNoOfDays-1)
        .replace('{totalDays}',tripData?.totalNoOfDays)
        .replace('{totalNights}',tripData?.totalNoOfDays-1)
        .replace('{traveler}',tripData?.traveler?.title )
        .replace('{budget}',tripData?.budget);

        console.log(FINAL_PROMPT)        

        const result= await chatSession.sendMessage(FINAL_PROMPT);
        console.log(result.response.text());
        const tripResp=JSON.parse(result.response.text())
        setLoading(false)
        const docId=(Date.now()).toString();
        const gemResult= await setDoc(doc(db,"UserTrips",docId),{
            userEmail:user.email,
            tripPlan: tripResp, //AI Result
            tripData: JSON.stringify(tripData), //User selection
            docId:docId
        })
            router.push('(tabs)/mytrip');
    }
    
  return (

    <View style={{
        padding:25,
        paddingTop:105,
        backgroundColor:Colors.WHITE,
        height:'100%'
        }}>
            <Text 
            style={{
            fontFamily:'outfit-bold',
            fontSize:35,
            textAlign:'center',
            }}>Please wait...
            </Text>
            <View style={{
                marginTop:20,
                }}>
                <Text 
                style={{
                    fontSize:20,
                    fontFamily:'outfit-medium',
                    textAlign:'center'
                    }}>We are working to generate your Dream Trip!</Text>
                <Image source={require('./../../assets/images/loading2.gif')}
                style={{
                    marginTop:180,
                    width:'100%',
                    height:100,
                    objectFit:'contain'
                }}
                
                />
            <Text 
                style={{
                    marginTop:180,
                    color:Colors.GRAY,
                    fontFamily:'outfit',
                    fontSize:20,
                    textAlign:'center',
                    }}>Do not close the window...
            </Text>
            </View>
    </View>

  )
}