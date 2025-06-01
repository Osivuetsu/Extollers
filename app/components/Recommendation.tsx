import { View, Text } from "react-native";

export default function Recommendation() {
  return (
    <View className="mb-6">
      <Text className="text-lg font-bold text-white mb-4">What to Learn Next</Text>
      <View className="bg-slate-900 p-4 rounded-xl">
        <Text className="text-amber-600 text-2xl">Arpeggios- </Text>
        <Text className="text-amber-100 mt-1">suits your current level!</Text>
        <Text className="mt-8 text-white">Estimated Time: 5hours</Text>

      </View>
      
    </View>
  );
}
