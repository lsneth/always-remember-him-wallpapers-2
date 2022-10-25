import {View, Image, ScrollView, Button, TouchableOpacity} from 'react-native'
import styles from '../styles.js'
import SetWallpaperScreen from './SetWallpaperScreen'

export default function Grid({navigation}){
    // const rows=imageData.map(imageData=> <Row imageData={imageData}/>)
    const Row = ({children}) => (
        <View style={styles.row}>{children}</View>
    )
    const Col = ({children}) => {
        return  (
        <View style={styles.col}>{children}</View>
        )
    }

    return(
        <ScrollView style={styles.grid}>
            <Row>
                <Col>
                    {/* for dynamic rendering, hardcoded for now */}
                    {/* <Image source={require([`../assets/images/jesus${1}.png`])} style={styles.image} ></Image> */}
                    <TouchableOpacity onPress={() =>navigation.navigate('Set Wallpaper', { imageSource: '../assets/images/jesus1.png' })}>
                        <Image
                            source={require('../assets/images/jesus1.png')}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                </Col>
                <Col>
                    <Image source={require('../assets/images/jesus2.png')} style={styles.image}></Image>
                </Col>
                <Col>
                    <Image source={require('../assets/images/jesus3.png')} style={styles.image}></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image source={require('../assets/images/jesus4.png')} style={styles.image}></Image>
                </Col>
                <Col>
                    <Image source={require('../assets/images/jesus5.png')} style={styles.image}></Image>
                </Col>
                <Col>
                    <Image source={require('../assets/images/jesus6.png')} style={styles.image}></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image source={require('../assets/images/jesus7.png')} style={styles.image}></Image>
                </Col>
                <Col>
                    <Image source={require('../assets/images/jesus8.png')} style={styles.image}></Image>
                </Col>
                <Col>
                    <Image source={require('../assets/images/jesus9.png')} style={styles.image}></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image source={require('../assets/images/jesus10.png')} style={styles.image}></Image>
                </Col>
            </Row>
        </ScrollView>
    );
}