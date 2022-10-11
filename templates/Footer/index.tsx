import React, { ReactElement } from "react";

function Footer(): ReactElement {
  return (
    <footer className="fixed bottom-0 mx-auto h-auto w-full bg-slate-400 shadow">
      <div className="mx-auto flex max-w-[1200px] items-center justify-center p-5">
        <p>© 2022 - Lucas A. Santos - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
