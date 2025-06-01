import { ScrollView,Text } from "react-native";
import { useState } from "react";
import { View } from "react-native";
import Greeting from "../components/Greeting";
import InstrumentSelector from "../components/InstrumentSelector";
import DailyProgress from "../components/DailyProgress";
import ResumeCard from "../components/ResumeCard";
import QuickActions from "../components/QuickActions";
import Recommendation from "../components/Recommendation";
import RecentActivity from "../components/RecentActivity";
// import '../globals.css'

const instruments = ["Guitar", "Piano", "Drums"];

export default function Home() {
  const [selectedInstrument, setSelectedInstrument] = useState("Guitar");

  return (
    <ScrollView className="flex-1 bg-black px-4 pt-5 font-normal">

      <Greeting instrument={selectedInstrument}  />
      <View className=" bg-slate-900 p-6 rounded-2xl mb-6">
        <Text className="color-gray-100">Your Instruments:</Text>
        <InstrumentSelector
          instruments={instruments}
          selectedInstrument={selectedInstrument}
          onSelect={setSelectedInstrument}
        />
                    
        <DailyProgress />
      </View>
     
      <ResumeCard />
      <QuickActions />
      <Recommendation />
      <RecentActivity />
    </ScrollView>
  );
}


// import { ScrollView, Text, SafeAreaView, View } from "react-native";
// import { useState } from "react";
// import Greeting from "../components/Greeting";
// import InstrumentSelector from "../components/InstrumentSelector";
// import DailyProgress from "../components/DailyProgress";
// import ResumeCard from "../components/ResumeCard";
// import QuickActions from "../components/QuickActions";
// import Recommendation from "../components/Recommendation";
// import RecentActivity from "../components/RecentActivity";

// const instruments = ["Guitar", "Piano", "Drums"];

// export default function Home() {
//   const [selectedInstrument, setSelectedInstrument] = useState("Guitar");

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
//       <ScrollView className="flex-1 px-4 pt-5 font-normal" contentContainerStyle={{ paddingBottom: 30 }}>
//         <Greeting instrument={selectedInstrument} />
//         <View className="bg-slate-900 p-6 rounded-2xl mb-6">
//           <Text className="text-gray-100">Your Instruments:</Text>
//           <InstrumentSelector
//             instruments={instruments}
//             selectedInstrument={selectedInstrument}
//             onSelect={setSelectedInstrument}
//           />

//           <DailyProgress />
//         </View>

//         <ResumeCard />
//         <QuickActions />
//         <Recommendation />
//         <RecentActivity />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
