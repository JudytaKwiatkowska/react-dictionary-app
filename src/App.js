import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <h1 className="App-header">Dictionary App</h1>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="text-center">
        This project was coded by Judyta Kwiatkowska and is{" "}
        <a
          href="https://github.com/JudytaKwiatkowska/react-dictionary-app.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://tangerine-florentine-1071b2.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
