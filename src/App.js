import logo from "./logo.svg";
import "./App.css";

const number = 333;
const vocalist = { name: "Dave Mustaine", band: "Megadeth" };
const guitarist = { name: "Marty Friedman", band: "Megadeth" };

const musicStyle = {
  color: "#61dafb",
  backgroundColor: "black",
  padding: "10px 20px",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>JSX</h3>
        <div className="container">
          <h6>Hello World</h6>
        </div>
        <div className="music">
          <h6>Number1: {number}</h6>
          <h6>Number2: {222 + number}</h6>
          <h6 style={musicStyle}>
            Vocalist: {vocalist.name}, Band: {vocalist.band}
          </h6>
          <h6
            style={{
              color: "#61dafb",
              backgroundColor: "black",
              padding: "10px 20px",
            }}
          >
            Vocalist: {guitarist.name}, Band: {guitarist.band}
          </h6>
        </div>
      </header>
      <h3>Components: Similar in Look, Different in Data</h3>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h3>New Component</h3>
      <Person2 name="Colkdaline Costfer" job="Bodyguard"></Person2>
      <Person2 name="Hash" job="Coding"></Person2>
      <Person2 name="Asterix Deep" job="Gaming"></Person2>
      <Person2 name="Alkaline Foster" job="Everything"></Person2>
    </div>
  );
}

function Person(){
  return(
    <div className="person">
      <h1> Alkaline Foster </h1>
      <p> Learning React </p>
    </div>
  )
}
function Person2(props){
  return(
    <div className="person">
      <h1> Name: {props.name} </h1>
      <p> Job: {props.job} </p>
    </div>
  )
}

export default App;
