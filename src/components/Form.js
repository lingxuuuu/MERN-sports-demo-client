import React, { useState } from "react";

function Form({
  onSubmitHandler,
  initialFirstName,
  initialLastName,
  initialTeam,
  initialSport,
}) {
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [sport, setSport] = useState(initialTeam);
  const [team, setTeam] = useState(initialSport);

  return (
    <div>
      <form
        onSubmit={(e) => {
          onSubmitHandler(e, { firstName, lastName, sport, team });
        }}
      >
        <p>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </p>
        <p>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            name="lasttName"
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </p>
        <p>
          <label>Sport</label>
          <input
            type="text"
            value={sport}
            name="sport"
            onChange={(e) => setSport(e.target.value)}
          ></input>
        </p>
        <p>
          <label>Team</label>
          <input
            type="text"
            value={team}
            name="team"
            onChange={(e) => setTeam(e.target.value)}
          ></input>
        </p>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
