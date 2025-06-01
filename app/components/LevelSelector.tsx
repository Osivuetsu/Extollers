// components/LevelSelector.tsx
import { View, Text, TouchableOpacity } from "react-native";

const levels = ["Beginner", "Intermediate", "Advanced"];

type Props = {
  selectedLevel: string;
  onSelect: (level: string) => void;
};

export default function LevelSelector({ selectedLevel, onSelect }: Props) {
  return (
    <View className="flex-row flex-wrap gap-2 mt-4">
      {levels.map((level) => (
        <TouchableOpacity
          key={level}
          onPress={() => onSelect(level)}
          className={`px-4 py-2 rounded-full ${
            selectedLevel === level ? "bg-emerald-500" : "bg-slate-800"
          }`}
        >
          <Text
            className={`text-sm ${
              selectedLevel === level
                ? "text-black font-semibold"
                : "text-white"
            }`}
          >
            {level}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
