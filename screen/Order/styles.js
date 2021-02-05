import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingHorizontal: 16,
    },
    text: {
        fontSize: 17,
        maxWidth: 250
    },
    row: {
        height: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,.1)',
    },
    total: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    footer: {
        width: '100%',
        marginTop: 70
    },
    button: {
        backgroundColor: '#000',
        marginHorizontal: 16,
        height: 40,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    }
})

export default styles;