import React from "react";
import PropTypes from "prop-types";

function UserDetails({ user, repos, onReset }) {
  return (
    <div>
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.name} width="100" />
          <h2>{user.name}</h2>
          <p>{user.location}</p>
          <p>{user.bio}</p>
        </div>
      )}
      {repos && (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      )}
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.object,
  repos: PropTypes.array,
  onReset: PropTypes.func.isRequired,
};

export default UserDetails;
