
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

function MyanmarLanguage({ navigation }: any) {
    return (
        <View style={{ flex: 1, backgroundColor: "pink", justifyContent: "center" }}>

            <View style={{ flex: 10, justifyContent: "center", alignItems: "center" }}>

                <Text style={{ textAlign: 'center', fontSize: 20, color: "grey" }}>
                    This is MyanmarLanguage Page!
                </Text>
            </View>
        </View>
    );
}

export default MyanmarLanguage;
