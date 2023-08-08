import { HeroList } from "../components";

export const MarvelPage = () => {
  
  const publisher = "Marvel Comics";

  return (
    <>
      <h1 className="mt-3">Marvel Comics</h1>
      <hr className="mb-4"/>

      <HeroList publisher={ publisher } />
      <br />
      <br />
      <br />
    </>
  );
};
