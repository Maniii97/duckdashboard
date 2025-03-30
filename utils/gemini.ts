import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "dotenv";

config();

const apiKey = process.env.GEMINI_API_KEY as string;

const instruction = "You will be given a question by a user followed by a dataset. Analyse the data and answer the question \
it is based on cloud cost data. The data is in the form of {costdata, awsServicesData, ApiusageData};";

const generativeAI = new GoogleGenerativeAI(apiKey);
const model = generativeAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: instruction,
});

const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Analyse the data for cloud services and answer the questions asked",
        },
      ],
    },
  ],
});

const handleChat = async (message: string) => {
  try {
    const res = await chat.sendMessage(message);
    console.log(res.response.text());
    return res.response.text();
  } catch (error) {
    console.error("Error @controllers/chat/chat.ts -> handleChat() : ", error);
  }
};

export default handleChat;
