import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: 16,
    paddingTop: 34,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },

  header: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },

  card: {
    borderWidth: 1,
    borderColor: `${theme.colors.text}12`,
    borderRadius: 8,
    padding: 20,
    gap: 26,
  },

  cardTitle: {
    color: `${theme.colors.text}50`,
  },

  cardSpan: (secondary?: boolean) => ({
    color: secondary ? `${theme.colors.text}70` : theme.colors.tertiary.default,
  }),

  cardImage: {
    width: 52,
    height: 52,
    borderRadius: 8,
    backgroundColor: theme.colors.primary.light,
  },

  horizontal: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
  },

  vertical: {
    flex: 1,
  },

  codeContainer: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: `${theme.colors.text}10`,
  },

  clipboardButton: {
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.tertiary.light,
  },
}));
