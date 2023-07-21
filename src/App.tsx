import logo from "/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="pt-4 animate-pulsate hover select-none">
      <div>
        <a
          className="logo"
          href="https://github.com/jradziejewski"
          target="_blank"
        >
          <img src={logo} alt="logo" />
        </a>
      </div>
      <h1 className="p-1  font-bold select-none">
        <span className="">COMING</span> SOON
      </h1>
    </div>
  );
}

export default App;
