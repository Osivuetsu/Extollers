import React, { useState } from 'react';
import { View, FlatList, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const lessonsData = [
  { id: '1', lesson_title: 'C Major Scale', description: 'Learn how to play the C Major scale on Piano.', difficulty: 'Beginner', status: 'Not Started' },
  { id: '2', lesson_title: 'D Minor Scale', description: 'Learn how to play the D Minor scale on Guitar.', difficulty: 'Intermediate', status: 'In Progress' },
  { id: '3', lesson_title: 'E Major Scale', description: 'Learn how to play the E Major scale on Violin.', difficulty: 'Advanced', status: 'Completed' },
];

const LessonCard = ({ lesson }) => (
  <View >
    <Text >{lesson.lesson_title}</Text>
    <Text>{lesson.description}</Text>
    <Text>Difficulty: {lesson.difficulty}</Text>
    <Text>Status: {lesson.status}</Text>
  </View>
);

const LessonListScreen = () => {
  const [filteredLessons, setFilteredLessons] = useState(lessonsData);

  const filterLessons = (level) => {
    const filtered = lessonsData.filter(lesson => lesson.difficulty === level);
    setFilteredLessons(filtered);
  };

  return (
    <View>
      <Button title="Filter by Beginner" onPress={() => filterLessons('Beginner')} />
      <Button title="Filter by Intermediate" onPress={() => filterLessons('Intermediate')} />
      <Button title="Filter by Advanced" onPress={() => filterLessons('Advanced')} />
      
      <FlatList
        data={filteredLessons}
        renderItem={({ item }) => <LessonCard lesson={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
    
  },
  card: {
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
   
    padding: 15,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  }
});

export default LessonListScreen;


