import { useLayoutEffect } from "react";
import {
  SafeAreaView,
  View,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <ScrollView>
        <Header />
        <Banner text1="Bringing" text2="Muslims Together" store={true} sub={false} img={require("../assets/images/landing-image-2.png")} />
        <Banner text1="Get Notified" text2="When we Launch" store={false} sub={true} img={require("../assets/images/landing-image-1.png")} />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
