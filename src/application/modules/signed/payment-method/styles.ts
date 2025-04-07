import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: 16,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  header: {
    padding: 20,
  },

  backButton: {
    alignSelf: "flex-start",
  },

  card: {
    padding: 20,
    borderWidth: 1,
    borderColor: `${theme.colors.text}12`,
    borderRadius: 8,
    backgroundColor: theme.colors.primary.default,
  },

  qrCodeCard: {
    marginTop: 5,
    padding: 26,
    borderWidth: 1,
    borderColor: `${theme.colors.text}12`,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary.default,
  },

  cardTitle: {
    color: `${theme.colors.text}50`,
  },

  horizontal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  badge: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 100,
    backgroundColor: theme.colors.tertiary.light,
  },

  badgeText: {
    color: theme.colors.tertiary.default,
  },

  codeContainer: {
    flexDirection: "row",
    marginVertical: 18,
    gap: 16,
  },

  codeContent: {
    flex: 1,
    padding: 12,
    height: 64,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: "center",
    borderColor: `${theme.colors.text}10`,
  },

  clipboardButton: {
    width: 64,
    height: 64,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.tertiary.light,
  },

  cardSpan: {
    color: theme.colors.tertiary.default,
  },

  vertical: {
    marginTop: 10,
    gap: 22,
  },

  buttonsContainer: {
    marginTop: 17,
    gap: 16,
  },
}));
