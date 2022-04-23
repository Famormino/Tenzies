import Die from "./components/Die";

export default function App() {
  return (
    <main>
      <div className="dice-container">
        <Die number={1} />
        <Die number={2} />
        <Die number={3} />
        <Die number={4} />
        <Die number={5} />
        <Die number={6} />
        <Die number={1} />
        <Die number={2} />
        <Die number={3} />
        <Die number={4} />
      </div>
    </main>
  );
}
