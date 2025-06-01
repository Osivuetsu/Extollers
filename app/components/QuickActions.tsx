// import { View, Text } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// export default function QuickActions() {
//   const actions = [
//     ["Take Assessment", "clipboard"],
//     ["Practice Drill", "barbell"],
//     ["My Progress", "stats-chart"],
//     ["Change Instrument", "musical-notes"],
//   ];

//   return (
//     <View className="mb-6">
//       <Text className="text-lg  p-2 font-bold text-gray-200 mb-3">Quick Actions</Text>
//       <View className="flex-row flex-wrap justify-between">
//         {actions.map(([label, icon]) => (
//           <View key={label} className="w-[47%] bg-black border-x-2  border-amber-600 p-4 rounded-xl mb-4">
//             <Ionicons name={icon as any} size={24}  className="color-slate-700" />
//             <Text className="text-sm mt-2 font-semibold text-gray-200">{label}</Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// }

// // #4F46E5


import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function QuickActions() {
  const actions = [
    ["Take Assessment", "clipboard"],
    ["Practice Drill", "barbell"],
    ["My Progress", "stats-chart"],
    ["Change Instrument", "musical-notes"],
  ];

  return (
    <View className="mb-6">
      <Text className="text-lg p-2 font-bold text-gray-200 mb-3">Quick Actions</Text>
      <View className="flex-row flex-wrap justify-between">
        {actions.map(([label, icon]) => (
          <View
            key={label}
            className="w-[47%] bg-black border-x-2 border-amber-600 p-4 rounded-xl mb-4"
          >
            <Ionicons name={icon} size={24} color="#94a3b8" />
            <Text className="text-sm mt-2 font-semibold text-gray-200">{label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
