import Image from "next/image";
import React, { ReactElement } from "react";
import { PokeTypes } from "../pages";

interface IPokemon {
  pokemon: PokeTypes;
}

export default function Card({ pokemon }: IPokemon): ReactElement {
  console.log(pokemon);
  return (
    <div className="flex h-60 w-60 flex-col items-center justify-between p-4 shadow">
      <p>{pokemon.pokemonName}</p>
      <p>{`#${pokemon.pokeNumber}`}</p>
      <div>
        <Image
          src={
            pokemon.pokemonInfos.sprites.other["official-artwork"].front_default
          }
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
