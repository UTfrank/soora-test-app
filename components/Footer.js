import { View, Text } from "react-native"
import Socials from "./Socials"

const Footer = () => {
  return (
    <View>
      <Socials />
      <View className="border-t py-5 mb-0">
        <Text className="text-center text-xs font-normal">Copyright © 2022 Soora. All rights reserved</Text>
      </View>
    </View>
  )
}

export default Footer