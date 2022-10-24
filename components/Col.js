import {View, Image} from 'react-native'

export default function Col(props){
    // const images=require()
    return(
        <Image source={require('../assets/images/jesus1.png')} style={props.style}></Image>
        // <Image source={path} style={props.style}></Image>
    )
}