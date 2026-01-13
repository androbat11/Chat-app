import { StyleProp, View, ViewStyle, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HomePageStyles } from "./HomePage.styles";
import { Gradient } from "../../components/atoms/Gradient";
import { colors } from "../../designSystem/hooks/colors";
import { TouchableButton } from "../../components/atoms/Button";

// ScrollView -> Allows you to scroll
type HomeScreenProps = {
    style?: StyleProp<ViewStyle>;
};

const HomePageJPG = require("./../../assets/mainScreen.jpg");


// Cover sets the image in background

// Refactor the following code in order to <COMPOSE>
export const HomeScreen = ({ }: HomeScreenProps) => {
    return (
        <View style={HomePageStyles.container}>
            <StatusBar style="auto" />
            <Image source={HomePageJPG}
                style={HomePageStyles.image}
                resizeMode="cover" />
            <TouchableButton 
                onPress={() => console.log("clicked")} 
                title="Login" 
                style={{ 
                    backgroundColor: colors.blue,
                    padding: 10, 
                    borderRadius: 28,
                    position: 'absolute',
                    bottom: 50,
                    left: 20,
                    right: 20,
                    width: '80%',
                    height: "7%",
    
                    
                }}
            />
        </View>
    )
}


