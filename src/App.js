import { useState } from "react";
import List from "./List";
import data from "./data";


function App() {
const [people, Setpeople] = useState(data); 

 

  return( <main>
    <section className="container">
      <h3>{people.length} Birthday today</h3>
      <List people = {people}/>
      <button onClick={() => Setpeople([]) }>Clear All</button>
    </section>
  </main>
  );
}

export default App;
