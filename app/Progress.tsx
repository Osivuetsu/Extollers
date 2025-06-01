// // ProgressScreen.tsx
// import { View, Text, FlatList } from "react-native";
// import { useState } from "react";
// import { ProgressBar } from "react-native-paper";

// const completedLessons = [
//   {
//     lesson_title: "C Major Scale",
//     progress: 1.0, // 100% completed
//     last_practiced: "2025-05-10"
//   },
//   {
//     lesson_title: "G Major Arpeggio",
//     progress: 0.7,
//     last_practiced: "2025-05-12"
//   },
//   {
//     lesson_title: "G Major Arpeggio",
//     progress: 0.7,
//     last_practiced: "2025-05-12"
//   },
//     {
//     lesson_title: "C Major Scale",
//     progress: 1.0, // 100% completed
//     last_practiced: "2025-05-10"
//   },
// ];

// const ProgressItem = ({ item }) => (
//   <View className="bg-[#1a1a1a] rounded-xl p-4 mb-4">
//     <Text className="text-white font-semibold text-base">{item.lesson_title}</Text>
//     <Text className="text-gray-300 mb-2">Last practiced: {item.last_practiced}</Text>
//     <ProgressBar
//       progress={item.progress}
//       color="#FFA500"
//       style={{ height: 10, borderRadius: 10 }}
//     />
//   </View>
// );

// export default function ProgressScreen() {
//   const [streak, setStreak] = useState(5); // Example: 5-day streak

//   return (
//     <View className="flex-1 bg-black px-4 py-6">
//       <Text className="text-white text-xl font-bold mb-4">Your progress so far.</Text>

//       <View className="bg-[#262626] p-4 rounded-xl mb-6">
//         <Text className="text-[#FFA500] font-bold text-lg">🔥 {streak}-Day Streak</Text>
//       </View>

//       <FlatList
//         data={completedLessons}
//         renderItem={({ item }) => <ProgressItem item={item} />}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     </View>
//   );
// }


import { View, Text } from 'react-native'
import React from 'react'

const Progress = () => {
  return (
    <View>
      <Text>Progress</Text>
    </View>
  )
}

export default Progress