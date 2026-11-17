import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";

import Animated,{ FadeIn, FadeOut,FadeInUp, FadeInDown } from 'react-native-reanimated';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/form_img/background.png")}
        style={{ width: "100%", height: 800, position: "absolute" }}
        resizeMode="cover"
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          position: "absolute",
        }}
      >
        <Animated.Image entering={FadeInUp.delay(200).duration(500).springify()} exiting={FadeOut}
          source={require("../../assets/images/form_img/light.png")}
          style={{ width: 100, height: 250 }}
        />
        <Animated.Image entering={FadeInUp.delay(400).duration(500).springify()}
          source={require("../../assets/images/form_img/light.png")}
          style={{ width: 60, height: 150 }}
        />
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.form_container}>
            <View style={{ alignItems: "center" }}>
              <Animated.Text entering={FadeInUp.delay(400).duration(500).springify()}  style={{ fontSize: 36, fontWeight: "600", color: "white" }}>
                LogIn
              </Animated.Text>
            </View>

            <View style={{ paddingVertical: 100, marginHorizontal: 20 }}>
              <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={styles.inputbox_container}>
                <TextInput
                  placeholder="Enter your email"
                  placeholderTextColor={"rgb(124, 114, 109)"}
                  style={styles.inputbox}
                />
              </Animated.View>

              <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} style={styles.inputbox_container}>
                <TextInput
                  placeholder="Enter Password"
                  placeholderTextColor={"rgb(124, 114, 109)"}
                  style={styles.inputbox}
                  secureTextEntry={true}
                />
              </Animated.View>

              <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} style={{marginVertical:10}}>
                <TouchableOpacity style={styles.btn}>
                  <Text style={{ color: "white", fontSize: 20 }}>Login</Text>
                </TouchableOpacity>
              </Animated.View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("signup")}>
                  <Text style={{ color: "rgba(16, 118, 219, 0.47)" }}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: "100%",
    width: "100%",
  },
  form_container: {
    width: "100%",
    paddingTop: 280,
    paddingBottom: 30,
    gap: 15,
  },
  inputbox_container: {
   backgroundColor: "#dfdfdf",
    opacity: 0.4,
    borderRadius: 10,
    marginVertical: 10,
  },
  inputbox: {
    width: "100%",
    padding: 12,
  },
  btn: {
    backgroundColor: "rgba(16, 118, 219, 0.47)",
    padding: 7,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default Login;
