import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Layout } from "../../../components/layout";
import { Text } from "../../../components/text";
import { View } from "react-native";
import { InputOtp } from "../../../components/input-otp";
import { useState } from "react";
import { PrimaryButton } from "../../../components/primary-button";
import { Button } from "../../../components/button";
import { MainRootProps } from "../../../routes/MainRootProps";
import { useAuth } from "../../../hooks/useAuth";

export const ConfirmEmail = ({ navigation }: MainRootProps<"ConfirmEmail">) => {
  const { signIn } = useAuth();
  const { styles } = useStyles(stylesheet);

  const [code, setCode] = useState(["", "", "", ""]);

  const handleSignup = async () => {
    await signIn("user@email.com", "123456");
  };

  return (
    <Layout
      style={styles.container}
      header={
        <View style={styles.header}>
          <Text size={24} font="semibold">
            Confirmar E-mail
          </Text>
          <Text size={16} style={styles.description}>
            Preencha com o código enviado no seu e-mail.
          </Text>
        </View>
      }
    >
      <InputOtp onChange={setCode} />

      <View style={styles.horizontal}>
        <PrimaryButton
          mode="tertiary"
          style={styles.button}
          onPress={navigation.goBack}
        >
          Voltar
        </PrimaryButton>

        <PrimaryButton style={styles.button} onPress={handleSignup}>
          Confirmar
        </PrimaryButton>
      </View>

      <View style={styles.span}>
        <Text size={16} font="semibold">
          Não recebeu o código?
        </Text>

        <Button style={styles.updateEmailButton}>
          <Text font="semibold" style={styles.updateEmailTextButton}>
            Alterar e-mail
          </Text>
        </Button>
      </View>
    </Layout>
  );
};
