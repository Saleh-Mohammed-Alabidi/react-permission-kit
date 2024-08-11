import CryptoJS from "crypto-js";

const storeName = "__react_permission_kit";
const secretKey = "__react_permission_kit_secretKey";

const encryptData = (data: string[], secretKey: string) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
};

const decryptData = (encryptedData: string, secretKey: string) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

const getData = (permissions: any): string => {
  return permissions ? decryptData(permissions, secretKey) : "";
};

export const getPermissions = (permissions: string[]) => {
  const savedState = localStorage.getItem(storeName);
  return savedState
    ? permissions.length > 0
      ? (savePermissions(permissions), permissions)
      : JSON.parse(getData(savedState))
    : permissions;
};

export const savePermissions = (permissions: string[]) => {
  return permissions.length > 0
    ? localStorage.setItem(storeName, encryptData(permissions, secretKey))
    : "";
};
