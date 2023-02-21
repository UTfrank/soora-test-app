import { View, Text, TouchableOpacity, Image } from "react-native";
import StoreBtn from "./StoreBtn";
import Subscribe from "./Subscribe";

const Banner = ({text1, text2, store, sub, img}) => {
  return (
    <View className="mt-14">
      <View className="flex-row items-center mb-2 justify-center">
        <View className="w-4 h-px bg-black mr-1.5"></View>
        <Text className="text-xs font-medium not-italic leading-4">
          Coming Soon
        </Text>
      </View>
      <View className="flex flex-col mb-6">
        <Text className="text-center font-extrabold text-4xl capitalize">{text1}</Text>
        <Text className="text-center font-extrabold text-4xl capitalize">{text2}</Text>
      </View>
      {store && <View className="flex flex-row">
        <StoreBtn img={require("../assets/images/google-play.png")} />
        <StoreBtn img={require("../assets/images/apple-store.png")} />
      </View>}
      {sub && <View className="flex flex-row">
        <Subscribe />
      </View>}
      <View className="flex justify-center">
        <Image source={img} className="w-full border" style={{resizeMode: "contain"}} />
      </View>
    </View>
  );
};

export default Banner;
