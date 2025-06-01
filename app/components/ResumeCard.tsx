import { View, Text, TouchableOpacity } from "react-native";

export default function ResumeCard() {
  return (
    <View className=" p-2 rounded-2xl mb-6">
      <Text className="text-white text-lg font-semibold">Resume: Major Chords Practice</Text>
      <Text className="text-amber-100 text-sm mb-2">75% complete</Text>
      {/* <TouchableOpacity className="bg-slate-800 py-2 px-4 rounded-full w-32 mt-2">
        <Text className="text-primary text-center  color-white font-semibold">Continue</Text>
      </TouchableOpacity> */}
    </View>
  );
}
