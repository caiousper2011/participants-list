import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingVertical: 32,
    paddingHorizontal: 16,
    paddingTop: 96
  },
  title: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: '#fff',
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#aaa',
  },
  image: { width: 200, height: 200 },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fdfcfe',
    borderRadius: 4,
    height: 48,
    marginTop: 16,
    padding: 16,
    flex: 1,
    marginRight: 12
  },
  saveButton: {
    height: 48,
    minWidth: 100,
    backgroundColor: '#31cf67',
    marginTop: 16,
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 4
  },
  saveButtonText: {
    color: '#fdfcfe',
    fontWeight: "bold"
  },
  form: {
    flexDirection: 'row',
    marginVertical: 16
  },
  listEmptyText: {
    color: '#fff',
    textAlign: "center",
    marginTop: 16
  }
});
