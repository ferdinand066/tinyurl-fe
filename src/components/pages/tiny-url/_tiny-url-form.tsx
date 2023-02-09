import PrimaryButton from "@/components/buttons/_primary-button";
import TextInput from "@/components/inputs/_text-input";
import UrlResult from "@/components/_url-result";
import { TinyUrlIndexHandlers } from "@/handlers/pages/tiny-url";
import { TinyUrl } from "@/handlers/types/tiny-url";
import { useState } from "react";
import { useForm } from "react-hook-form";

export type TinyUrlFormData = {
  url: string;
}

export default function TinyUrlForm() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<TinyUrlFormData>();
  const [generatedUrl, setGeneratedUrl] = useState<TinyUrl>();

  const handleCreateTinyUrl = async (data: TinyUrlFormData) => {
    const url = await TinyUrlIndexHandlers.handleCreateTinyUrl(data);
    setGeneratedUrl(url);
  }
  
  return (
    <div className="flex flex-col gap-4 mt-10 sm:mt-12">
      <form
        className="sm:max-w-xl sm:mx-auto lg:mx-0"
        onSubmit={handleSubmit(handleCreateTinyUrl)}
      >
        <div className="sm:flex">
          <div className="flex-1 min-w-0">
            <TextInput
              register={register('url', {
                required: 'Url is required',
              })}
              errors={errors}
              setValue={setValue}
              id="url"
              type="url"
              name="url"
              placeholder="Shorten your link"
            />
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <PrimaryButton type="submit" content="Shorten" />
          </div>
        </div>
      </form>
      <UrlResult generatedUrl={generatedUrl} text={'Shorten to'} />
    </div>
  )
}