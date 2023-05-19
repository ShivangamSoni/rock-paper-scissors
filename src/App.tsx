export default function App() {
  return (
    <div className="min-h-screen bg-main text-white">
      <h1 className="text-3xl font-semibold font-mono uppercase">App</h1>
      <div className="flex items-center justify-start gap-4">
        <button className="w-24 h-24 flex items-center justify-center text-xl bg-rock">
          <img src="/assets/icon/icon-rock.svg" alt="" />
        </button>
        <button className="w-24 h-24 flex items-center justify-center text-xl bg-paper">
          <img src="/assets/icon/icon-paper.svg" alt="" />
        </button>
        <button className="w-24 h-24 flex items-center justify-center text-xl bg-scissors">
          <img src="/assets/icon/icon-scissors.svg" alt="" />
        </button>
        <button className="w-24 h-24 flex items-center justify-center text-xl bg-lizard">
          <img src="/assets/icon/icon-lizard.svg" alt="" />
        </button>
        <button className="w-24 h-24 flex items-center justify-center text-xl bg-spock">
          <img src="/assets/icon/icon-spock.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
