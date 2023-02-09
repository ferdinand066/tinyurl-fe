import { RenameUrlFormData } from "@/components/pages/rename-url/_rename-url-form";
import { RenameUrl } from "@/handlers/types/rename-url";
import { RenameUrlServices } from "@/services/rename-url-services";
import { toast } from "react-toastify";

export class RenameUrlIndexHandlers {
  static async handleCreateRenameUrl(body: RenameUrlFormData): Promise<RenameUrl>{
    return await RenameUrlServices._createRenameUrl(body);
  }
}