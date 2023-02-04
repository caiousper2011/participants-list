import { styles } from './styles'
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useState } from 'react';
import { Participant } from '../../components/Participant';

const Home = () => {
    const [participants, setParticipants] = useState<string[]>([])
    const [participant, setParticipant] = useState('')

    const handleAddParticipant = () => {
        if (participants.includes(participant)) {
            Alert.alert("Atenção", `O participante ${participant} já existe!`)
            return
        }

        setParticipants(oldParticipants => [participant, ...oldParticipants])
        Alert.alert("Sucesso", `Participante ${participant} adicionado com sucesso!`)
        setParticipant('')
    }

    const handleParticipantDelete = (name: string) => {
        const removeParticipant = () => {
            setParticipants(oldParticipant => oldParticipant.filter(participantName => participantName !== name))
            Alert.alert("Sucesso", `Participante ${name} removido com sucesso!`)
        }

        Alert.alert("Remover", `Deseja remover o participante ${name}?`,
            [
                { text: 'Sim', onPress: removeParticipant },
                { text: 'Não', style: 'cancel' }
            ]
        )


    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nome do Evento</Text>
            <Text style={styles.subtitle}>Sexta, 3 de Fevereiro de 2023</Text>
            <View style={styles.form}>
                <TextInput onChangeText={setParticipant} value={participant} style={styles.input} placeholder="Nome completo" placeholderTextColor="#ddd" />
                <TouchableOpacity style={styles.saveButton} onPress={handleAddParticipant}>
                    <Text style={styles.saveButtonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={participants}
                keyExtractor={(item) => item}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>Não há participantes!</Text>
                )}
                renderItem={
                    ({ item }) => <Participant key={item} name={item} onDelete={handleParticipantDelete} />
                } />

        </View>
    );
}

export default Home;