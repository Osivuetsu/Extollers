// import { View, Text, FlatList, Pressable } from "react-native";
// import { useState } from "react";

// const drills = [
//   {
//     id: "1",
//     title: "C Major Scale Drill",
//     description: "Practice the C major scale with metronome.",
//     duration: "5 min",
//     level: "Beginner",
//   },
//   {
//     id: "2",
//     title: "Chord Progressions",
//     description: "Cycle through common progressions like I-IV-V-I.",
//     duration: "8 min",
//     level: "Intermediate",
//   },
//   // Add more drills...
// ];

// export default function Practice() {
//   const [selectedLevel, setSelectedLevel] = useState("Beginner");

//   const filteredDrills = drills.filter(d => d.level === selectedLevel);

//   return (
//     <View className="flex-1 bg-black px-4 pt-6">
//       <Text className="text-white text-xl font-bold mb-4">Practice Drills</Text>

//       {/* Skill Level Selector */}
//       <View className="flex-row justify-between mb-4">
//         {["Beginner", "Intermediate", "Advanced"].map(level => (
//           <Pressable
//             key={level}
//             onPress={() => setSelectedLevel(level)}
//             className={`px-4 py-2 rounded-full ${
//               selectedLevel === level ? "bg-orange-500" : "bg-gray-800"
//             }`}
//           >
//             <Text className="text-white">{level}</Text>
//           </Pressable>
//         ))}
//       </View>

//       {/* Drill List */}
//       <FlatList
//         data={filteredDrills}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <View className="bg-slate-800 p-4 rounded-2xl mb-4">
//             <Text className="text-white font-bold text-lg">{item.title}</Text>
//             <Text className="text-gray-300 text-sm mt-1">{item.description}</Text>
//             <Text className="text-orange-400 text-xs mt-2">Duration: {item.duration}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }


import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import InstrumentSelector from '../components/InstrumentSelector';
import LevelSelector from '../components/LevelSelector';
import DrillCard from '../components/DrillCard';
import { useNavigation } from 'expo-router';

const instruments = ['Guitar', 'Piano', 'Drums'];
const levels = ['Beginner', 'Intermediate', 'Advanced'];

export default function PracticeScreen() {
  const [selectedInstrument, setSelectedInstrument] = useState('Guitar');
  const [selectedLevel, setSelectedLevel] = useState('Beginner');
  const navigation = useNavigation();


  const drills = [
  {
    title: "Finger Warmup",
    description: "Basic finger movement",
    difficulty: "Beginner",
    status: "Not Started",
  },
  {
    title: "Chord Progression",
    description: "C-G-Am-F drill",
    difficulty: "Intermediate",
    status: "In Progress",
  },
]

  return (
    <ScrollView className="flex-1 bg-black px-4 pt-5">
      {/* <Text className="text-white text-xl font-semibold mb-4">Filter by Instrument</Text> */}
      {/* <InstrumentSelector 
        instruments={instruments} 
        selectedInstrument={selectedInstrument} 
        onSelect={setSelectedInstrument} 
      /> */}

      <Text className="text-white text-xl font-semibold mt-6 mb-4">Filter by Level</Text>
      <LevelSelector 
        levels={levels} 
        selectedLevel={selectedLevel} 
        onSelect={setSelectedLevel} 
      />

      <View className="mt-6">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-white text-lg font-semibold">Recommended Drills for You</Text>
          <TouchableOpacity onPress={() => navigation.navigate('recommendedDrills')}> 
            <Text className="text-blue-400">See More</Text>
          </TouchableOpacity>
        </View>

        {/* Sample drill cards */}
        {/* <DrillCard 
          title="Chord Transition Practice" 
          description="Improve speed between C and G chords." 
          level="Beginner" 
        />
        <DrillCard 
          title="Finger Exercise 1" 
          description="Basic warm-up for finger independence." 
          level="Beginner" 
        /> */}
        {drills.map((drill, index) => (
  <DrillCard key={index} drill={drill} onPress={() => {}} />
))}

      </View>

      <View className="mt-8">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-white text-lg font-semibold">Practice Drills</Text>
          <TouchableOpacity onPress={() => navigation.navigate('practiceDrill')}> 
            <Text className="text-blue-400">More</Text>
          </TouchableOpacity>
        </View>

        {/* Repeat for other practice drills */}
        {/* <DrillCard 
          title="Scale Drill 1" 
          description="Play major scale up and down two octaves." 
          level="Beginner" 
        />
        <DrillCard 
          title="Timing Drill" 
          description="Practice with metronome at 60 BPM." 
          level="Beginner" 
        /> */}

        {drills.map((drill, index) => (
  <DrillCard key={index} drill={drill} onPress={() => {}} />
))}

      </View>
    </ScrollView>
  );
}

