import {Image, Text, View, Button} from 'react-native'
import { ToastAndroid } from 'react-native';
import styles from '../styles';

export default function SetWallpaperScreen(props){
    // ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
    return(
        <View>
            <Image source={require('../assets/images/jesus1.png')} style={styles.wallpaper}></Image>
            <Button
                style={styles.button}
                title='Set Wallpaper'
                onPress={() => navigation.navigate('Set Wallpaper', { imageSource:'../assets/images/jesus1.png' })}
            />
        </View>
    )
}