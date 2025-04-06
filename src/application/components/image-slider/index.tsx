import {
  ImageBackground,
  ImageStyle,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { useState } from "react";
import { Button } from "../button";

interface ImageSliderProps {
  data: string[];
  style?: StyleProp<ViewStyle | ImageStyle>;
}

export const ImageSlider = ({ data, style }: ImageSliderProps) => {
  const { styles } = useStyles(stylesheet);
  const [indexImage, setIndexImage] = useState(0);

  return (
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
  );
};
