import PrimaryButton from "@/components/buttons/_primary-button";
import TextInput from "@/components/inputs/_text-input";
import { RenameUrlIndexHandlers } from "@/handlers/pages/rename-url";
import { RenameUrl } from "@/handlers/types/rename-url";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import UrlResult from "../../_url-result";

export type RenameUrlFormData = {
  url: string;
  alias: string;
}

export default function RenameUrlForm() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<RenameUrlFormData>();
  const [generatedUrl, setGeneratedUrl] = useState<RenameUrl>();

  const handleCreateRenameUrl = async (data: RenameUrlFormData) => {
    try {
      const url = await RenameUrlIndexHandlers.handleCreateRenameUrl(data);
      setGeneratedUrl(url);
    } catch(e: any){
      toast.error(e.response.data.error);
    }
  }
  
  return (
    <div className="flex flex-col gap-4 mt-10 sm:mt-12">
      <form
        className="sm:max-w-xl sm:mx-auto lg:mx-0 flex flex-col gap-4"
        onSubmit={handleSubmit(handleCreateRenameUrl)}
      >
        <div>
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
        <div className="sm:flex">
          <div className="flex-1 min-w-0">
            <TextInput
              register={register('alias', {
                required: 'Alias is required',
              })}
              errors={errors}
              setValue={setValue}
              id="alias"
              type="text"
              name="alias"
              prefix={`${process.env.NEXT_PUBLIC_BASE_URL}/`}
              placeholder="alias"
            />
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <PrimaryButton type="submit" content="Rename" />
          </div>
        </div>
      </form>
      <UrlResult generatedUrl={generatedUrl} text={'Renamed to'}/>
    </div>
  )
}