// // import React from "react";
// // import { View ,Image} from "react-native";
// // import Stories from "react-native-stories-media";

// // const data = [
// //   {
// //     username: "Guilherme",
// //     title: "Title story",
// //     profile:
// //       "https://avatars2.githubusercontent.com/u/26286830?s=460&u=5d586a3783a6edeb226c557240c0ba47294a4229&v=4",
// //     stories: [
// //       {
// //         id: 1,
// //         url:
// //           "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
// //         type: "image",
// //         duration: 2,
// //         isReadMore: true,
// //         url_readmore: "https://github.com/iguilhermeluis",
// //         created: "2021-01-07T03:24:00",
// //       },
// //     ],
// //   },
// //   {
// //     username: "Bruno",
// //     profile: "https://avatars2.githubusercontent.com/u/45196619?s=460&v=4",
// //     title: "Travel",
// //     stories: [
// //       {
// //         id: 0,
// //         url:
// //           "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
// //         type: "image",
// //         duration: 2,
// //         isReadMore: true,
// //         url_readmore: "https://github.com/iguilhermeluis",
// //         created: "2021-01-07T03:24:00",
// //       },
// //       {
// //         id: 1,
// //         url: "https://www.w3schools.com/html/mov_bbb.mp4",
// //         type: "video",
// //         duration: 2,
// //         isReadMore: true,
// //         url_readmore: "https://github.com/iguilhermeluis",
// //         created: "2021-01-07T03:24:00",
// //       },
// //       {
// //         id: 2,
// //         url:
// //           "https://images.unsplash.com/photo-1476292026003-1df8db2694b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
// //         type: "image",
// //         duration: 2,
// //         isReadMore: false,
// //         url_readmore: "https://github.com/iguilhermeluis",
// //         created: "2021-01-07T03:24:00",
// //       },
// //       {
// //         id: 3,
// //         url:
// //           "https://images.unsplash.com/photo-1498982261566-1c28c9cf4c02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
// //         type: "image",
// //         duration: 2,
// //         isReadMore: true,
// //       },
// //     ],
// //   },
// //   {
// //     username: "Steve Jobs",
// //     profile:
// //       "https://s3.amazonaws.com/media.eremedia.com/uploads/2012/05/15181015/stevejobs.jpg",
// //     title: "Tech",
// //     stories: [
// //       {
// //         id: 1,
// //         url:
// //           "https://images.unsplash.com/photo-1515578706925-0dc1a7bfc8cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
// //         type: "image",
// //         duration: 2,
// //         isReadMore: true,
// //         url_readmore: "https://github.com/iguilhermeluis",
// //         created: "2021-01-07T03:24:00",
// //       },
// //       {
// //         id: 3,
// //         url:
// //           "https://images.unsplash.com/photo-1496287437689-3c24997cca99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
// //         type: "image",
// //         duration: 2,

// //         isReadMore: true,
// //         url_readmore: "https://github.com/iguilhermeluis",
// //         created: "2021-01-07T03:24:00",
// //       },
// //       {
// //         id: 4,
// //         url:
// //           "https://images.unsplash.com/photo-1514870262631-55de0332faf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
// //         type: "image",
// //         duration: 2,

// //         isReadMore: true,
// //         url_readmore: "https://github.com/iguilhermeluis",
// //         created: "2021-01-07T03:24:00",
// //       },
// //     ],
// //   },
// //   {
// //     username: "Jacob",
// //     profile:
// //       "https://images.unsplash.com/profile-1531581190171-0cf831d86212?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
// //     title: "News",
// //     stories: [
// //       {
// //         id: 4,
// //         url:
// //         "https://wallpaperaccess.com/full/1635200.jpg",
// //         type: "image",
// //         duration: 2,
// //         isReadMore: true,
// //         url_readmore: "https://github.com/iguilhermeluis",
// //         created: "2021-01-07T03:24:00",
// //       },
// //       {
// //         id: 5,
// //         url:
// //           "https://images.unsplash.com/photo-1478397453044-17bb5f994100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
// //         type: "image",
// //         duration: 2,

// //         isReadMore: true,
// //         url_readmore: "https://github.com/iguilhermeluis",
// //         created: "2021-01-07T03:24:00",
// //       },
// //       {
// //         id: 4,
// //         url:
// //           "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=581&q=80",
// //         type: "image",
// //         duration: 2,
// //         isReadMore: true,
// //         url_readmore: "https://github.com/iguilhermeluis",
// //         created: "2021-01-07T03:24:00",
// //       },
// //     ],
// //   },
// // ];

// // export default function Status() {

// //   return (
// //     <View style={{paddingVertical: 20 ,flexDirection:"row",padding:10,}}>
// //      <View style={{height:60,width:"100%",flex:1}}>
// //      <Stories data={data} />
// //      </View>
     
// //     </View>
// //   );
// // }

// import { View, Text } from 'react-native'
// import React from 'react'
// import StoryImages from "react-native-stories";

// const Status = () => {
//   const images = [{ uri: 'https://image.shutterstock.com/z/stock-photo--micro-peacock-feather-hd-image-best-texture-background-colourful-indian-peacock-feather-1127238599.jpg' }]
//   return (
//     <View style={{height:"100%",width:"80%"}}>
//     {/* <Text>khjk</Text> */}
//       <StoryImages
//       images={images}
//       containerStyle={{padding:20}}
//       // color="red"
    
//     />
//     </View>
//   )
// }

// export default Status



import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const Stories = () => {
  const navigation = useNavigation();

  const storyInfo = [
    {
      id: 1,
      name: 'Your Story',
      image: require('../Assets/Images/img11.jpeg'),
    },
    {
      id: 0,
      name: 'Ram_Charan',
      image: require('../Assets/Images/img1.jpg'),
    },
    {
      id: 0,
      name: 'sandy',
      image: require('../Assets/Images/img2.jpg'),
    },
    {
      id: 0,
      name: 'The_Groot',
      image: require('../Assets/Images/img3.jpg'),
    },
    ,
    {
      id: 0,
      name: 'loverland',
      image: require('../Assets/Images/img5.jpeg'),
    },
    ,
    {
      id: 0,
      name: 'chillhouse',
      image: require('../Assets/Images/img6.jpeg'),
    },
    {
      id: 0,
      name: '__yazhini___',
      image: require('../Assets/Images/img7.jpg'),
    },
    {
      id: 0,
      name: 'call_me_dude',
      image: require('../Assets/Images/img8.jpeg'),
    },
    {
      id: 0,
      name: 'its_me_brutus',
      image: require('../Assets/Images/img9.jpeg'),
    },
    {
      id: 0,
      name: 'rockers_ride',
      image: require('../Assets/Images/img10.jpeg'),
    },
    {
      id: 0,
      name: 'blacky_black',
      image: require('../Assets/Images/img11.jpeg'),
    },
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      // showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 10,flex:1,flexDirection:"column"}}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('StatusScreen', {
                name: data.name,
                image: data.image,
              })
            }>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 8,
                position: 'relative',
                padding:15,
              }}>
              {data.id == 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 320,
                    zIndex: 1,
                  }}>
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 25,
                      color: '#2e5f55',
                      backgroundColor: 'white',
                      borderRadius: 100,
                    }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: 'white',
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: '#00FF90',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={data.image}
                  style={{
                    resizeMode: 'cover',
                    width: '92%',
                    height: '92%',
                    borderRadius: 100,
                    backgroundColor: 'orange',
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  marginLeft:20,
                  fontWeight:"bold",
                  marginTop:16,
                  opacity: data.id == 0 ? 1 : 0.5,
                }}>
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;