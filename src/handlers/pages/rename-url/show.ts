import { RenameUrl } from "@/handlers/types/rename-url";
import { RenameUrlServices } from "@/services/rename-url-services";

export class RenameUrlShowHandlers {
  static async handleGetOneRenameUrl(id: string | number | undefined): Promise<RenameUrl>{
    return await RenameUrlServices._getOneRenameUrl(id);
  }
}