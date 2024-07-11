import { View, Text } from 'react-native';

export default function WelcomScreen() {
  return (
    <View style={{ flex: 1 }}>
        <Text style={{ paddingTop:20, color:"#FFFFFF", textAlign:"center", fontSize:30 }} >
            Welcome to Little Lemon
        </Text>
        <Text style={{paddingTop:20, color:"#FFFFFF", textAlign:"center", fontSize:24 }}>
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
        </Text>
    </View>
  );
}
