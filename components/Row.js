import {Image, View} from 'react-native'
import styles from '../styles.js'
import imageData from '../images.js'
import Col from './Col'

export default function Row(){
    const images=imageData.map(imageData => <Col path={imageData.path} style={styles.image} key={imageData.key}/>)

    // const Row = ({children}) => (
    //     <View style={styles.row}>{children}</View>
    // )
    // const Col = ({children}) => {
    //     return  (
    //     <View style={styles.col}>{children}</View>
    //     )
    // }

    return(
        <View style={styles.row}>
            {/* <Image source={{uri:'https://lh3.googleusercontent.com/pw/AL9nZEU73MDPcejqYtjcUNe7ToEBsCsiSiI68Ydz72w5A4RbvQDivdn_kRubSeXhAt2-42fTujTw_ASXtoxrjOYxKei4U_kafjtl0YkGCNhIEa2bkSBlZU3Dzr1YZ4V-HWpAL6iutxrN8AE-owMKhBnjPOPu_g=w432-h959-no?authuser=0'}} style={styles.image}></Image> */}
            {images}
        </View>
    )
    
    // return(
    //     <View>
    //         <Row>
    //             <Col>
    //                 {/* <Image source={require([`../assets/images/jesus${1}.png`])} style={styles.image} ></Image> */}
    //                 <Image source={require('../assets/images/jesus1.png')} style={styles.image}></Image>
    //             </Col>
    //             <Col>
    //                 <Image source={require('../assets/images/jesus2.png')} style={styles.image}></Image>
    //             </Col>
    //             <Col>
    //                 <Image source={require('../assets/images/jesus3.png')} style={styles.image}></Image>
    //             </Col>
    //         </Row>
    //     </View>
    // );
}