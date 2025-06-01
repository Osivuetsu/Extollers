import { View, Text } from "react-native";

export default function RecentActivity() {
  return (
    <View className="mb-10">
      <Text className="text-lg font-bold text-white mb-2">Recent Activity</Text>

      <View className="bg-slate-900 p-4 rounded-xl">
        <Text className="text-amber-100">You completed 3 lessons this week 📘</Text>
        <Text className="text-amber-100 mt-1">You unlocked the Beginner Rhythm Badge 🏅</Text>
        <Text className="mt-6 text-white text-center">See More</Text>
      </View>
      
    </View>
  );
}
