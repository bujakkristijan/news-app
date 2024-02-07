export const generateUniqueId = (): string => {
  const timestamp: string = Date.now().toString(36);
  const randomNumber: string = Math.random().toString(36).substring(2, 5);
  const uniqueId: string = timestamp + randomNumber;
  return uniqueId;
};
