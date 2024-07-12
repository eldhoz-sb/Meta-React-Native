import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../assets/little-lemon-logo.png")}
          style={styles.image}
        />
        <Text style={styles.regularText}>
          Little Lemon, your lcoal mediterranian Bistro
        </Text>
      </View>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Subscribe')}>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  regularText: {
    fontSize: 20,
    textAlign: "center",
    width: "80%",
    fontWeight:'600',
  },
  image: {
    resizeMode: "contain",
    width: 200,
    height: 200,
    margin: 50,
  },
  button: {
    backgroundColor: "#3E524B",
    width: "80%",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
