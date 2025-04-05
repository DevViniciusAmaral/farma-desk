import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Layout } from "../../../components/layout";
import { Image, View } from "react-native";
import { images } from "../../../assets/images";
import { Text } from "../../../components/text";
import { useForm } from "react-hook-form";
import { FormData, schema } from "./constants/Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "../../../components/input-form";
import { CheckButton } from "../../../components/check-button";
import { useState } from "react";
import { Button } from "../../../components/button";
import { PrimaryButton } from "../../../components/primary-button";
import { MainRootProps } from "../../../routes/MainRootProps";
import { useAuth } from "../../../hooks/useAuth";

export const SignIn = ({ navigation }: MainRootProps<"SignIn">) => {
  const { signIn } = useAuth();
  const { styles } = useStyles(stylesheet);

  const [stayConected, setStayConected] = useState(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({ resolver: zodResolver(schema) as any });

  const handleSubmitForm = async ({ email, password }: FormData) => {
    await signIn(email, password);
    navigation.navigate("ConfirmEmail");
  };

  return (
    <Layout style={styles.container}>
      <Image source={images.logo} style={styles.logo} resizeMode="contain" />

      <View style={styles.content}>
        <Text size={24} font="semibold">
          Entre na sua conta
        </Text>
        <Text size={16} style={styles.description}>
          Acesse sua conta preenchendo as informações necessárias para
          prosseguir.
        </Text>
      </View>

      <View style={styles.form}>
        <InputForm
          control={control}
          name="email"
          label="Nome*"
          placeholder="Nome*"
          error={errors.email}
        />

        <InputForm
          control={control}
          name="password"
          label="Senha*"
          placeholder="Senha*"
          error={errors.password}
        />
      </View>

      <View style={styles.horizontal}>
        <CheckButton
          checked={stayConected}
          onPress={() => setStayConected((value) => !value)}
        >
          Permanecer conectado
        </CheckButton>

        <Button>
          <Text>Esqueci minha senha</Text>
        </Button>
      </View>

      <PrimaryButton
        style={styles.button}
        onPress={handleSubmit(handleSubmitForm)}
      >
        Entrar
      </PrimaryButton>

      <View style={styles.separator}>
        <View style={styles.divisor} />
        <Text size={16} font="semibold" style={styles.textSeparator}>
          OU
        </Text>
        <View style={styles.divisor} />
      </View>

      <PrimaryButton
        mode="secondary"
        style={styles.button}
        onPress={() => navigation.navigate("ConfirmEmail")}
      >
        Criar conta
      </PrimaryButton>
    </Layout>
  );
};
