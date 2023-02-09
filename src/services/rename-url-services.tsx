import axios from "axios";
const RESOURCE = 'rnm'
export class RenameUrlServices {
  static async _createRenameUrl(body: RenameUrlServices){
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/${RESOURCE}`, body, 
      // {
      //   'headers': {
      //     'Authorization': 'Bearer ' + validToken()
      //   }
      // } 
    );
    const { url } = data;

    return {
      ...url,
      label: `${process.env.NEXT_PUBLIC_BASE_URL}/${RESOURCE}/${url.label}`
    };
  }

  static async _getOneRenameUrl(id: string | number | undefined){
    if (id === undefined) return;
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${RESOURCE}/${id}`);
    const { url } = data;

    return {
      ...url,
      label: `${process.env.NEXT_PUBLIC_BASE_URL}/${RESOURCE}/${url.label}`
    };
  }
}