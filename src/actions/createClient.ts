import { api } from '../services/api';

interface ClientProps {
  name: string;
  phone: string;
  avatar?: string;
  latitude: string;
  longitude: string;
  favorite?: boolean;
  userId?: string;
}

export const createClient = async (newClient: ClientProps) => {
  try {
    if (!newClient.userId) return null;

    const payload = {
      ...newClient,
      favorite: false,
      avatar: newClient.avatar ?? '',
      latitude: Number(newClient.latitude),
      longitude: Number(newClient.longitude),
    };

    const response = await api.post('/clients', payload);

    return response.data;
  } catch (error: any) {
    console.error('createClient:', error);
    return null;
  }
};
