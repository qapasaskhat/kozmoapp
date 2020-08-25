import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from './styles'
import { location } from '../../assets/icons/index'

const Location = ()=>{
    return(
        <TouchableOpacity style={styles.container}>
            <Image source={location} style={styles.icon} />
        </TouchableOpacity>
    )
}
export default Location