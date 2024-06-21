import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Button } from '../components/button'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/shopServices'
import { setUserImgProfile } from '../features/auth/authSlice'
import { ROUTE } from '../navigation/routes'

export const MyProfile = () => {
    const {navigate} = useNavigation()
    const { email, imgProfile, localId } = useSelector(state => state.auth.value.user)
    const dispatch = useDispatch()

    const { data: profileImage } = useGetProfileImageQuery(localId);
    useEffect(() => {
        if (profileImage && profileImage.image) {
            dispatch(setUserImgProfile(profileImage.image));
        }
    }, [profileImage, dispatch]);
    const goToImageSelector = ()=> navigate('ImageSelector')

    const goToMyLocation = () => navigate(ROUTE.LOCATION_SELECTOR)
    

  return (
    <View style={styles.container}>
        <Text style={styles.userEmail}>{email}</Text>
        <Image source={imgProfile ? { uri: imgProfile } :require('../assets/profileIMG.jpg')} style={styles.image}/>
        <Button onPress={goToImageSelector}>Agregar foto de perfil</Button>
        <Button onPress={goToMyLocation}>Mi dirección</Button>
        
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    image: {
        width: 160,
        height: 160,
        borderRadius: 80,
    },
    userEmail: {
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
})