import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const number = 333;
const vocalist = { name: "Dave Mustaine", band: "Megadeth" };
const guitarist = { name: "Marty Friedman", band: "Megadeth" };

const musicStyle = {
  color: "#61dafb",
  backgroundColor: "black",
  padding: "10px 20px",
};

const musicians = [
  { name: "Michael Romeo", band: "SymphonyX", role: "Guitarist" },
  { name: "Oli Herbert", band: "All That Remains", role: "Guitarist" },
  {
    name: 'Jimmy "The Rev" Sulivan',
    band: "Avenged Sevenfold",
    role: "Drummer",
  },
  { name: "Mike Portnoy", band: "Dream Theater", role: "Drummer" },
  { name: "John Petrucci", band: "Dream Theater", role: "Guitarist" },
  { name: "Jordan Ruddess", band: "Dream Theater", role: "Keyboardist" },
];

function App() {
  const bands = [
    "SymphonyX",
    "All That Remains",
    "Megadeth",
    "Archspire",
    "Arch Enemy",
  ];
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
      {bands.map((band) => (
        <Bands name={band}></Bands>
      ))}
      {musicians.map((musician) => (
        <Musicians
          name={musician.name}
          band={musician.band}
          role={musician.role}
        ></Musicians>
      ))}

      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>

  );
}

function Person() {
  return (
    <div className="person">
      <h1> Alkaline Foster </h1>
      <p> Learning React </p>
    </div>
  );
}
function Person2(props) {
  return (
    <div className="person">
      <h1> Name: {props.name} </h1>
      <p> Job: {props.job} </p>
    </div>
  );
}
function Bands(props) {
  return (
    <div className="band">
      <h1> BAND: {props.name} </h1>
    </div>
  );
}
function Musicians(props) {
  return (
    <div className="musician">
      <h1> Name: {props.name} </h1>
      <h1> Role: {props.role} </h1>
      <h1> Band: {props.band} </h1>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(55);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </div>
  )
}

function ExternalUsers(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h2>External Users: {users.length}</h2>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div className="user">
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}


export default App;
