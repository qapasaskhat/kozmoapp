import React, {Component} from 'react';
import { View, Text, StatusBar, SafeAreaView, Image, StyleSheet, TextInput } from 'react-native';
import {img_ava, avatar} from '../../assets/img'
import { star, next } from '../../assets/icons'
import Header from '../../components/Header'
import { YellowBtn } from '../../components/Button'

const ReviewsComponent = ({name,avatar,text})=>(
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
        </View>
      </View>
    </View>
  )

class ReplyReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
        review:{
            id: 1,
            name: 'Мирас Каирлеевич',
            avatar: img_ava,
            text: 'Внимательное отношение к клиенту, сбалансированная тренировка, легко найти общий язык, спасибо!',
            raiting: 4
          },
        text: ''
    };
  }

  render() {
      const { review,text } = this.state
      const { navigation} = this.props
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
                <Header back={()=>{navigation.goBack()}} />
                <Text style={styles.h2}>Ответ на отзыв о вашей тренировке</Text>
                <ReviewsComponent name={review.name} text={review.text} avatar={review.avatar} />
                <TextInput 
                    style={styles.input}
                    multiline
                    value={text}
                    onChangeText={(text)=>this.setState({text})}
                    placeholder='Ваш ответ'
                    />
                <View style={{
                    position: 'absolute',
                    bottom: 30,
                    width: '100%'
                }}>
                    <YellowBtn 
                        text={'Отправить'} 
                        icon iconName={next}
                        onPress={()=>{}}/>
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
        backgroundColor:'#000'
    },
    h2:{
        fontSize: 16,
        fontFamily: 'SFProDisplay-Bold',
        fontWeight: '600',
        fontStyle: 'normal',
        color: '#1f1f1f',
        marginHorizontal: '8%',
        marginBottom: '5%',
        marginTop: '5%'
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
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: '#d4d4d4',
        borderTopColor: '#d4d4d4',
        paddingVertical: 20
      },
      avatar:{
        width: 38,
        height: 38,
        borderRadius: 20
      },
      input:{
        margin: '10%',
        borderWidth: 1,
        borderRadius: 11,
        borderColor: '#D5D5D5',
        height: '40%',
        padding: '5%'
      }
})
export default ReplyReviews;
