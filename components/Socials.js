import { Image, View, Text } from "react-native"

const urls = [
  {id: "111", img: require("../assets/images/facebook.png")},
  {id: "121", img: require("../assets/images/twitter.png")},
  {id: "131", img: require("../assets/images/instagram.png")},
  {id: "141", img: require("../assets/images/tiktok.png")},
  {id: "151", img: require("../assets/images/youtube.png")},
]

const Socials = () => {
  return (
    <View className="mb-5 flex flex-row justify-evenly">
      {urls.map(({id, img}) => (
        <View key={id} className="w-10 h-10 rounded-full border flex justify-center items-center">
        <Image source={img} style={{resizeMode: "center"}} />
      </View>
      ))}
      {/* <Text>Still working on it</Text> */}
    </View>
  )
}

export default Socials