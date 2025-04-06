import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  
    container: {
        marginVertical: 35,
        gap: 16,
      },
    
      title: {
        marginLeft: 20,
      },
    
      list: {
        gap: 16,
        paddingHorizontal: 20,
      },
    
      storeContainer: {
        width: 84,
        gap: 10,
        alignItems: "center",
      },
    
      storeImage: {
        width: 84,
        height: 84,
        borderRadius: 100,
        backgroundColor: theme.colors.primary.light,
      },
    
      storeName: {
        textAlign: "center",
      },
    
}));