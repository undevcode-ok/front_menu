import { useCallback } from "react";

interface UseWhatsAppProps {
  phoneNumber: string;
  defaultMessage?: string;
}

export const useWhatsApp = ({ phoneNumber, defaultMessage = "" }: UseWhatsAppProps) => {
  const openWhatsApp = useCallback((customMessage?: string) => {
    const message = encodeURIComponent(customMessage || defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  }, [phoneNumber, defaultMessage]);

  return { openWhatsApp };
};