import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import { Button } from '../components/button'
import { useDispatch, useSelector } from 'react-redux'
import { setCameraImg, setUserImgProfile } from '../features/auth/authSlice'
import { useNavigation } from '@react-navigation/native'
import { usePostProfileImageMutation } from '../services/shopServices'


export const ImageSelector = () => {
    const [image, setImage] = useState(null)
    const [isSavingProfileImage, setIsSavingProfileImage] = useState(false)
    const dispatch = useDispatch()
    const { goBack } = useNavigation()
    const [triggerSaveProfileImage] = usePostProfileImageMutation()
    const localId = useSelector(state => state.auth.value.user.localId)

    const verifyPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        if (!granted) {
            Alert.alert(
                'Permisos insuficientes',
                'Necesitas dar permisos para cambiar tu imagen de perfil',
                [{ text: 'Ok' }]
            )
            return false
        }
        return true
    }

    const pickImage = async () => {
        const hasPermission = await verifyPermissions()
        if (!hasPermission) return
        const image = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            base64: true,
            quality: 0.25,
        })
        if (image.canceled) return
        setImage(`data:image/jpeg;base64,${image.assets[0].base64}`)
    }

    const confirmImage = async () => {
        try {
            setIsSavingProfileImage(true)
            dispatch(setCameraImg(image))
            const result = await triggerSaveProfileImage({ image, localId })
            console.log(result)
            dispatch(setUserImgProfile(image))
            goBack()
        } catch (error) {
            console.log(error)
        } finally {
            setIsSavingProfileImage(false)
        }
    }

    return (
        <View style={styles.container}>
            {image ? (
                <>
                    <Image source={{ uri: image }} style={styles.image} />
                    <Button onPress={pickImage}>Tomar otra foto</Button>
                    <Button onPress={confirmImage}>{isSavingProfileImage ? 'Confirmando...' : 'Confirmar'}</Button>
                </>
            ) : (
                <>
                    <Text>No hay foto para mostrar</Text>
                    <Button onPress={pickImage}>Tomar Foto</Button>
                </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        gap: 32,
    },
    actions: {
        gap: 16,
    },
    image: { width: 160, height: 160 },
})