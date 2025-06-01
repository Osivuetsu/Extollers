import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const questions = [
  {
    question: "What chord is made up of C-E-G?",
    options: ["C Major", "A Minor", "G Major", "D Minor"],
    answer: "C Major"
  },
  {
    question: "What is the pentatonic scale?",
    options: ["DRMSLD", "DRSLTD", "DMSLTDr", "RMFSL"],
    answer: "DRMSLD"
  },
  {
    question: "What chord is made up of C-E-G?",
    options: ["C Major", "A Minor", "G Major", "D Minor"],
    answer: "C Major"
  },
  {
    question: "What chord is made up of C-E-G?",
    options: ["C Major", "A Minor", "G Major", "D Minor"],
    answer: "C Major"
  },
  // Add more questions here
];

export default function TakeAssessmentScreen() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const current = questions[index];

  const handleAnswer = (option: string) => {
    if (option === current.answer) setScore(prev => prev + 1);
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    // <View>
        <View className="flex-1 bg-black px-4 justify-center">
                <Text className='text-amber-800 mb-4 text-2xl font-bold'>Keyboard Assessment-beginners</Text>
            {showResult ? (
                <View className="items-center">
                <Text className="text-white text-xl mb-4">Assessment Complete!</Text>
                <Text className="text-white text-lg">Your Score: {score} / {questions.length}</Text>
                </View>
            ) : (
                <View>
                <Text className="text-white text-lg mb-6">{current.question}</Text>
                {current.options.map(option => (
                    <TouchableOpacity
                    key={option}
                    onPress={() => handleAnswer(option)}
                    className="bg-primary mb-3 p-4 rounded-xl border border-gray-600"
                    >
                    <Text className="text-white text-base">{option}</Text>
                    </TouchableOpacity>
                ))}
                </View>
            )}
        </View>
    // </View>
  );
}
