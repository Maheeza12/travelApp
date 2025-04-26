// import { GoogleGenerativeAI } from "@google/generative-ai";

// const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY; // Replace this with your actual key
// const genAI = new GoogleGenerativeAI(API_KEY);

// async function getCodeFromGemini(prompt) {
//   const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-04-17" });
//   const generationConfig={
//     temperature : 1,
//     topP : 0.95,
//     topK: 64,
//     maxOutputTokens: 8192,
//     responseMimeType:"application/json"
// }

//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();

//   console.log("Generated Code:\n", text);
// }

// // Example prompt for JavaScript code
// const prompt = "Write a JavaScript function that filters out even numbers from an array.";

// getCodeFromGemini(prompt);
