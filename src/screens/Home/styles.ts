import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 32,
    gap: 16
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 44,
    marginBottom: 24
  },
  items: {
    gap: 12,
  },
  scroll: {
    borderTopWidth: 1,
    borderTopColor: "#999",
    paddingTop: 24,
  },
  header: {
    marginTop: 32,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '500'
  },
  headerQuantity: {
    fontSize: 14
  }
});