
import * as React from "react"
import { Pressable } from "react-native"
import Svg, { Path } from "react-native-svg"
import { useDispatch } from "react-redux"
import { deleteSession } from "../db"
import { logout } from "../features/auth/authSlice"


export const LogoutIcon = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    deleteSession()
  }

  return (
    <Pressable onPress={handleLogout}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill='#000000'
        viewBox="0 -960 960 960"
        /* {...props} */
      >
        <Path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
      </Svg>
    </Pressable>
  )


}



