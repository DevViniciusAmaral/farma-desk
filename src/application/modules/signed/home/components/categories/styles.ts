import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    gap: 13,
    marginTop: 13,
  },

  image: {
    borderRadius: 8,
    flex: 1,
    minHeight: 90,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: theme.colors.primary.light,
  },
  
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 8,
    backgroundColor: `${theme.colors.primary.default}20`,
  },
}));
