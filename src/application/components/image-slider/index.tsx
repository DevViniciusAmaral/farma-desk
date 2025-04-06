import { ImageBackground, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { useState } from "react";
import { Button } from "../button";

interface ImageSliderProps {
  data: string[];
}

export const ImageSlider = ({ data }: ImageSliderProps) => {
  const { styles } = useStyles(stylesheet);
  const [indexImage, setIndexImage] = useState(0);

  return (
    <ImageBackground style={styles.image}>
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
