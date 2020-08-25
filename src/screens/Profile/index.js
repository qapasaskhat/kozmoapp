import React from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {avatar} from '../../assets/img';
import ProfileCard from '../../components/ProfileCard';
import { basket } from '../../assets/icons'
import Header from '../../components/Header'

const Balance = () => (
  <View style={styles.balans}>
    <View style={styles.left}>
      <Text style={styles.text}>15 000</Text>
      <Text style={styles.text_2}>Мой баланс</Text>
    </View>
    <View style={styles.right}>
      <TouchableOpacity style={styles.btn} onPress={()=>{}}>
        <Text>
          Пополнить <Text style={styles.plus}>+</Text>
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Card =()=>(
  <View style={{
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#FFF529',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10%',
    marginBottom: '5%'
  }}>
    <Image source={basket} style={{
      width: 30,
      height: 30,
      resizeMode: 'contain'
    }} />
  </View>
)

const ProfileCardItem = ()=>(
  <>
  <ProfileCard
            name={'Рахимжанова \nОрнелла '}
            city={'Алматы'}
            progress={25}
          />
          <View style={{
            marginHorizontal: '10%',
            marginTop: '5%'
          }}>
            <View style={{flexDirection: 'row'}}>
              {[{},{},{}].map(item=>(<Card />))}
            </View>
          </View>
          <Balance />
          <View style={{
            borderBottomColor: '#D4D4D4',
            borderBottomWidth: 1,
            paddingLeft: '10%',
            height: '9%',
            justifyContent:'center'
          }}>
            <Text style={{
              fontSize: 13,
              color: '#1F1F1F',
              fontWeight: '400',
              fontFamily: 'SFProDisplay-Regular'

            }}>? FAQ</Text>
          </View>
          <View style={{
            borderBottomColor: '#D4D4D4',
            borderBottomWidth: 1,
            paddingLeft: '10%',
            height: '9%',
            justifyContent:'center'
          }}>
            <Text style={{
              fontSize: 13,
              color: '#1F1F1F',
              fontWeight: '400',
              fontFamily: 'SFProDisplay-Regular'

            }}>! Пользовательское соглашение</Text>
          </View>
          <TouchableOpacity style={{
            marginHorizontal: '10%',
            paddingVertical: '5%',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#242424',
            borderRadius: 31,
            marginTop:'5%'
          }}>
            <Text>Напишите нам</Text>
          </TouchableOpacity>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: '10%',
            marginTop: '5%',
            
          }}>{
            [1,2,3,4].map(item=>{
              return(
                <View style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width:50,
                  height: 50,
                  borderRadius: 30,
                  borderWidth: 1
                }}>
                  <Text>insta</Text>
                </View>
              )
            })
          }
          </View>
  </>
)

class Profile extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={{position: 'absolute',width: '100%',zIndex:111}}>
            <Header right />
          </View>
          <Image source={avatar} style={styles.imgStyle} />
          <View style={{
            marginHorizontal: '10%',
            backgroundColor: '#FFF529',
            borderRadius: 11,
            paddingVertical: 20,
            marginTop:-20
            }}>
            <Text>Пополнение баланса</Text>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20
            }}>
              <View>
                <Text>text</Text>
                <Text>text</Text>
              </View>
              <View style={{
                paddingVertical: 5,
                backgroundColor: '#fff',
              }}>
                <Text>text</Text>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default Profile;
