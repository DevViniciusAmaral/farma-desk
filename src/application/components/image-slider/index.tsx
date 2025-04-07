import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  View,
} from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { useRef, useState } from "react";
import { Button } from "../button";

interface ImageSliderProps {
  data: string[];
}

export const ImageSlider = ({ data }: ImageSliderProps) => {
  const { styles } = useStyles(stylesheet);

  const listRef = useRef<ScrollView>(null);
  const [indexList, setIndexList] = useState(0);
  const screenWidth = Dimensions.get("window").width - 40;

  const handleScrollList = (index: number) => {
    setIndexList(index);
    listRef.current?.scrollTo({ x: index * screenWidth, animated: true });
  };

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / screenWidth);
    setIndexList(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={listRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {data.map((uri, index) => (
          <ImageBackground
            key={index}
            source={{ uri }}
            style={styles.image}
            imageStyle={styles.image}
          />
        ))}
      </ScrollView>

      <View style={styles.circleContainer}>
        {data.map((_, index) => {
          const isActive = index === indexList;
          return (
            <Button
              key={index}
              style={styles.circle(isActive)}
              onPress={() => handleScrollList(index)}
            />
          );
        })}
      </View>
    </View>
  );
};

/*
<ImageBackground
      style={[styles.image, style]}
      imageStyle={[styles.image, style as any]}
    >
      <View style={styles.circleContainer}>
        {data.map((_, index) => {
          const isActive = index === indexImage;
          return (
            <Button
              key={index}
              style={styles.circle(isActive)}
              onPress={() => setIndexImage(index)}
            />
          );
        })}
      </View>
    </ImageBackground>
*/
