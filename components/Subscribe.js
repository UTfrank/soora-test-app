import { View, Text, TouchableOpacity, TextInput } from "react-native";

const Subscribe = () => {
  return (
    <View className="w-full py-2">
      <View className="flex flex-row justify-between border w-10/12 mx-auto mb-2 p-1 pl-3 rounded-full">
        <TextInput
          className="w-8/12"
          keyboardType="default"
        />
        <TouchableOpacity className="bg-black rounded-full py-2.5 px-5">
          <Text className="text-xs text-white font-semibold leading-4">
            Notify Me
          </Text>
        </TouchableOpacity>
      </View>
      {/* <Text className="text-center font-semibold text-indigo-800">Your email address has been received.</Text> */}
      <Text className="text-center">Don’t worry, we won’t spam you :)</Text>
    </View>
  );
};

export default Subscribe;
