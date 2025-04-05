import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 26,
  },

  logo: {
    height: 52,
    alignSelf: "center",
  },

  description: {
    color: theme.colors.primary.dark,
  },

  content: {
    gap: 2,
    marginTop: 36,
  },

  form: {
    gap: 16,
    marginTop: 20,
    marginBottom: 13,
  },

  horizontal: {
    gap: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 33,
  },

  separator: {
    gap: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 24,
  },

  divisor: {
    flex: 1,
    borderWidth: 1,
    borderColor: `${theme.colors.primary.dark}30`,
  },

  textSeparator: {
    color: `${theme.colors.primary.dark}30`,
  },

  button: {
    width: 175,
    alignSelf: "center",
  },
}));
