import {
  GestureResponderEvent,
  Pressable,
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { GlobalStyles } from '../../constants/styles';

export enum ButtonMode {
  normal,
  flat,
}

interface ButtonProps {
  chidren: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
  mode: ButtonMode;
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({ chidren, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}>
        <View style={[styles.button, mode === ButtonMode.flat && styles.flat]}>
          <Text
            style={[
              styles.buttonText,
              mode === ButtonMode.flat && styles.flatText,
            ]}>
            {chidren}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
