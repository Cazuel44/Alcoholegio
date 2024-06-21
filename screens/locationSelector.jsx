import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Button } from '../components/button';
import { setUserLocation } from '../features/auth/authSlice';
import { usePostUserLocationMutation } from '../services/shopServices';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';

export const LocationSelector = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState('');
    const [isSavingLocation, setIsSavingLocation] = useState(false);
    const [triggerPostUserLocation] = usePostUserLocationMutation();
    const localId = useSelector(state => state.auth.value.user.localId);
    const dispatch = useDispatch();
    const { goBack } = useNavigation();

    const getLocation = async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permisos insuficientes');
                return;
            }
            const location = await Location.getCurrentPositionAsync();
            setLocation(location.coords);
        } catch (error) {
            setError(error.message);
        }
    };

    const confirmAdress = async () => {
        try {
            setIsSavingLocation(true);
            await triggerPostUserLocation({ location, localId }); // Enviamos directamente la ubicación
            dispatch(setUserLocation(location));
            goBack();
        } catch (error) {
            setError(error.message);
        } finally {
            setIsSavingLocation(false);
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return (
        <View style={styles.container}>
            {location ? (
                <>
                    <Text style={styles.title}>Mi ubicación</Text>
                    <Text style={styles.text}>{`Latitud: ${location.latitude}, Longitud: ${location.longitude}`}</Text>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <Marker
                            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                            title={"Tu ubicación"}
                        />
                    </MapView>
                    <Button onPress={confirmAdress}>
                        {isSavingLocation ? 'Confirmando...' : 'Confirmar ubicación'}
                    </Button>
                </>
            ) : (
                <>
                    <Text style={styles.title}>Error al obtener ubicación</Text>
                    <Text style={styles.text}>{error}</Text>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    map: {
        width: '80%',
        height: 300,
        marginBottom: 10,
    },
});