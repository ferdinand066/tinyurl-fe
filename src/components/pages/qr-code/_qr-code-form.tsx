import { useState, useRef, ChangeEvent } from "react";
import QRCode from "qrcode.react";
import PrimaryButton from "@/components/buttons/_primary-button";
import TextInput from "@/components/inputs/_text-input";

const QrCodeForm: React.FC = () => {
  const [text, setText] = useState<string>('');
  const qrCodeRef = useRef<HTMLDivElement>(null);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const downloadQRCode = () => {
    if (qrCodeRef.current) {
      const canvas = qrCodeRef.current.querySelector('canvas') as HTMLCanvasElement;
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = url;
      link.download = 'qrcode.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-10 sm:mt-12">
      <div className="sm:mx-auto lg:mx-0 flex flex-col gap-4 w-full">
        <div className="sm:flex w-full">
          <div className="flex-1 min-w-0">
            <TextInput
              onChange={handleTextChange}
              setValue={() => {}}
              id="alias"
              type="text"
              name="alias"
              placeholder="Insert your text"
            />
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <PrimaryButton onClick={downloadQRCode} content="Download" />
          </div>
        </div>
      </div>
      {text && (
        <div ref={qrCodeRef} className="mx-auto pt-4 w-full">
          <QRCode value={text} style={{width: '300px', height: '300px'}} className="mx-auto"/>
        </div>
      )}
    </div>
  );
}

export default QrCodeForm;
