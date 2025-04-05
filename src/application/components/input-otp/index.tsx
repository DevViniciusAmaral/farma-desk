import { View, TextInput as RNTextInput } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { TextInput } from "../text-input";
import { useRef, useState } from "react";

interface InputOtpProps {
  onChange: (code: string[]) => void;
}

export const InputOtp = ({ onChange }: InputOtpProps) => {
  const { styles } = useStyles(stylesheet);

  const [code, setCode] = useState(["", "", "", ""]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const inputRefs = [
    useRef<RNTextInput>(null),
    useRef<RNTextInput>(null),
    useRef<RNTextInput>(null),
    useRef<RNTextInput>(null),
  ];

  const handleCodeChange = (text: string, index: number) => {
    if (!/^\d*$/.test(text)) return;

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    onChange(newCode);

    if (text.length === 1 && index < 3) {
      setTimeout(() => {
        inputRefs[index + 1].current?.focus();
      }, 0);
    } else if (text.length === 0 && index > 0) {
      setTimeout(() => {
        inputRefs[index - 1].current?.focus();
      }, 0);
    }
  };

  const handleFocus = (index: number) => {
    for (let i = 0; i < index; i++) {
      if (!code[i]) {
        inputRefs[i].current?.focus();
        return;
      }
    }
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      {code.map((digit, index) => {
        const isActive = activeIndex === index;
        return (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            style={styles.input(isActive)}
            maxLength={1}
            keyboardType="number-pad"
            value={digit}
            onChangeText={(text) => handleCodeChange(text, index)}
            onFocus={() => handleFocus(index)}
            onBlur={() => setActiveIndex(null)}
            editable={index === 0 || code[index - 1] !== ""}
          />
        );
      })}
    </View>
  );
};
