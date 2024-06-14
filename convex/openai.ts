
import { v } from "convex/values";
import OpenAI from 'openai';
import { SpeechCreateParams } from "openai/resources/audio/speech.mjs";
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const generateAudioAction = ({
    args:{
        input: v.string(), voice: v.number()
    },
    handler: async ( _: any ,{voice, input}: any) => {

        const mp3 = await openai.audio.speech.create({
            model: "tts-1",
            voice: voice as SpeechCreateParams["voice"],
            input
        });
        
        const buffer = Buffer.from(await mp3.arrayBuffer());

        return buffer;
    }
});

export default generateAudioAction;