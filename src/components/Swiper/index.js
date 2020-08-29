import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
import {share, right, checkicon} from '../../assets/icons/index';
import {img_ava} from '../../assets/img/index';

const ButtonBox = ({onPressBox, check}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
      }}>
      <View
        style={{
          width: 46,
          height: 46,
          borderRadius: 40,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <TouchableOpacity
        onPress={onPressBox}
        style={{
          width: 240,
          height: 46,
          backgroundColor: '#FFF529',
          borderRadius: 38,
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text>{check ? 'Отменить тренировку' : 'Присоедениться'}</Text>
        {check === false && <Text>2000 T</Text>}
      </TouchableOpacity>
    </View>
  );
};
const Slider1 = ({check, button}) => {
  return (
    <View style={styles.slide1}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          {check && <Image source={checkicon} style={styles.check} />}
          <Text style={styles.title}>Велотренировка</Text>
          <Image
            source={share}
            style={{
              marginLeft: 12,
              width: 20,
              height: 20,
              resizeMode: 'contain',
            }}
          />
        </View>
        <Text style={{fontSize: 20, color: '#737373'}}>08:00</Text>
      </View>
      <View style={styles.userCard}>
        <Image source={img_ava} style={styles.img_ava} />
        <View style={{paddingLeft: 24, justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 11,
              fontWeight: 'bold',
              color: '#242424',
            }}>
            7.0
          </Text>
          <Text style={{fontSize: 13, color: '#262626'}}>Марина Мамедова</Text>
          <Text style={{fontSize: 13, color: '#8A8A8A'}}>
            КМС по легкой атлетике
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 8,
        }}>
        <Text
          style={{
            fontSize: 13,
            color: '#262626',
            alignItems: 'center',
          }}>
          ул.Габдуллина, д. 132, подъезд 2
        </Text>
        <TouchableOpacity 
        onPress={()=>{alert('hheelloo')}}
          style={{
            backgroundColor: '#eee',
            width: 40,
            height: 40,
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={right}
            style={{
              width: 16,
              height: 16,
              resizeMode: 'contain',
              tintColor: '#000',
            }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            fontSize: 10,
            color: '#242424',
            fontWeight: 'bold',
          }}>
          Снаряжение тренера
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: 16,
            marginTop: 5,
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 11,
              backgroundColor: '#eee',
              marginLeft: 3,
            }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 10,
            color: '#242424',
            fontWeight: 'bold',
          }}>
          С собой иметь
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: 5,
            marginBottom: 16,
          }}>
          <View style={styles.icon_view} />
          <View style={styles.icon_view} />
        </View>
      </View>
      <ButtonBox onPressBox={button} check={check} />
    </View>
  );
};
const Slider2 = ({check}) => {
  return (
    <View style={styles.slide2}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          {check && <Image source={checkicon} style={styles.check} />}
          <Text style={styles.title}>Велотренировка</Text>
          <Image
            source={share}
            style={{
              marginLeft: 12,
              width: 20,
              height: 20,
              resizeMode: 'contain',
            }}
          />
        </View>
        <Text style={{fontSize: 20, color: '#737373'}}>08:00</Text>
      </View>
      <Text
        style={{
          fontSize: 10,
          fontWeight: 'bold',
          marginTop: 20,
          marginBottom: 10,
        }}>
        Продолжительность
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: '#6FC716',
        }}>
        1ч 40 минут
      </Text>
      <Text
        style={{
          fontSize: 10,
          fontWeight: 'bold',
          marginTop: 20,
          marginBottom: 10,
        }}>
        Описание тренировки
      </Text>
      <Text style={{fontSize: 13, color: '#929292'}}>
        Cycle – идеальная вело-тренировка для всех, кто хочет скорректировать
        вес тела и поработать над кардио и мышечной выносливостью. Урок наполнен
        энергичной музыкой, сменяющейся таким образом, что Вы будете заряжаться
        хорошим настроением на протяжении всей тренировки.
      </Text>
      <Text
        style={{
          fontSize: 10,
          fontWeight: 'bold',
          marginTop: 20,
          marginBottom: 10,
        }}>
        Дополнительное снаряжение
      </Text>
      <Text style={{fontSize: 13, color: '#929292'}}>
        По желанию для дополнительной нагрузки можно использовать утяжелители
        для ног и спины
      </Text>

      <ButtonBox />
    </View>
  );
};
const Slider3 = ({check}) => {
  return (
    <View style={styles.slide3}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {check && <Image source={checkicon} style={styles.check} />}
        <Text style={styles.title}>Велотренировка</Text>
        <View style={styles.reviewBtn}>
          <Text>Оставить отзыв</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginTop: 10,
        }}>
        <View
          style={{
            width: 74,
            height: 74,
            borderRadius: 6,
            backgroundColor: '#eee',
            marginRight: 2,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 10,
          fontWeight: 'bold',
          marginTop: 20,
          marginBottom: 10,
        }}>
        Отзывы 16
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 40,
            backgroundColor: '#eee',
            marginRight: 8,
          }}
        />
        <View>
          <Text style={styles.reviewTitle}>Мирас Каирлеевич</Text>
          <Text style={styles.reviewText}>
            Внимательное отношение к клиенту, сбалансированная тренировка, легко
            найти общий язык, спасибо!
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginTop: 10,
        }}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 40,
            backgroundColor: '#eee',
            marginRight: 8,
          }}
        />
        <View>
          <Text style={styles.reviewTitle}>Мирас Каирлеевич</Text>
          <Text style={styles.reviewText}>
            Внимательное отношение к клиенту, сбалансированная тренировка, легко
            найти общий язык, спасибо!
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 150,
          opacity: 0.5,
          backgroundColor: '#fff',
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
        }}
      />
      <ButtonBox />
    </View>
  );
};

class Swip extends React.Component {
  state = {
    auto: true,
  };
  render() {
    const {check, button} = this.props;
    return (
      <Swiper
        style={styles.wrapper}
        removeClippedSubviews={false}
        //autoplay={this.state.auto} onIndexChanged={(index)=>{index===0&& this.setState({auto: false})}}
      >
        <Slider1 check={check} button={button} />
        <Slider2 check={check} />
        <Slider3 check={check} />
      </Swiper>
    );
  }
}

// const Swip = ({
//     check,
//     button
// }) => {
//   return (

//   );
// };

export default Swip;
