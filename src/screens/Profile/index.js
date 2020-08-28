import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {avatar} from '../../assets/img';
import ProfileCard from '../../components/ProfileCard';
import {basket, next} from '../../assets/icons';
import Header from '../../components/Header';
import Modal, {ModalContent, ModalTitle} from 'react-native-modals';
import {YellowBtn} from '../../components/Button';

const Balance = ({payment}) => (
  <View style={styles.balans}>
    <View style={styles.left}>
      <Text style={styles.text}>15 000</Text>
      <Text style={styles.text_2}>Мой баланс</Text>
    </View>
    <View style={styles.right}>
      <TouchableOpacity style={styles.btn} onPress={payment}>
        <Text>
          Пополнить <Text style={styles.plus}>+</Text>
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Card = () => (
  <View
    style={{
      width: 50,
      height: 50,
      borderRadius: 30,
      backgroundColor: '#FFF529',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '10%',
      marginBottom: '5%',
    }}>
    <Image
      source={basket}
      style={{
        width: 30,
        height: 30,
        resizeMode: 'contain',
      }}
    />
  </View>
);

const ProfileCardItem = ({onPress,paymentPress,faqPress}) => (
  <>
    <ProfileCard
      name={'Рахимжанова \nОрнелла '}
      city={'Алматы'}
      progress={25}
    />
    <View
      style={{
        marginHorizontal: '10%',
        marginTop: '5%',
      }}>
      <View style={{flexDirection: 'row'}}>
        {[{}, {}, {},{}].map((item) => (
          <Card />
        ))}
      </View>
    </View>
    <Balance payment={paymentPress} />
    <TouchableOpacity
    onPress={faqPress}
      style={{
        borderBottomColor: '#D4D4D4',
        borderBottomWidth: 1,
        paddingLeft: '10%',
        height: '7%',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 13,
          color: '#1F1F1F',
          fontWeight: '400',
          fontFamily: 'SFProDisplay-Regular',
        }}>
        ? FAQ
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        borderBottomColor: '#D4D4D4',
        borderBottomWidth: 1,
        paddingLeft: '10%',
        height: '7%',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 13,
          color: '#1F1F1F',
          fontWeight: '400',
          fontFamily: 'SFProDisplay-Regular',
        }}>
        ! Пользовательское соглашение
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginHorizontal: '10%',
        paddingVertical: '3%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#242424',
        borderRadius: 31,
        marginTop: '5%',
      }}>
      <Text>Напишите нам</Text>
      <Image
        source={next}
        style={{
          width: 20,
          height: 16,
          resizeMode: 'contain',
          position: 'absolute',
          right: 30,
        }}
      />
    </TouchableOpacity>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '10%',
        marginTop: '5%',
      }}>
      {[1, 2, 3, 4].map((item) => {
        return (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 50,
              height: 50,
              borderRadius: 30,
              borderWidth: 1,
            }}>
            <Text>insta</Text>
          </View>
        );
      })}
    </View>
  </>
);

class Profile extends React.Component {
  state = {
    bottomModalAndTitle: false,
  };
  render() {
    const {navigation} = this.props;
    return (
      <>
        <View style={styles.container}>
          <View
            style={{
              position: 'absolute',
              width: '100%',
              zIndex: 111,
              top: '5%',
            }}>
            <Header
              right
              back={()=>{
                navigation.goBack()
              }}
              edit={() => {
                navigation.navigate('ProfileEdit');
              }}
            />
          </View>
          <Image source={avatar} style={styles.imgStyle} />
          <ProfileCardItem 
            onPress={()=>{this.setState({bottomModalAndTitle: true})}}
            paymentPress={()=>{navigation.navigate('UserCard')}}
            faqPress={()=>{navigation.navigate('UserFaq')}}
            />
          <Modal.BottomModal
            visible={this.state.bottomModalAndTitle}
            onTouchOutside={() =>
              this.setState({bottomModalAndTitle: false, show: true})
            }
            onSwipeOut={() =>
              this.setState({bottomModalAndTitle: false, show: true})
            }
            width={1}
            height={0.7}
            modalTitle={
              <View style={{
                width:50,
                height:6,
                backgroundColor: '#dadada',
                alignSelf:'center',
                borderRadius: 3,
                marginBottom: 20,
                marginTop: 10
              }} />
            }>
            <ModalContent
              style={{
                flex: 1,
                backgroundColor: '#fff',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  fontFamily: 'SFProDisplay-Regular',
                  color: '#1F1F1F',
                  margin: 10
                }}>
                Напишите нам
              </Text>
              <TextInput 
                placeholder="Ваш текст"
                multiline
                style={{
                  margin: '10%',
                borderWidth: 1,
                borderRadius: 11,
                borderColor: '#D5D5D5',
                height: '50%',
                padding: '5%'
                }} />
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  bottom: 10,
                }}>
                <YellowBtn text="Отправить" />
              </View>
            </ModalContent>
          </Modal.BottomModal>
        </View>
      </>
    );
  }
}

export default Profile;
