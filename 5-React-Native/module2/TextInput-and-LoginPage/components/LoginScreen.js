import { useState } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function LoginScreen() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput
        style={styles.inputBox}
        placeholder={"Email"}
        value={email}
        onChange={onChangeEmail}
        keyboardType={"email-address"}
      />
      <TextInput
        style={styles.inputBox}
        placeholder={"Password"}
        value={password}
        onChange={onChangePassword}
        secureTextEntry={true}
        keyboardType={"default"}
        onFocus={()=> {alert("Password is focused")}}
        onBlur={() => {alert("Password is now unselected")}}
      />
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
    padding: 5,
    margin: 10,
  },
});
