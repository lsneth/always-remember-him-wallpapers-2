import {View} from 'react-native'
import Row from './Row.js';
import imageData from '../images.js';

export default function Grid(){
    // const rows=imageData.map(imageData=> <Row imageData={imageData}/>)
    return(
        <View>
            <Row/>
        </View>
    );
}