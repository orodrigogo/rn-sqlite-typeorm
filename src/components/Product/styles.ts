import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#CECECE",
    borderRadius: 7,
    padding: 16
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5
  },
  quantity: {
    fontSize: 14,
    color: "#777",
  }
});