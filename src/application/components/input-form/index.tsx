import { View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { TextInput, TextInputProps } from "../text-input";
import { Control, Controller, FieldError } from "react-hook-form";
import { useState } from "react";
import { Button } from "../button";
import { Eye, EyeClosed } from "lucide-react-native";
import { Text } from "../text";

interface InputForm extends TextInputProps {
  control: Control<any>;
  name: string;
  label: string;
  error?: FieldError;
}

export const InputForm = ({
  control,
  name,
  label,
  style,
  error,
  ...rest
}: InputForm) => {
  const { styles, theme } = useStyles(stylesheet);
  const [isFocused, setIsFocused] = useState(false);

  const isPassword = name.toLowerCase().includes("password");
  const [showPassword, setShowPassord] = useState(isPassword);

  const EyeIcon = !showPassword ? Eye : EyeClosed;

  const color = isFocused
    ? theme.colors.secondary.default
    : theme.colors.primary.dark;

  return (
    <View>
      <View style={styles.container(color)}>
        <View style={styles.vertical}>
          {isFocused && <Text style={styles.label(color)}>{label}</Text>}
          <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange } }) => (
              <TextInput
                {...rest}
                value={value}
                secureTextEntry={showPassword}
                style={[styles.input(color), style]}
                onChangeText={onChange}
                placeholderTextColor={color}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            )}
          />
        </View>

        <View style={styles.divisor(color)} />

        {isPassword && (
          <Button
            style={styles.button}
            onPress={() => setShowPassord((value) => !value)}
          >
            <EyeIcon size={29} color={color} />
          </Button>
        )}
      </View>

      {error && (
        <Text size={12} style={styles.error}>
          {error.message}
        </Text>
      )}
    </View>
  );
};
