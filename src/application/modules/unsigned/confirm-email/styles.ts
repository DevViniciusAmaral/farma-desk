import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    paddingHorizontal: 24,
  },

  header: {
    gap: 4,
    marginTop: 45,
    paddingHorizontal: 24,
  },

  description: {
    color: theme.colors.primary.dark,
  },

  codeContent: {
    flexDirection: "row",
    gap: 8,
    marginTop: 13,
    alignItems: "center",
    justifyContent: "space-between",
  },

  horizontal: {
    flexDirection: "row",
    gap: 12,
    marginTop: 15,
  },

  button: {
    flex: 1,
  },

  span: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 28,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: `${theme.colors.primary.light}80`,
    borderRadius: 8,
  },

  updateEmailButton: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: theme.colors.tertiary.light,
  },

  updateEmailTextButton: {
    color: theme.colors.tertiary.default,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.tertiary.default,
  },
}));
