import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    paddingTop: 16,
    paddingHorizontal: 20,
    paddingBottom: 120,
  },

  cardList: {
    maxHeight: 230,
    marginBottom: 8,
  },

  header: {
    marginTop: 25,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },

  badge: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 100,
    backgroundColor: theme.colors.tertiary.light,
  },

  badgeText: {
    color: theme.colors.tertiary.default,
  },

  cardsContainer: {
    flexDirection: "row",
    gap: 16,
  },

  card: (isPrimary?: boolean) => ({
    maxWidth: 178,
    alignSelf: "flex-start",
    padding: 16,
    borderRadius: 12,
    backgroundColor: isPrimary
      ? theme.colors.secondary.default
      : theme.colors.tertiary.default,
  }),

  iconContainer: {
    padding: 14,
    borderRadius: 100,
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary.default,
  },

  cardTitle: {
    color: theme.colors.primary.default,
    marginTop: 15,
    marginBottom: 27,
  },

  cardButton: {
    borderRadius: 100,
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignItems: "center",
    backgroundColor: theme.colors.primary.default,
  },

  cardTextButton: (isPrimary?: boolean) => ({
    color: isPrimary
      ? theme.colors.secondary.default
      : theme.colors.tertiary.default,
  }),

  menuListContainer: {
    marginTop: 16,
  },

  menuCard: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },

  menuContent: {
    flex: 1,
  },
}));
