import { TinyUrlFormData } from "@/components/pages/tiny-url/_tiny-url-form";
import { TinyUrl } from "@/handlers/types/tiny-url";
import { TinyUrlServices } from "@/services/tiny-url-services";
import { toast } from "react-toastify";

export class TinyUrlIndexHandlers {
  static async handleCreateTinyUrl(body: TinyUrlFormData): Promise<TinyUrl>{
    return await TinyUrlServices._createTinyUrl(body);
  }

  static copyText(str: string){
    navigator.clipboard.writeText(str);
    toast.success(`Copied the text: ${str}`);
  }
}