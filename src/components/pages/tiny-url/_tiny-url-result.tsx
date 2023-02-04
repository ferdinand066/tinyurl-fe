import PrimaryButton from "@/components/buttons/_primary-button";
import { TinyUrlIndexHandlers } from "@/handlers/pages/tiny-url";
import { TinyUrl } from "@/handlers/types/tiny-url";

export default function TinyUrlResult({ generatedUrl }: { generatedUrl: TinyUrl | undefined }) {
  console.log(generatedUrl);
  return generatedUrl ? <div className='sm:max-w-xl sm:mx-auto lg:mx-0'>
    <div className='flex flex-col w-full gap-2 px-4 py-3 text-base text-gray-900 break-all bg-white border-0 rounded-md'>
      <span>{generatedUrl.url}</span>
      <span className='text-sm text-center'>Shortened to</span>
      <div className='flex flex-row items-center justify-between'>
        <span className='flex-1'>{generatedUrl.label}</span>
        <PrimaryButton 
          content="Copy" 
          type="button" 
          className="w-20 py-1.5 text-center" 
          onClick={() => TinyUrlIndexHandlers.copyText(generatedUrl.label)} 
        />
      </div>
    </div>
  </div> : <></>
}