import { useState } from 'react';
import { TextInput, View, TouchableOpacity, Text, Alert } from 'react-native';
import { styles } from '../MyStyle';
import { FirebaseAuth } from '../config/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignInScreen = ({ navigation }) => {

    const [userObject, setUserObject] = useState({
        email: '',
        password: '',
        error: ''
    });

    async function signIn() {
        if (userObject.email === '' || userObject.password === '') {
            setUserObject({
                ...userObject,
                error: 'Email and Password are mandatory!'
            })
            return
        }

        try {
            await signInWithEmailAndPassword(FirebaseAuth, userObject.email, userObject.password)
                .then((result) => {
                    Alert.alert("SignIn Successful!", `Welcome ${result.user.email}`)
                })
        } catch (error) {
            setUserObject({
                ...userObject,
                error: "Invalid email or password!"
            })
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputStyle}
                value={userObject.email}
                onChangeText={(text) => setUserObject({
                    ...userObject,
                    email: text, error: ''
                })}
                placeholder='Enter email'
                placeholderTextColor='#8395a7'
                keyboardType='email-address'
                autoCorrect={false}
                autoCapitalize='none' />

            <TextInput
                style={styles.inputStyle}
                value={userObject.password}
                onChangeText={(text) => setUserObject({
                    ...userObject,
                    password: text, error: ''
                })}
                placeholder='Enter password'
                placeholderTextColor='#8395a7'
                secureTextEntry={true} />

            {
                !!userObject.error &&
                <Text style={styles.errorText}>{userObject.error}</Text>
            }

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={signIn}
            >
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <View style={styles.authSwitchContainer}>
                <View style={styles.authSwitchLine} />
                <Text style={styles.authSwitchText}>OR</Text>
                <View style={styles.authSwitchLine} />
            </View>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                    navigation.navigate("SignUpScreen")
                }}
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignInScreen;
