import { useState } from 'react';
import { TextInput, View, TouchableOpacity, Text, Alert } from 'react-native';
import { styles } from '../MyStyle';
import { FirebaseAuth } from '../config/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpScreen = () => {

    const [userObject, setUserObject] = useState({
        email: '',
        password: '',
        error: ''
    });

    async function signUp() {
        if (userObject.email === '' || userObject.password === '') {
            setUserObject({
                ...userObject,
                error: 'Email and Password are mandatory!'
            })
            return
        }

        try {
            await createUserWithEmailAndPassword(FirebaseAuth, userObject.email, userObject.password)
                .then((result) => {
                    Alert.alert("User Created Successfully!", `Welcome ${result.user.uid}`)
                })
        } catch (error) {
            setUserObject({
                ...userObject,
                error: "Something went wrong!"
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
                onPress={signUp}
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignUpScreen;

