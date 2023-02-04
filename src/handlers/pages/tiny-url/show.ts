import { TinyUrl } from "@/handlers/types/tiny-url";
import { TinyUrlServices } from "@/services/tiny-url-services";

export class TinyUrlShowHandlers {
  static async handleGetOneTinyUrl(id: string | number | undefined): Promise<TinyUrl>{
    return await TinyUrlServices._getOneTinyUrl(id);
  }
}