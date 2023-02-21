import { View, Image, TouchableOpacity, Text } from "react-native";

const Header = () => {
  return (
    <View className="flex-row justify-between px-5 py-5">
      <View className="w-20 h-auto">
        <Image
          source={require("../assets/images/logo.png")}
          className="w-full" style={{resizeMode: "contain"}}
        />
      </View>
      <View>
        <TouchableOpacity className="flex-row justify-between items-center px-3.5 py-2.5 bg-black rounded">
          <Text className="text-white mr-2 font-bold text-xs">Contact Us</Text>
          <Image
            source={require("../assets/images/contact-icon.png")}
            className="h-2 w-2"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
