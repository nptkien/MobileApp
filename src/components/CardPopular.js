import React, { Component } from 'react';
import { View, Text,StyleSheet,Dimensions,Image, TouchableOpacity } from 'react-native';

const CardItem = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.title}>
                <Text style={{color:'#919191',marginBottom: 10}}>Travel</Text>
                <Text style={{fontSize: 20}}>New York City</Text>
                </View>
                <View style={styles.imgAvatar}>
                   <Image 
                    style={{flex:1}}
                    source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
                </View>
            </View>

            <View style={styles.description}>
            <Text style={{color:'#606060'}}>Use hierarchy within the card to direct users’ attention to the most important information. For example, place primary content at the top of the card, or use typography to emphasize primary content.</Text>
            </View>

            <View style={styles.action}>
                <TouchableOpacity>
                    <Text style={{fontSize: 18,color: '#5C6BC0', marginRight: 20}}>Comment</Text>
                </TouchableOpacity>
                 <TouchableOpacity>
                    <Text style={{fontSize: 18,color: '#5C6BC0'}}>Detail</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        height: height * 0.4,
        backgroundColor: '#FAFAFA',
        margin: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    header: {
        flex: 4,
       backgroundColor: '#FAFAFA',
        flexDirection: 'row'
    },
    description: {
        flex:4,
        backgroundColor: '#FAFAFA',
        paddingLeft: 10
    },
    action: {
        flex:2,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
    },
    title: {
        width: (width - 20) * 0.73,
      
        marginTop:20,
        marginLeft:10,
        backgroundColor: '#FAFAFA'
    },
    imgAvatar: {
        flex:1,
        backgroundColor: 'red',
        marginTop: 20,
        marginRight:20,
        marginBottom:20
    }
    })
export default CardItem;