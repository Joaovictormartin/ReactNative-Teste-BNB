import { api } from '../services/api';

export const getClientsByUserId = async (userId: string) => {
  try {
    const response = await api.get(`/clients?userId=${userId}`);
    return response.data;
  } catch (error: any) {
    console.error('getClientsByUserId:', error);
    return [];
  }
};
