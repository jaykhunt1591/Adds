import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AdComponent from "./components/AdComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: 20 }}>
      {/* Top Ad Banner */}
      <AdComponent />
      <h1>Welcome to My Website</h1>
      <p>
        This is a sample homepage. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Donec at lorem vulputate, sodales risus nec, convallis
        ipsum.
      </p>
      {/* Mid-Content Ad */}
      <AdComponent />
      <p>
        Continue reading more content here. Nulla facilisi. Pellentesque eu
        tortor eu purus tincidunt tincidunt.
      </p>
    </div>
  );
}

export default App;
