import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    rewardsbutton: {
        backgroundColor: '#ff9e4d',
        padding: 20,
        borderRadius: 10,
        margin: 16,
        width: width-50
    },
    paymentscreen: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    confirmButton: { backgroundColor: '#ff9e4d', padding: 16, borderRadius: 8, marginTop: 16, marginBottom: 50 },
});
