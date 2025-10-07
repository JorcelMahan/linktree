export const getWhatsAppLink = (phone: string) => {
  const url = `https://api.whatsapp.com/send?phone=%2B591${phone}`;
  return url;
};
