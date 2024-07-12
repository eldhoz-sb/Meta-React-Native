import * as React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { validateEmail } from "../utils";

const WelcomeScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const isEmailValid = validateEmail(email);
  // Add welcome screen code here.
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <Image
            source={require("../assets/little-lemon-logo-grey.png")}
            style={styles.image}
          />
          <Text style={styles.regularText}>
            Subscribe to our newsletter for our latest delicious recipes!
          </Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholder={"Type your email"}
          ></TextInput>
          <Pressable
            style={[styles.button, !isEmailValid && styles.buttonDisabled]}
            onPress={() => alert("Thanks for subscribing, stay tuned!")}
            disabled={!isEmailValid}
          >
            <Text style={styles.buttonText}>Subscribe</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  regularText: {
    fontSize: 20,
    textAlign: "center",
    width: "80%",
  },
  image: {
    resizeMode: "contain",
    width: 100,
    height: 100,
    margin: 50,
  },
  inputBox: {
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    width: "80%",
    margin: 20,
  },
  button: {
    backgroundColor: "#3E524B",
    width: "80%",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
    padding: 5,
    borderRadius: 8,
  },
  buttonDisabled: {
    backgroundColor: "#A9A9A9",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
