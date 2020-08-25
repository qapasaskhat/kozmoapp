import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import styles from './styles'
import { workout } from '../../assets/icons'

const ProfileCard = ({
    name,
    city,
    progress,

})=>{
    return(
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.nameStyle}>{name}</Text>
                <View style={styles.city}>
                    <Text style={styles.cityStyle}>{city}</Text>
                </View>
                
            </View>
            <View style={styles.right}>
                <Text style={styles.progress}>{progress}%</Text>
                <Text>Достигнуто</Text>
                <Text> </Text>
                <View style={{flexDirection: 'row'}}>
                    <Text>3/12</Text>
                    <Image source={workout} style={styles.icon} />
                </View>
            </View>
        </View>
    )
}
export default ProfileCard