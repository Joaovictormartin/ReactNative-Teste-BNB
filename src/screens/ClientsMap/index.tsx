import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import MapView, { Callout, Marker, Region } from 'react-native-maps';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { ClientsProps } from '../Register';
import { theme } from '../../styles/theme';
import { useAuth } from '../../contexts/auth';
import avatarDefault from '../../assets/png/avatarDefault.png';
import { getClientsByUserId } from '../../actions/getClientsByUserId';

import { styles } from './styles';

const initialRegion: Region = {
  latitude: -23.55052,
  longitude: -46.633308,
  latitudeDelta: 10,
  longitudeDelta: 10,
};

const ClientsMap = () => {
  const { user } = useAuth();
  const { goBack } = useNavigation();
  const mapRef = useRef<MapView>(null);

  const [loading, setLoading] = useState(true);
  const [allClients, setAllUsers] = useState<ClientsProps[]>([]);
  const [region, setRegion] = useState<Region>({
    latitude: -23.55052,
    longitude: -46.633308,
    latitudeDelta: 10,
    longitudeDelta: 10,
  });

  const fetchClients = useCallback(async () => {
    if (!user?.id) return;
    const response = await getClientsByUserId(user?.id);

    setAllUsers(response);
    setLoading(false);
  }, [user?.id]);

  const handleZoom = (zoomIn: boolean) => {
    const factor = zoomIn ? 0.3 : 2;
    const newRegion = {
      ...region,
      latitudeDelta: region.latitudeDelta * factor,
      longitudeDelta: region.longitudeDelta * factor,
    };

    setRegion(newRegion);
    mapRef.current?.animateToRegion(newRegion, 300);
  };

  useFocusEffect(
    useCallback(() => {
      fetchClients();
    }, [user?.id]),
  );

  if (loading) {
    return (
      <View style={styles.centralize}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <>
      <MapView ref={mapRef} initialRegion={initialRegion} style={styles.map}>
        {allClients.map(client => (
          <Marker
            key={client.id}
            title={client.name}
            description={`Telefone: ${client.phone}`}
            coordinate={{
              latitude: client.latitude,
              longitude: client.longitude,
            }}
          >
            <Callout tooltip>
              <View style={styles.calloutContainer}>
                <Image
                  style={styles.avatar}
                  source={
                    client.avatar ? { uri: client.avatar } : avatarDefault
                  }
                />
                <Text style={styles.name}>{client.name}</Text>
                <Text style={styles.phone}>{client.phone}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <TouchableOpacity
        onPress={goBack}
        activeOpacity={0.7}
        style={styles.backButton}
      >
        <Text style={styles.buttonText}>←</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => handleZoom(true)}
        style={[styles.zoomButton, { bottom: 100 }]}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => handleZoom(false)}
        style={[styles.zoomButton, { bottom: 40 }]}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </>
  );
};

export default ClientsMap;
