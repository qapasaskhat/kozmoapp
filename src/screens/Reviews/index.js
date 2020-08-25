import React, { Component } from 'react';
import { View, Text, StatusBar, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {img_ava, avatar} from '../../assets/img'
import { star, next } from '../../assets/icons'

const ReviewsComponent = ({name,avatar,text,reviewsBtnPress})=>(
  <View style={styles.reviewsContainer}>
    <View style={{
      flexDirection: 'row',
    }}>
      <Image source={avatar} style={styles.avatar}/>
      <View style={{
        paddingHorizontal: 10
      }}>
        <View style={{
          flexDirection: 'row',
          marginBottom: 5,
          justifyContent:'space-between',
          paddingRight: 10
        }}>
          <Text style={styles.nameText}>{name}</Text>
          <Image source={star} style={{
            width: 12,
            height: 12,
            resizeMode: 'contain',
            tintColor: '#FFD84D'
          }}/>
        </View>
        <Text style={styles.reviewsText}>{text}</Text>
        <TouchableOpacity onPress={reviewsBtnPress} style={styles.reviewsBtn}>
          <Text style={styles.btnText}>Ответить</Text>
          <Image source={next} style={styles.btnIcon}/>
        </TouchableOpacity>
      </View>
    </View>
  </View>
)

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [{
        id: 1,
        name: 'Мирас Каирлеевич',
        avatar: img_ava,
        text: 'Внимательное отношение к клиенту, сбалансированная тренировка, легко найти общий язык, спасибо!',
        raiting: 4
      },{
        id: 2,
        name: 'Мирас Каирлеевич',
        avatar: avatar,
        text: 'Внимательное отношение к клиенту, сбалансированная тренировка, легко найти общий язык, спасибо!',
        raiting: 3
      }]
    };
  }

  render() {
    const {reviews} = this.state
    const {navigation} = this.props
    return (
      <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View style={{
          flex: 1,
          backgroundColor: '#fff',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30
        }}>
          <View style={{
            paddingTop: '5%'
          }}>
          <Text style={styles.h2}> Отзывы атлетов </Text>
          {
            reviews.map(item=>(
              <ReviewsComponent 
                name={item.name} 
                text={item.text} 
                avatar={item.avatar}
                reviewsBtnPress={()=>{
                  navigation.navigate('ReplyReviews')
                }}
                />
            ))
          }
          </View>
        </View>
      </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000'
  },
  h2:{
    fontSize: 16,
    fontFamily: 'SFProDisplay-Bold',
    fontWeight: '600',
    fontStyle: 'normal',
    color: '#1f1f1f',
    marginHorizontal: '8%',
    marginBottom: '5%'
  },
  nameText:{
    fontSize: 13,
    color: '#262626',
    fontFamily: 'SFProDisplay-Regular'
  },
  reviewsText: {
    fontSize:13,
    color: '#929292',
    fontFamily: 'SFProDisplay-Regular'
  },
  reviewsContainer:{
    paddingHorizontal: '8%',
    //borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#d4d4d4',
    borderTopColor: '#d4d4d4',
    paddingVertical: 14
  },
  avatar:{
    width: 38,
    height: 38,
    borderRadius: 20
  },
  reviewsBtn:{
    flexDirection:'row',
    height:40,
    alignItems: 'center',
    justifyContent:'space-around',
    width:'40%',
    backgroundColor: '#fff',
    borderRadius:37,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btnIcon:{
    width:20,
    height:14,
    resizeMode:'contain'
  },
  btnText:{
    fontSize: 13,
    fontFamily: 'SFProDisplay-Regular',
    color: '#000'
  }
})

export default Reviews;
