import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import PokeLogo from "../images/logo-pokemon.png";

const Home: NextPage = () => {
  return (
    <div className="mx-auto mt-48 flex w-full max-w-[1200px] flex-col gap-20">
      <Image src={PokeLogo} alt="Logo Pokemon" />
      <input className="max-w-96 bg-white" />
    </div>
  );
};

export default Home;
