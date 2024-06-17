import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MyProfile } from '../screens/myProfile'
import { ROUTE } from './routes'
import { ImageSelector } from '../screens/imageSelector'
import { LocationSelector } from '../screens/locationSelector'

const {Navigator, Screen} = createNativeStackNavigator()

export const MyProfileStack = () => {
  return (
    <Navigator>
        <Screen name= {ROUTE.MY_PROFILE} component={MyProfile} options={{headerTitle: 'Mi Perfil'}} />
        <Screen name= {ROUTE.IMAGE_SELECTOR} component={ImageSelector} options={{headerTitle: 'Selecciona tu imagen de perfil'}} />
        <Screen name= {ROUTE.LOCATION_SELECTOR} component={LocationSelector} options={{headerTitle: 'Seleccionar ubicación'}} />
    </Navigator>  
  )
}
