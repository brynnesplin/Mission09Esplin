import './App.css'
import teamData from './CollegeBasketballTeams.json';

// store the team data from CollegeBasketballTeams to teams
const teams = teamData.teams

// function to return the React component for the heading
function Heading() {
  return (
  <>
  <h1>March Madness</h1>
  <p>This is a list of all the colleges in NCAA Basketball</p>
  <p>Who will win this year's March Madness Tournament?</p><br></br>

  </>)
}

// function that takes the necessary info about each time and returns a card as a React Component
function TeamCard({
  school, 
  name, 
  city,
  state
}:{
  school:string; 
  name:string; 
  city:string;
  state:string;
}) {

  return(
    <>
    <div className="card">
      <h4>{school}</h4>
      <p>Mascot: {name}</p>
      <p>Location: {city}, {state}</p>
    </div>
    </>
  );

}

// function that uses map to cerate a card for each team in teams and returns a React component for the list 
function TeamList(){
  return(
    <>
    <div className="container">
    {teams.map((singleTeam) => (
      <TeamCard{...singleTeam}/>
    ))}
    </div>
    </>
  )
}

function App() {

  return (
    <>
      <Heading/>
      <TeamList/>
    </>
  )
}

export default App
