import { Image, StyleSheet, View } from 'react-native'
import { googleAPI } from '../config/googleApi'

export const MapPreview = ({ location }) => {
    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=300x300&maptype=roadmap&markers=color:red%7Clabel:A%7C${location.latitude},${location.longitude}&key=${googleAPI.mapStatic}`
    console.log("URL del Mapa: ", mapPreviewUrl)
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: mapPreviewUrl }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    image: {
        height: 300,
        width: 300,
    },
})