import React, {Fragment} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux'
import Switch from '../../components/Switch';
import Profile from '../../components/Profile';
import Search from '../../components/Search';
import Locale from '../../components/Location';
import Menu from '../../components/Menu';
import MapView, {Marker, Callout} from 'react-native-maps';
import ItemMarker from '../../components/ItemCard';
import Swiper from '../../components/Swiper';
import {basket, main_logo, favorite, workout} from '../../assets/icons';
import SearchInput from '../../components/SearchInput';
import Geolocation from '@react-native-community/geolocation';
import FavoritesClass from './Favorites'
import Workouts from './Workouts' 
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {createBottomTabNavigator} from 'react-navigation-tabs'

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
const CreateTraining = ({onpress}) => (
  <TouchableOpacity
    onPress={onpress}
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
const bs = React.createRef()

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }
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
  }
  renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: '100%',
      }}>
      <Swiper />
    </View>
  );
  renderHeader=()=>(
    <TouchableOpacity onPress={()=>{bs.current.snapTo(2)}} 
      style={{
          width: width,
          backgroundColor:'#fff',
          alignItems: 'center',
          height:40,
          justifyContent: 'center'
          }}>
      <View style={{width:50,height: 5,backgroundColor:'#e1e1e1',borderRadius: 5}} />
    </TouchableOpacity>
  )

  onPressMarker = (e) => {
    this.setState({
      show: false,
    });
  };
   fall = new Animated.Value(1)
  
  render() {
    const {latitude, longitude, load } = this.state;
    let myMap;
    const { workoutView,initial } = this.props
    return (
      <>
        <Animated.View style={[StyleSheet.absoluteFillObject,{
          //opacity: Animated.add(0.1,Animated.multiply(this.fall,1.0))
        }]}>
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
                onPress={(e) => bs.current.snapTo(1)
              }>
                <ItemMarker />
                {/* {show ? <SportCard /> : <Sport />} */}
              </Marker.Animated>
            </MapView>
          )}
          <BottomSheet
            ref={bs}
            snapPoints={['80%','50%',0]}
            initialSnap={2}
            callbackNode={this.fall}
            renderContent={this.renderContent}
             enabledGestureInteraction={true}
             enabledHeaderGestureInteraction={true}
             enabledContentGestureInteraction={false}
             enabledInnerScrolling={true}
             enabledContentTapInteraction={true}
             enabledManualSnapping={false}
             renderHeader={this.renderHeader}
             borderRadius={30}
        />
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
          <CreateTraining onpress={()=>{ this.props.navigation.navigate('RequestWorkout') }} />
          {this.state.show && <Locale />}
          {this.state.show && <Menu />}
          {this.state.show && (
            <Switch text={'Групповые'} text_2={'Индивидуальные'} />
          )}
        </Animated.View>
      </>
    );
  }
}
const MainTabs = createBottomTabNavigator({
  FavoritesClass:{
    screen: FavoritesClass,
    navigationOptions:{
      tabBarOnPress:()=>{
        bs.current.snapTo(1)
      },
      tabBarIcon: ({tintColor})=>
      <Image source={favorite} style={{width:24,height: 24, tintColor: '#fff',resizeMode: 'contain'}} />
    }
  },
  Main: {
    screen: Main,
    navigationOptions:{
      tabBarOnPress:()=>{},
      tabBarIcon: ({tintColor})=>
      <Image source={main_logo} style={{width:24,height: 24, tintColor: '#fff',resizeMode: 'contain'}} />
    }
  },
  Workouts:{
    screen: Workouts,
    navigationOptions:{
      tabBarOnPress:()=>{},
      tabBarIcon: ({tintColor})=>
      <Image source={workout} style={{width:24,height: 24, tintColor: '#fff',resizeMode: 'contain'}} />
    }
  }
},{
  tabBarOptions:{
    tabStyle:{
      backgroundColor:'#000',
            marginBottom: '-9%',
            borderWidth:6,
            borderTopColor: '#000',
            //borderTopColor: 'red',
            paddingBottom: '5%'
    },
    labelPosition: 'below-icon',
    labelStyle:{
      color: '#fff',
      fontSize: 13,
      //marginBottom:'5%',
  },
  }
})
const mapStateToProps = (state) =>({
  workoutView: state.appReducer.workoutView,
  initial: state.appReducer.initial
})
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});
export default connect(mapStateToProps,mapDispatchToProps) (MainTabs)