import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";

import { Button, Text, TextInput } from "react-native-paper";
export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const handleSwitchMode = () => {
    setIsSignUp((prev) => !prev);
  };
  const handleAuth = () => {};
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title} variant="headlineMedium">
          {" "}
          {isSignUp ? "Create Account" : "Welcome Back"}
        </Text>

        <TextInput
          label="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="example@gmail.com"
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Password"
          autoCapitalize="none"
          keyboardType="email-address"
          mode="outlined"
          m
          style={styles.input}
        />
        <Button style={styles.button} mode="contained" onPress={handleAuth}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>
        <Button
          style={styles.switchModeButton}
          mode="text"
          onPress={handleSwitchMode}
        >
          {isSignUp
            ? "Already have an account"
            : "Dont have an account? Sign Up"}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
  switchModeButton: {
    marginTop: 16,
  },
});
