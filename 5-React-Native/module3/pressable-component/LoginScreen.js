import React, { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  View,
} from "react-native";

export default function LoginScreen() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [loggedIn, onLogin] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {!loggedIn && (
        <View>
          <Text style={styles.regularText}>Login to continue </Text>

          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={"email"}
            keyboardType={"email-address"}
          />
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={onChangePassword}
            placeholder={"password"}
            keyboardType={"default"}
            secureTextEntry={true}
          />
          <Pressable
            style={styles.pressableButton}
            onPress={() => {
              onLogin(!loggedIn);
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
      )}
      {loggedIn && (
        <View>
          <Text style={styles.regularText}>You are logged in!</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
  pressableButton: {
    paddingHorizontal: 50,
    backgroundColor: "#EE9972",
    borderRadius: 50,
    paddingVertical: 10,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
});
