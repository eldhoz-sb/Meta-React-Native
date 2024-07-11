import { View, Text, StyleSheet } from 'react-native';

const LittleLemonHeader = () => {
  return (
    <View style={styles.headercontainer}>
      <Text
        style={styles.headerText}>
        Little Lemon
      </Text>
    </View>
  );
}

  const styles = StyleSheet.create({
    headercontainer: {
      backgroundColor: '#EE9972',
    },
    headerText: {
      padding: 40,
      fontSize: 30,
      color: 'black',
      textAlign: 'center',
    }
  })

  export default LittleLemonHeader
