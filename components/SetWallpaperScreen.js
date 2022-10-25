import {Image, Text, View, Button} from 'react-native'
import { ToastAndroid } from 'react-native';
import styles from '../styles';

export default function SetWallpaperScreen(props){
    // ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
    return(
        <View>
            <Image source={props.imageSource} style={styles.wallpaper}></Image>
            <Button
                style={styles.button}
                title='Set Wallpaper'
                onPress={() => null}
            />
        </View>
    )
}