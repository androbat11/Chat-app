import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  TouchableHighlight,
  ViewStyle,
  Text,
} from "react-native";

// onPess -> onClick
// underlaycolor -> backgroundColor
type ButtonProps = {
  onPress: (event?: GestureResponderEvent) => void;
  title: string;
  style?: StyleProp<ViewStyle>;
};

export const TouchableButton = ({ onPress, title, style }: ButtonProps) => {
  return (
    <TouchableHighlight onPress={onPress} style={style}>
      <Text>{title}</Text>
    </TouchableHighlight>
  );
};

// Pressable button
export const PressableButton = ({ onPress, title, style }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={style}>
      <Text>{title}</Text>
    </Pressable>
  );
};
