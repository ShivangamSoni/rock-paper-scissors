import Header from '@features/Header';
import GameScreen from '@features/GameScreen';
import Footer from '@features/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-main text-white font-primary font-semibold">
      <div className="w-11/12 max-w-screen-lg m-auto py-16 grid grid-rows-[auto_1fr_auto] gap-12 min-h-screen">
        <Header />
        <GameScreen />
        <Footer />
      </div>
    </div>
  );
}
