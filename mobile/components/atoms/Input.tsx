import { TextInput } from "react-native";

type InputProps = {
    placeholder: string;
    value: string;
    onChangeText: () => void;
}

export const Input = ({ placeholder, value, onChangeText }: InputProps) => {
    return <TextInput placeholder={placeholder}  value={value} onChangeText={onChangeText} />
}