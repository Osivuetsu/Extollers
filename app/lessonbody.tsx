// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import Video from 'react-native-video'; // For video playback

// const LessonViewerScreen = ({  }) => {
//   // const { lesson_title, video_url, completion_status } = route.params();
//   const lesson_title = 'All about Push and Pulls'
//   const video_url = 'dhobdndkkdkndk'
//   const completion_status = 0
//   const [status, setStatus] = useState(completion_status);                                                               

//   const markAsCompleted = () => {
//     setStatus('Completed');
//   };

//   return (
//     <View style={styles.container} className='bg-black'>
//       <Text style={styles.title} className='text-white '>{lesson_title}</Text>
      
//       {/* Video Player */}
//       <Video 
//         source={{ uri: video_url }}
//         style={styles.video}
//         controls={true}
//         resizeMode="contain"
//       />

//       {/* Text Instructions */}
//       <Text style={styles.instructions}>
//         Learn the C Major Scale by following the steps in the video and practicing along.
//       </Text>

//       {/* Mark as Completed Button */}
//       <Button title="Mark as Completed" onPress={markAsCompleted} />
//       <Text>Status: {status}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
    
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 24,
//     // marginBottom: 16,
//   },
//   video: {
//     width: '100%',
//     // height: 200,
//     // marginBottom: 16,
//   },
//   instructions: {
//     fontSize: 16,
//     // marginBottom: 16,
//   }
// });

// export default LessonViewerScreen;
import { View, Text } from 'react-native'
import React from 'react'

const lessonbody = () => {
  return (
    <View>
      <Text>lessonbody</Text>
    </View>
  )
}

export default lessonbody
