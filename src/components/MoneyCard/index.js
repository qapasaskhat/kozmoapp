import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const MoneyCard = ({
    params,
    onPress
}) => (
    <View style={{
        width:'100%',
        height: 80,
        backgroundColor: '#FFF529',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: '10%',
        justifyContent: 'space-between'
    }}>
        <View>
            <Text style={{
                fontSize: 20,
                color: '#242424',
                fontFamily: 'SFProDisplay-Regular',
                fontWeight: 'normal',
            }}>+ 15 700 т</Text>
            <Text>Мой баланс</Text>
        </View>
        <TouchableOpacity onPress={onPress} style={{
            paddingHorizontal:10,
            paddingVertical: 10,
            borderWidth: 1,
            borderRadius: 31,
            borderColor: '#D9CF00',
            backgroundColor: '#fff'
        }}>
            <Text style={{
                fontFamily: 'SFProDisplay-Regular',
            }} >Вывести деньги</Text>
        </TouchableOpacity>
    </View>
);

export default MoneyCard;
