import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity, Alert, Pressable } from "react-native";
// import { styled } from "nativewind";

// const Button = styled(Pressable);

export default function ProfilePanel() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [instrument, setInstrument] = useState("Piano");

  return (
    <View className="flex-1 bg-black p-5">
      
      {/* User Info */}
      <View className="border-b border-gray-800 pb-4 mb-6">
        <Text className="text-orange-500 text-lg mb-2">👤 User Info</Text>
        <View className="flex-row items-center">
          <View className="w-12 h-12 bg-gray-700 rounded-full mr-4" />
          <View>
            <Text className="text-white text-base font-semibold">Fortune Osivue Etsu</Text>
            <Text className="text-gray-500">@fortune_music</Text>
          </View>
        </View>
      </View>

      {/* Instrument Preference */}
      <View className="border-b border-gray-800 pb-4 mb-6">
        <Text className="text-orange-500 text-lg mb-2">🎯 Instrument Preference</Text>
        <View className="flex-row space-x-3">
          {["Piano", "Guitar", "Drums"].map((inst) => (
            <TouchableOpacity
              key={inst}
              className={`border rounded-full py-1 px-4 ${
                instrument === inst ? "bg-orange-500 border-orange-500" : "border-gray-600"
              }`}
              onPress={() => setInstrument(inst)}
            >
              <Text className={`${instrument === inst ? "text-black" : "text-gray-400"} font-medium`}>
                {inst}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* App Settings */}
      <View className="border-b border-gray-800 pb-4 mb-6">
        <Text className="text-orange-500 text-lg mb-2">⚙️ App Settings</Text>

        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-white">Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            thumbColor={darkMode ? "#FFA500" : "#f4f3f4"}
            trackColor={{ false: "#767577", true: "#FFB347" }}
          />
        </View>

        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-white">Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            thumbColor={notifications ? "#FFA500" : "#f4f3f4"}
            trackColor={{ false: "#767577", true: "#FFB347" }}
          />
        </View>

        {/* <Button
          className="bg-orange-500 rounded-md py-2 mt-2"
          onPress={() => Alert.alert("Edit Profile pressed")}
          activeOpacity={0.8}
        >
          <Text className="text-black text-center font-semibold">Edit Profile</Text>
        </Button> */}
        <Pressable className="bg-orange-500 rounded-md py-2 mt-2">
         <Text className="text-black text-center font-semibold">Edit Profile</Text>
       </Pressable>
      </View>

      {/* Activity Summary */}
      <View className="border-b border-gray-800 pb-4 mb-6">
        <Text className="text-orange-500 text-lg mb-2">📜 Activity Summary</Text>
        <Text className="text-white">Lessons Completed: 12</Text>
        <Text className="text-white">Total Practice Time: 4h 30m</Text>
      </View>

      {/* Log Out */}
      {/* <Button
        className="bg-red-600 rounded-md py-2"
        onPress={() => Alert.alert("Logging out...")}
        activeOpacity={0.8}
      >
        <Text className="text-white text-center font-semibold">Log Out</Text>
      </Button> */}
    </View>
  );
}



// import React from "react";
// import { View, Text, Pressable, Image } from "react-native";

// export default function Profile() {
//   const instruments = ["Piano", "Guitar", "Drums"];
//   const user = {
//     name: "Fortune Osivue Etsu",
//     username: "@fortune_music",
//     avatar: "https://i.pravatar.cc/150?img=12", // example avatar URL
//     lessonsCompleted: 12,
//     totalPracticeTime: "4h 30m",
//   };

//   return (
//     <View className="flex-1 bg-black p-6">
//       {/* User Info */}
//       <View className="flex-row items-center mb-6">
//         <Image
//           source={{ uri: user.avatar }}
//           className="w-16 h-16 rounded-full mr-4"
//         />
//         <View>
//           <Text className="text-white text-lg font-bold">{user.name}</Text>
//           <Text className="text-gray-400">{user.username}</Text>
//         </View>
//       </View>

//       {/* Instrument Preference */}
//       <View className="mb-6">
//         <Text className="text-gray-200 text-base font-semibold mb-2">
//           🎯 Instrument Preference
//         </Text>
//         <View className="flex-row space-x-3">
//           {instruments.map((instrument) => (
//             <View
//               key={instrument}
//               className="bg-gray-800 px-3 py-1 rounded-full"
//             >
//               <Text className="text-gray-300">{instrument}</Text>
//             </View>
//           ))}
//         </View>
//       </View>

//       {/* App Settings */}
//       <View className="mb-6">
//         <Text className="text-gray-200 text-base font-semibold mb-2">
//           ⚙️ App Settings
//         </Text>

//         <View className="flex-row justify-between items-center mb-3">
//           <Text className="text-gray-300">Dark Mode</Text>
//           <View className="w-12 h-6 bg-gray-700 rounded-full" /> {/* Toggle placeholder */}
//         </View>

//         <View className="flex-row justify-between items-center mb-3">
//           <Text className="text-gray-300">Notifications</Text>
//           <View className="w-12 h-6 bg-gray-700 rounded-full" /> {/* Toggle placeholder */}
//         </View>

//         <Pressable className="bg-orange-500 rounded-md py-2 mt-2">
//           <Text className="text-black text-center font-semibold">Edit Profile</Text>
//         </Pressable>
//       </View>

//       {/* Activity Summary */}
//       <View className="mb-6">
//         <Text className="text-gray-200 text-base font-semibold mb-2">
//           📜 Activity Summary
//         </Text>
//         <Text className="text-gray-300 mb-1">
//           Lessons Completed: {user.lessonsCompleted}
//         </Text>
//         <Text className="text-gray-300">
//           Total Practice Time: {user.totalPracticeTime}
//         </Text>
//       </View>

//       {/* Log Out Button */}
//       <Pressable className="bg-red-600 rounded-md py-2">
//         <Text className="text-white text-center font-semibold">Log Out</Text>
//       </Pressable>
//     </View>
//   );
// }
