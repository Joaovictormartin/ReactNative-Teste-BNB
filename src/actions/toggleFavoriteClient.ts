import { api } from '../services/api';
import { ClientsProps } from '../screens/Register';

export const toggleFavorite = async (user: ClientsProps) => {
  try {
    if (!user) return null;

    const payload = { favorite: !user.favorite };
    const patchResponse = await api.patch(`/clients/${user.id}`, payload);

    return patchResponse.data;
  } catch (error: any) {
    console.error('toggleFavorite:', error);
    return null;
  }
};
