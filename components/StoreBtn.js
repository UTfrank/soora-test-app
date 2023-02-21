import { TouchableOpacity, Image } from "react-native";

const StoreBtn = ({ img }) => {
  return (
    <TouchableOpacity className="w-5/12 h-11 flex items-center rounded-md mx-4 overflow-hidden">
      <Image source={img} className="h-full w-full" style={{resizeMode: "contain"}} />
    </TouchableOpacity>
  );
};

export default StoreBtn;
