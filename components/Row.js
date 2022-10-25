import {Image, View} from 'react-native'
import styles from '../styles.js'

export default function Row(){
    // for dynamic rendering
    // const images=imageData.map(imageData => <Col path={imageData.path} style={styles.image} key={imageData.key}/>)

    return(
        null
        // <View>
        //     <Row>
        //         <Col>
        //             {/* for dynamic rendering, hardcoded for now */}
        //             {/* <Image source={require([`../assets/images/jesus${1}.png`])} style={styles.image} ></Image> */}
        //             <Image source={require('../assets/images/jesus1.png')} style={styles.image}
        //             onPress={() =>navigation.navigate('SetWallpaperScreen', { imageSource: '../assets/images/jesus1.png' })}></Image>
        //         </Col>
        //         <Col>
        //             <Image source={require('../assets/images/jesus2.png')} style={styles.image}></Image>
        //         </Col>
        //         <Col>
        //             <Image source={require('../assets/images/jesus3.png')} style={styles.image}></Image>
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col>
        //             <Image source={require('../assets/images/jesus4.png')} style={styles.image}></Image>
        //         </Col>
        //         <Col>
        //             <Image source={require('../assets/images/jesus5.png')} style={styles.image}></Image>
        //         </Col>
        //         <Col>
        //             <Image source={require('../assets/images/jesus6.png')} style={styles.image}></Image>
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col>
        //             <Image source={require('../assets/images/jesus7.png')} style={styles.image}></Image>
        //         </Col>
        //         <Col>
        //             <Image source={require('../assets/images/jesus8.png')} style={styles.image}></Image>
        //         </Col>
        //         <Col>
        //             <Image source={require('../assets/images/jesus9.png')} style={styles.image}></Image>
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col>
        //             <Image source={require('../assets/images/jesus10.png')} style={styles.image}></Image>
        //         </Col>
        //     </Row>
        // </View>
    );
}