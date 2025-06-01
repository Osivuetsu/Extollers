// components/DrillCard.tsx
import { View, Text, TouchableOpacity } from "react-native";

type Drill = {
  title: string;
  description: string;
  difficulty: string;
  status: string;
};

type Props = {
  drill: Drill;
  onPress: () => void;
};

export default function DrillCard({ drill, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-slate-800 rounded-xl p-4 mb-3"
    >
      <Text className="text-white text-lg font-semibold">{drill.title}</Text>
      <Text className="text-gray-300 text-sm">{drill.description}</Text>
      <Text className="text-emerald-400 text-xs mt-1">
        {drill.difficulty} • {drill.status}
      </Text>
    </TouchableOpacity>
  );
}
