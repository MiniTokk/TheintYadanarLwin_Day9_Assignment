
import { StatusBar } from 'expo-status-bar';
import react from 'react';
import {
    Button,
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';

function HomeScreen({ navigation }: any) {
    return (
        <View style={{ flex: 1, backgroundColor: "#00ffff", justifyContent: "center" }}>

            <View style={{ flex: 10, justifyContent: "center", alignItems: "center" }}>

                <Text style={{ textAlign: 'center', fontSize: 20, color: "grey" }}>
                    This is HomeScreen Page!
                </Text>
            </View>
        </View>
    );
}

export default HomeScreen;
