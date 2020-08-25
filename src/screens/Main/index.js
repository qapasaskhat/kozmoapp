import React, {Fragment} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Switch from '../../components/Switch';
import Profile from '../../components/Profile';
import Search from '../../components/Search';
import Locale from '../../components/Location';
import Menu from '../../components/Menu';
import MapView, {Marker, Callout} from 'react-native-maps';
import ItemMarker from '../../components/ItemCard';
import Coach from '../../components/CoachCard';
import Swiper from '../../components/Swiper';
import {basket} from '../../assets/icons';
import SearchInput from '../../components/SearchInput';
import Geolocation from '@react-native-community/geolocation';
import Modal, {ModalContent, ModalTitle} from 'react-native-modals';

const {height, width} = Dimensions.get('screen');

const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dadada',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c9c9c9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
];
const SportCard = () => {
  return (
    <View
      style={{
        width: 200,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 11,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: '#fff',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={basket}
          style={{width: 20, height: 20, resizeMode: 'contain'}}
        />
        <Text style={{fontSize: 10}}>7/10</Text>
      </View>
      <View>
        <Text>Баскетбол</Text>
        <Text>2000 т</Text>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Text>08:00</Text>
        <Text style={{fontSize: 8, fontWeight: 'bold'}}>08:00</Text>
      </View>
    </View>
  );
};
const Sport = () => {
  return (
    <View
      style={{
        width: 54,
        height: 54,
        borderRadius: 30,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={basket}
        style={{width: 24, height: 24, resizeMode: 'contain'}}
      />
    </View>
  );
};
const CreateTraining = () => (
  <TouchableOpacity
    style={{
      position: 'absolute',
      //paddingVertical: 12,
      paddingHorizontal: 24,
      backgroundColor: '#242424',
      borderRadius: 37,
      bottom: 15,
      left: 10,
      height: '5%',
      justifyContent: 'center'
    }}>
    <Text
      style={{
        fontSize: 11,
        fontWeight: '600',
        color: '#fff',
      }}>
      Запросить тренировку
    </Text>
  </TouchableOpacity>
);
class Main extends React.Component {
  state = {
    show: true,
    check: false,
    coordinate: {
      latitude: 0,
      longitude: 0,
    },
    latitude: 0,
    longitude: 0,
    load: false,
    bottomModalAndTitle: false,
  };
  componentDidMount = () => {
    Geolocation.getCurrentPosition((info) => {
      this.setState({
        load: true,
      });
      console.log(info);
      this.setState({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      });
      this.setState({
        load: false,
      });
    });
  };
  onPressMarker = (e) => {
    this.setState({
      show: false,
    });
  };

  render() {
    const {latitude, longitude, load, show, bottomModalAndTitle} = this.state;
    let myMap;
    return (
      <>
        <View style={StyleSheet.absoluteFillObject}>
          {load === false && (
            <MapView
              provider="google"
              ref={(ref) => (myMap = ref)}
              initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              style={[StyleSheet.absoluteFillObject,{}]}
              customMapStyle={mapStyle}>
              <Marker.Animated
                coordinate={{
                  latitude: latitude,
                  longitude: longitude,
                }}
                anchor={{x: 0, y: 1}}
                style={{flexDirection: 'row', alignItems: 'center'}}
                key={`marker + ${Math.random()}`}
                onPress={(e) => {
                  //this._panel.show();
                  myMap.fitToCoordinates(
                    [{latitude: latitude, longitude: longitude}],
                    {
                      animated: true,
                    },
                  );
                  this.setState({
                    show: false,
                    bottomModalAndTitle: true,
                  });
                }}>
                <ItemMarker />
                {show ? <SportCard /> : <Sport />}
              </Marker.Animated>
            </MapView>
          )}
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
            //swipeDirection={['up','down']} // can be string or an array
            //swipeThreshold={200} // default 100
            modalTitle={<Text style={{textAlign:'center'}}>close</Text>}>
            <ModalContent
              style={{
                flex: 1,
                backgroundColor: '#fff',
              }}>
              {/* <SearchInput /> */}
              <Swiper
                check={this.state.check}
                button={() => this.setState({check: !this.state.check})}
              />
            </ModalContent>
          </Modal.BottomModal>

          {this.state.show && (
            <Profile
              onPress={() => {
                this.props.navigation.navigate('Profile');
              }}
            />
          )}
          {this.state.show && (
            <Search
              searchPress={() => {
                alert('search');
              }}
            />
          )}
          <CreateTraining />
          {this.state.show && <Locale />}
          {this.state.show && <Menu />}
          {this.state.show && (
            <Switch text={'Групповые'} text_2={'Индивидуальные'} />
          )}
        </View>
      </>
    );
  }
}

export default Main;
