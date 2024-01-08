import { useState } from "react";
import { v4 as uuid } from "uuid";
import NewMadLibForm from "./NewMadLibForm";
import MadLib from "./MadLib";
import madLibList from "./MadLibList";

const MadLibs = () => {
  const INITIAL_STATE = [];
  const [userMadLibs, setUserMadLibs] = useState(INITIAL_STATE);

  const addMadLib = ({ noun1, noun2, adjective, color }) => {
    const randomIndex = Math.floor(Math.random() * madLibList.length);
    const randomMadlib = madLibList[randomIndex];

    const replacedMadLibContent = randomMadlib
      .replace("${noun1}", noun1)
      .replace("${noun2}", noun2)
      .replace("${adjective}", adjective)
      .replace("${color}", color);

    setUserMadLibs((userMadLibs) => [
      ...userMadLibs,
      { id: uuid(), madLibContent: replacedMadLibContent },
    ]);
  };

  const handleDelete = (id) => {
    const updatedUserMadLibs = userMadLibs.filter((madLib) => madLib.id !== id);
    setUserMadLibs(updatedUserMadLibs);
  };

  return (
    <>
      <h1>Mad Libs!</h1>
      <NewMadLibForm addMadLib={addMadLib} />
      <div>
        {userMadLibs.map((madLib) => (
          <MadLib
            key={madLib.id}
            id={madLib.id}
            onDelete={handleDelete}
            madLibContent={madLib.madLibContent}
          />
        ))}
      </div>
    </>
  );
};

export default MadLibs;
