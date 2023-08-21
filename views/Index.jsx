import React from "react";

function Index({ pokemon }) {
  return (
    <div>
      <h1>See All The Pokemon!</h1>
      {pokemon.map((pokemon, index) => {
        return (
          <li key={index}>
            <a href={`/pokemon/${index}`}>{pokemon.name}</a>
            <br />
          </li>
        );
      })}
    </div>
  );
}

module.exports = Index;
