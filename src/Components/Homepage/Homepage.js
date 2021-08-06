import React from "react";
import { useState, useEffect } from "react";
import Details from "../Details/Details";
import HomepageStructure from "../HomepageStructure/HomepageStructure";

const Homepage = () => {
  const [teamId, setTeamId] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain"
    )
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.teams.length; i++) {
          const teamId = data.teams[i];
          console.log(teamId);
        }
      });
  });

  return (
    <div>
      <HomepageStructure></HomepageStructure>
              {
                teamId.map(()=> <HomepageStructure teamId={teamId}></HomepageStructure>)
              }    

{
                teamId.map(()=> <Details teamId={teamId}></Details>)
              }    
    </div>
  );
};

export default Homepage;
