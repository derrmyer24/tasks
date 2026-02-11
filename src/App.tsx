import React from "react";
import "./App.css";
import catPhoto from "./spexels-peter-xie-371876898-34574274.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript</h1> <br />
                Hello World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Derrick was here!
            </p>
            <img src={catPhoto} alt="free use cute cat photo" />
        </div>
    );
}

export default App;
