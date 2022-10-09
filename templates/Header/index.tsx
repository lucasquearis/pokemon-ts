import Image from "next/image";
import React, { ReactElement } from "react";
import pokeIcon from "../../images/icon-pokemon.png";

function Header(): ReactElement {
  return (
    <div className="fixed top-0 mx-auto h-auto w-full shadow">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between p-5">
        <Image src={pokeIcon} alt="Pokemon Icone" width={60} height={60} />
        <h1>TESTE</h1>
      </div>
    </div>
  );
}

export default Header;
