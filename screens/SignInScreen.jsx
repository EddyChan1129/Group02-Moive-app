import { useState } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles, COLORS } from "../MyStyle";
import { FirebaseAuth } from "../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignInScreen = ({ navigation }) => {
  const [userObject, setUserObject] = useState({
    email: "",
    password: "",
    error: "",
  });

  async function signIn() {
    if (userObject.email === "" || userObject.password === "") {
      setUserObject({
        ...userObject,
        error: "Email and Password are mandatory!",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(
        FirebaseAuth,
        userObject.email,
        userObject.password,
      ).then((result) => {
        Alert.alert("SignIn Successful!", `Welcome ${result.user.email}`);
      });
    } catch (error) {
      setUserObject({
        ...userObject,
        error: "Invalid email or password!",
      });
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>
      <TextInput
        style={styles.inputStyle}
        value={userObject.email}
        onChangeText={(text) =>
          setUserObject({
            ...userObject,
            email: text,
            error: "",
          })
        }
        placeholder="Enter email"
        placeholderTextColor={COLORS.subtleText}
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.inputStyle}
        value={userObject.password}
        onChangeText={(text) =>
          setUserObject({
            ...userObject,
            password: text,
            error: "",
          })
        }
        placeholder="Enter password"
        placeholderTextColor={COLORS.subtleText}
        secureTextEntry={true}
      />

      {!!userObject.error && (
        <Text style={styles.errorText}>{userObject.error}</Text>
      )}

      <TouchableOpacity style={styles.buttonStyle} onPress={signIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.authSwitchContainer}>
        <Text style={styles.authSwitchText}>Don't have an account?</Text>
        <TouchableOpacity
          style={styles.authSwitchButton}
          onPress={() => {
            navigation.navigate("SignUpScreen");
          }}
        >
          <Text style={styles.authSwitchButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
