import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city..." />
        <button>Search</button>
      </form>
    </div>
  );
}

<footer>
  <a href="https://github.com/naoloui/Weather-app-react-js">
    Open sourced, by Naomi Laufer
  </a>
</footer>;
