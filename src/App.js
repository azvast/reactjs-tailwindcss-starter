import logo from "./logo.svg";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <img src={logo} alt="logo" width={280} className="mx-auto" />
        <h2 className="mt-5 text-4xl font-bold">
          Welcome to ReactJS + TailwindCSS Stater!
        </h2>
      </div>
    </div>
  );
}

export default App;
