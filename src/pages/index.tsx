import HomeScreen from "@/components/Home";
import ThingsScreen from "@/components/Things";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-hidden">
      <HomeScreen />
      <ThingsScreen />
    </main>
  );
}
