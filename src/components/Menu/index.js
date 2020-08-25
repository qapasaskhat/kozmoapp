import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from '../Location/styles'
import { menu } from '../../assets/icons/index'

const Menu = ({menupress})=>{
    return(
        <TouchableOpacity style={[styles.container,{bottom: '10%'}]} onPress={menupress}>
            <Image source={menu} style={styles.icon} />
        </TouchableOpacity>
    )
}
export default Menu