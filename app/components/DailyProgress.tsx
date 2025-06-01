import { View, Text } from "react-native";

export default function DailyProgress() {
  return (
    <View className="mt-5">
      <Text className="text-sm text-gray-100">You’ve practiced 4 days in a row 🎯</Text>
      <View className="h-3 bg-gray-200 rounded-full mt-2 overflow-hidden">
        <View className="h-full w-2/3 bg-amber-600 rounded-full" /> {/* 10/15 minutes */}
      </View>
      <Text className="text-xs text-gray-200 mt-1">Today’s goal: 15 min – 10/15 done</Text>
    </View>
  );
}
