import { api } from '../services/api';

export const getClientsByUserIdFavorite = async (userId: string) => {
  try {
    const response = await api.get(`/clients?userId=${userId}&favorite=true`);
    return response.data;
  } catch (error: any) {
    console.error('getClientsByUserId:', error);
    return [];
  }
};
