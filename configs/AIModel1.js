import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY; // Replace this with your actual key
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-04-17" });
const generationConfig={
    temperature : 1,
    topP : 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType:"application/json"
}

export const chatSession=model.startChat({
    generationConfig,
    history:[
        {
          role: "user",
          parts: [
            {
              text: `Generate Travel Plan for Location: New York USA, for 1 Days and 1 Night for Family with a Luxury budget with a Flight details, Flight Price with Booking uri, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Uri, Geo Coordinates, ticket Pricing, Time to travel each of the location for 1 days and 1 night with each day plan with best time to visit in JSON format.`,
            },
          ],
        },
      ]
})