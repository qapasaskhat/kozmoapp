import React, {Fragment, Component} from 'react';
import {View, Text,StyleSheet,TouchableOpacity,Animated,PanResponder,Button} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import Modal, { ModalContent } from 'react-native-modals';

class RnMaps extends React.Component {
  state = {
    bottomModalAndTitle: false
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title='Show panel' onPress={() => {
          this.setState({
            bottomModalAndTitle: true
          })
        }} />
        <Modal.BottomModal
          visible={this.state.bottomModalAndTitle}
          onTouchOutside={() => this.setState({ bottomModalAndTitle: false })}
          onSwipeOut={() => this.setState({ bottomModalAndTitle: false })}
          width ={1}
          height ={0.8}
          //swipeDirection={['up','down']} // can be string or an array
          //swipeThreshold={200} // default 100
          
        >
          <ModalContent style={{
            flex: 1,
            backgroundColor: '#000',
          }}>
            <Text>text</Text>
          </ModalContent>
  </Modal.BottomModal>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B5F6F8',
  },
  openButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    backgroundColor: '#5B87E5',
    borderRadius: 30,
  },
  openButtonText: {
    fontSize: 12,
    color: 'white',
  },
  subView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    height: 200,
  },
  closeButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 12,
  },
  closeButton: {
    height: 7,
    width: 62,
    backgroundColor: '#D8D8D8',
    borderRadius: 3.5,
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  detailsText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4A4A4A',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default RnMaps;
