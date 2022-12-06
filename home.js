import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './styling';

function Home() {
    return (
        <>
            <View style={[styles.bgInfo, styles.h100, styles.flexCenter, styles.p3]}>
                <View style={[styles.w100, styles.my3]}>
                    <Text style={[styles.textWhite, styles.fs1, styles.textCenter]}>
                        Login
                    </Text>
                </View>
                <View style={[styles.w100, styles.my3]}>
                    <TextInput
                        placeholder="Email"
                        style={[styles.input, styles._light]}
                    />
                </View>
                <View style={[styles.w100, styles.my3]}>
                    <TextInput placeholder="Password" style={styles.input} />
                </View>
                <View style={[styles.w100, styles.m2]}>
                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.textDanger, styles.textCenter}>Login</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </>
    );
}
export default Home;
