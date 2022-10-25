import {Image, Text} from 'react-native'

export default function SetWallpaperScreen(props){
    return(
        <View>
            <Text>Wallpaper Screen</Text>
            <Image source={props.imageSource}></Image>
        </View>
    )
}