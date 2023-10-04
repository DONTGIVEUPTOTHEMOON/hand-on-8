import "./App.css";
import Navbar from "./components/Navbar";
import BlogContainer from "./components/BlogContainer";
import PodcastContainer from "./components/PodcastContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BlogContainer />
      <PodcastContainer />
    </div>
  );
}

export default App;
