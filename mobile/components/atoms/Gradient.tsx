import { LinearGradient } from "expo-linear-gradient";
import { ColorValue, StyleProp, ViewStyle } from "react-native";

type GradientProps = {
  colors: readonly [ColorValue, ColorValue, ...ColorValue[]];
  start: { x: number; y: number };
  end: { x: number; y: number };
  style: StyleProp<ViewStyle>;
};

export const Gradient = ({ colors, start, end, style }: GradientProps) => {
  // eslint-disable-next-line prettier/prettier
  return <LinearGradient colors={colors} start={start} end={end} style={style} />
}

