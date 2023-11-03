import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Paginator from '../Paginator';
import NextButton from '../NextButton';
const OnBoardingScreen1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const slides = [
    {id: 0, img: require('../../src/cloud.png'), title: 'Image 1'},
    {id: 1, img: require('../../src/Group_3.png'), title: 'Image 2'},
    {id: 2, img: require('../../src/login.png'), title: 'Image 3'},
    {id: 3, img: require('../../src/signup2.png'), title: 'Image 4'},
  ];
  const renderData = ({item}) => {
    return (
      <View style={styles.renderData_List}>
        <Image style={styles.images} resizeMode={'contain'} source={item.img} />
        <Text>{item.title}</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        data={slides}
        renderItem={renderData}
        horizontal
        pagingEnabled={true}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <Paginator data={slides} scrollX={scrollX} />
      <NextButton percentage={(currentIndex + 1) * (100 / slides.length)} />
    </View>
  );
};

export default OnBoardingScreen1;

const styles = StyleSheet.create({
  renderData_List: {
    height: 250,
    width: 340,
    alignItems: 'center',
    margin: 10,
  },
  images: {height: '100%', width: '100%'},
});
