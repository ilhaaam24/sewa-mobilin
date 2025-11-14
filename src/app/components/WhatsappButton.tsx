import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <div className="fixed z-50 bottom-4 right-4 bg-yellow-400 p-2 rounded-full flex items-center justify-center size-16 md:size-20 cursor-pointer">
      <FaWhatsapp size={32} />
    </div>
  );
}
