import React from "react";
import { HeroList } from "../components";

export const DcPage = () => {

  const publisher = 'DC Comics';

  return (
    <>
      <h1 className="mt-3">Dc Comics</h1>
      <hr />

      <HeroList  publisher={ publisher } />
      <br />
      <br />
      <br />
    </>
  );
};
