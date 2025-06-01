import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const drills = ["C Major", "G Major", "A Minor"];

export default function PracticeDrillScreen() {
  const [currentDrill, setCurrentDrill] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    nextDrill();
  }, []);

  const nextDrill = () => {
    const next = drills[Math.floor(Math.random() * drills.length)];
    setCurrentDrill(next);
    setCount(prev => prev + 1);
  };

  return (
    <View className="flex-1 bg-black px-4 justify-center items-center">
      <Text className="text-white text-lg mb-4">Practice: Play This Chord</Text>
      <Text className="text-white text-2xl font-bold mb-6">{currentDrill}</Text>

      <TouchableOpacity
        className="bg-primary px-6 py-4 rounded-xl"
        onPress={nextDrill}
      >
        <Text className="text-white">Next Drill</Text>
      </TouchableOpacity>

      <Text className="text-white mt-6">Completed: {count - 1} drills</Text>
    </View>
  );
}
