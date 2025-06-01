// import React, { useState, useEffect } from "react";
// import { ScrollView, View, Text, TextInput, FlatList, TouchableOpacity, Image } from "react-native";

// const dummyData = [
//   { id: "1", title: "Guitar Basics", category: "Guitar", image: "https://via.placeholder.com/150" },
//   { id: "2", title: "Piano Intermediate", category: "Piano", image: "https://via.placeholder.com/150" },
//   { id: "3", title: "Drums for Beginners", category: "Drums", image: "https://via.placeholder.com/150" },
//   { id: "4", title: "Advanced Guitar Techniques", category: "Guitar", image: "https://via.placeholder.com/150" },
//   // add more items as needed
// ];

// const categories = ["All", "Guitar", "Piano", "Drums"];

// export default function explore() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [filteredData, setFilteredData] = useState(dummyData);

//   useEffect(() => {
//     let data = dummyData;

//     if (selectedCategory !== "All") {
//       data = data.filter((item) => item.category === selectedCategory);
//     }

//     if (searchQuery.trim()) {
//       data = data.filter((item) =>
//         item.title.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     setFilteredData(data);
//   }, [searchQuery, selectedCategory]);

//   return (
//     <ScrollView className="flex-1 bg-black px-4 pt-5">
      
//       {/* Search bar */}
//       <TextInput
//         placeholder="Search content..."
//         placeholderTextColor="#888"
//         value={searchQuery}
//         onChangeText={setSearchQuery}
//         className="bg-gray-800 rounded-xl px-4 py-2 mb-4 text-white"
//       />

//       {/* Categories */}
//       <View className="flex-row mb-4">
//         {categories.map((cat) => (
//           <TouchableOpacity
//             key={cat}
//             onPress={() => setSelectedCategory(cat)}
//             className={`px-4 py-2 rounded-full mr-2 ${
//               selectedCategory === cat ? "bg-blue-600" : "bg-gray-700"
//             }`}
//           >
//             <Text className="text-white">{cat}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Content List */}
//       <FlatList
//         data={filteredData}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 16 }}
//         renderItem={({ item }) => (
//           <View className="bg-slate-900 rounded-lg p-4 w-[48%]">
//             <Image
//               source={{ uri: item.image }}
//               className="h-24 w-full rounded-md mb-2"
//               resizeMode="cover"
//             />
//             <Text className="text-white font-semibold">{item.title}</Text>
//             <Text className="text-gray-400 text-sm">{item.category}</Text>
//           </View>
//         )}
//         showsVerticalScrollIndicator={false}
//       />
//     </ScrollView>
//   );
// }


import { View, Text, ScrollView, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const categories = ["Scales", "Chords", "Rhythm", "Theory", "Ear Training"];
const trendingLessons = [
  { title: "C Major Scale", level: "Beginner", duration: "3m" },
  { title: "Power Chords", level: "Intermediate", duration: "5m" },
];
const recommendedLessons = [
  { title: "Left Hand Coordination - Piano", duration: "4m" },
  { title: "Snare Roll Practice - Drums", duration: "6m" },
];
const otherInstruments = ["Saxophone", "Violin", "Trumpet"];

export default function Explore() {
  const [search, setSearch] = useState("");

  return (
    <ScrollView className="flex-1 bg-black px-4 pt-5">
      {/* Search Bar */}
      <View className="flex-row items-center bg-slate-800 rounded-xl px-3 py-2 mb-5">
        <Ionicons name="search" size={20} color="white" />
        <TextInput
          className="ml-2 flex-1 text-white"
          placeholder="Search lessons..."
          placeholderTextColor="#aaa"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Categories */}
      <Text className="text-white text-lg font-semibold mb-2">Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-5">
        {categories.map((category, idx) => (
          <TouchableOpacity
            key={idx}
            className="bg-slate-700 px-4 py-2 rounded-full mr-3"
          >
            <Text className="text-white">{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Trending Lessons */}
      <Text className="text-white text-lg font-semibold mb-3">Trending Lessons</Text>
      {trendingLessons.map((lesson, idx) => (
        <View
          key={idx}
          className="bg-slate-800 p-4 rounded-xl mb-3"
        >
          <Text className="text-white font-semibold text-base">{lesson.title}</Text>
          <Text className="text-gray-400 text-sm">{lesson.level} • {lesson.duration}</Text>
        </View>
      ))}

      {/* Recommended */}
      <Text className="text-white text-lg font-semibold mt-4 mb-3">Recommended for You</Text>
      {recommendedLessons.map((lesson, idx) => (
        <View
          key={idx}
          className="bg-slate-800 p-4 rounded-xl mb-3"
        >
          <Text className="text-white font-semibold text-base">{lesson.title}</Text>
          <Text className="text-gray-400 text-sm">{lesson.duration}</Text>
        </View>
      ))}

      {/* Other Instruments */}
      <Text className="text-white text-lg font-semibold mt-4 mb-3">Explore Other Instruments</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {otherInstruments.map((instrument, idx) => (
          <TouchableOpacity
            key={idx}
            className="bg-slate-700 px-4 py-2 rounded-full mr-3"
          >
            <Text className="text-white">{instrument}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
}
