import { toast } from "react-toastify"

export class ActionHandlers {
  static copyText(str: string) {
    navigator.clipboard.writeText(str)
    toast.success(`Copied the text: ${str}`)
  }
}