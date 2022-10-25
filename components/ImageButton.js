import { TouchableOpacity, Image } from "react-native"
import styles from "../styles"

export default function ImageButton(props){
    return(
        <TouchableOpacity onPress={() => props.navigation.navigate('Set Wallpaper', { image: props.image })}>
            <Image source={props.image} style={styles.image}/>
        </TouchableOpacity>
    )
}