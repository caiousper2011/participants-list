import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type ParticipantProps = {
    name: string;
    onDelete: (name: string) => void
}

export const Participant = ({ name, onDelete }: ParticipantProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity style={styles.saveButton} onPress={() => onDelete(name)}>
                <Text style={styles.saveButtonText}>Deletar</Text>
            </TouchableOpacity>
        </View>
    )
}