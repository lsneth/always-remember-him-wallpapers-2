import {View, Image, ScrollView, Button, TouchableOpacity} from 'react-native'
import styles from '../styles.js'
import SetWallpaperScreen from './SetWallpaperScreen'
import ImageButton from './ImageButton.js'

export default function Grid(props){
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
                    <ImageButton image={require('../assets/images/jesus1.png')} navigation={props.navigation}/>
                </Col>
                <Col>
                    <ImageButton image={require('../assets/images/jesus2.png')} navigation={props.navigation}/>
                </Col>
                <Col>
                    <ImageButton image={require('../assets/images/jesus3.png')} navigation={props.navigation}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ImageButton image={require('../assets/images/jesus4.png')} navigation={props.navigation}/>
                </Col>
                <Col>
                    <ImageButton image={require('../assets/images/jesus5.png')} navigation={props.navigation}/>
                </Col>
                <Col>
                    <ImageButton image={require('../assets/images/jesus6.png')} navigation={props.navigation}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ImageButton image={require('../assets/images/jesus7.png')} navigation={props.navigation}/>
                </Col>
                <Col>
                    <ImageButton image={require('../assets/images/jesus8.png')} navigation={props.navigation}/>
                </Col>
                <Col>
                    <ImageButton image={require('../assets/images/jesus9.png')} navigation={props.navigation}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ImageButton image={require('../assets/images/jesus10.png')} navigation={props.navigation}/>
                </Col>
            </Row>
        </ScrollView>
    );
}