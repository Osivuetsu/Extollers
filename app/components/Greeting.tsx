import { View, Text,Image } from "react-native";
// import op from "./f.png"

export default function Greeting({ instrument }: { instrument: string }) {
  return (
    <View className="mb-5 flex-row ">
      {/* <img src='./f.png'/> */}
      <View className=" bg-amber-600 p-5  mr-2 rounded-full "></View>
      <Text className="text-xl mt-1 font-bold text-gray-100">Welcome, Fortune!</Text>
      {/* <Text className="text-base text-gray-600 mt-1">
        Ready to level up your {instrument.toLowerCase()} skills?
      </Text> */}
    </View>
  );
}
