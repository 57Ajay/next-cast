
import { GeneratePodcastProps } from "@/types"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { Button } from "@/components/ui/button"
import { Loader } from "lucide-react"
import { useState } from "react"


const useGeneratePodcast = (props: GeneratePodcastProps)=>{
    const [isGenerating, setIsGenerating] = useState(false)
    const generatePodcast = async()=>{
        
    }
    return{
        isGenerating, generatePodcast
    }
}
const GeneratePodcast = (props: GeneratePodcastProps) => {
    
    const {isGenerating, generatePodcast} = useGeneratePodcast(props)

  return (
    <div>
        <div className="flex flex-col gap-2.5">
            <Label>AI Prompt to generate Podcast</Label>
            <Textarea
            className="input-class font-light focus-visible: ring-offset-orange-1"
            placeholder="Provide text to generate audio"
            rows={5}
            value={props.voicePrompt}
            onChange={(e)=>props.setVoicePrompt(e.target.value)} />
        </div>
        <div className="mt-5 w-full max-w-[200px]">
        <Button type="submit" className="text-16 bg-orange-1 py-4 font-bold text-white-1 ">
        {isGenerating ? (
                  
                  <>
                    Generating
                    <Loader size={20} className="animate-spin ml-5"/>
                  </>
                ): (
                  "Generate"
                )}
        </Button>
        </div>
        {props.audio && (
            <audio controls
            src={props.audio}
            autoPlay
            className="mt-5"
            onLoadedMetadata={(e)=>props.setAudioDuration(e.currentTarget.duration)}
            />
        )}
    </div>
  )
}

export default GeneratePodcast