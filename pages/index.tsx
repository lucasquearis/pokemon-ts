import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import PokeLogo from "../images/logo-pokemon.png";
import { GetStaticProps } from "next";
import Card from "../components/Card";

interface PokeResults {
  name: string;
  url: string;
}

interface PokeInfos {
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export interface PokeTypes {
  pokeNumber: number;
  pokemonName: string;
  pokemonInfos: PokeInfos;
}

interface IResponseJson {
  results: PokeResults[];
}

interface IHomeProps {
  pokemons?: PokeTypes[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  const maxPokemons = 151;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const { results }: IResponseJson = await fetch(
    `${api}/?limit=${maxPokemons}`
  ).then(async (result) => await result.json());

  const formatedData = await Promise.all(
    results.map(async ({ name, url }, index: number) => ({
      pokeNumber: index + 1,
      pokemonName: name,
      pokemonInfos: await fetch(url).then(
        async (response) => await response.json()
      ),
    }))
  );

  return {
    props: {
      pokemons: formatedData,
    },
  };
};

const Home: NextPage = ({ pokemons }: IHomeProps) => {
  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center pt-40">
      <div className="flex w-96 flex-col gap-8">
        <Image src={PokeLogo} alt="Logo Pokemon" />
        <input
          className="h-9 rounded bg-white text-center font-sans shadow-md outline-none"
          placeholder="Busque aqui seu pokemon!"
        />
      </div>
      <div className="my-24 flex flex-wrap items-center justify-center gap-5">
        {pokemons?.map((pokemon) => (
          <Card key={pokemon.pokeNumber} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Home;
