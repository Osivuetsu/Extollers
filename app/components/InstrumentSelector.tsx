import { View, TouchableOpacity, Text } from "react-native";

export default function InstrumentSelector({
  instruments,
  selectedInstrument,
  onSelect,
}: {
  instruments: string[];
  selectedInstrument: string;
  onSelect: (i: string) => void;
}) {
  return (
    <View className="flex-row mt-2">
      
      {instruments.map((item) => (
        <TouchableOpacity
          key={item}
          onPress={() => onSelect(item)}
          className={`px-4 mr-4 py-2 rounded-xl border ${
            selectedInstrument === item ? "bg-primary border-yellow-600" : "border-gray-200"
          }`}
        >
          <Text className={selectedInstrument === item ? "text-gray-100" : "text-gray-300"}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
