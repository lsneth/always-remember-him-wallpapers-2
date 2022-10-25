import {Image, Text, View, Button} from 'react-native'
import styles from '../styles';
import WallPaperManager from 'react-native-wallpaper-manager';

export default function SetWallpaperScreen({navigation, route}){
    return(
        <View>
            <Image source={route.params.image} style={styles.wallpaper}></Image>
            <Button
                style={styles.button}
                title='Set as Wallpaper'
                onPress={() => WallPaperManager.setWallPaper({uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg'}, (res)=> console.log(res))}
            />
        </View>
    )
}