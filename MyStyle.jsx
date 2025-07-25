import { StyleSheet } from 'react-native';

const COLORS = {
  primary: '#007BFF',
  white: '#FFFFFF',
  lightGray: '#f0f0f0',
  darkText: '#333333',
  lightText: '#777777',
  danger: '#DC3545',
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray,
        padding: 15,
    },
    buttonStyle: {
        marginVertical: 10,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        fontSize: 18,
        color: COLORS.white,
        fontWeight: "bold",
    },
    inputStyle: {
        fontSize: 16,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        height: 50,
        marginVertical: 8,
        width: '100%',
        backgroundColor: COLORS.white,
    },
    signOutButton: {
        padding: 8,
    },
    signOutButtonText: {
        fontSize: 16,
        color: COLORS.primary,
        fontWeight: '600',
    },
    errorText: {
        fontSize: 16,
        color: COLORS.danger,
        textAlign: 'center',
        marginBottom: 10,
    },
    authSwitchContainer: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    authSwitchLine: {
        backgroundColor: '#ccc',
        height: 1,
        flex: 1,
    },
    authSwitchText: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.lightText,
    }
});
