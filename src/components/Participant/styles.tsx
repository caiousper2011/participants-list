import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1f1e25',
        borderRadius: 4,
        flexDirection: 'row',
        marginTop: 16,
        alignItems: 'center'
    },
    name: {
        flex: 1,
        fontSize: 16,
        color: "#fff",
        marginLeft: 16
    },
    saveButton: {
        height: 48,
        backgroundColor: '#e23c44',
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 16,
        paddingLeft: 16,
        borderRadius: 4,
        minWidth: 100
    },
    saveButtonText: {
        color: '#fdfcfe',
        fontWeight: "bold",

    },
});
