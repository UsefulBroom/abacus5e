import { FC, useState } from 'react';

export const RollCard: FC = () => {
  const [diceType, setDiceType] = useState();
  const [asda, setAsda] = useState();
  const [modifier, setModifier] = useState();
  const [total1, setTotal1] = useState({});
  const [total2, setTotal2] = useState();

  const rollDice = () => {
    console.log('here');

    // if (diceType != null) {
    //   const min = 1;
    //   const max: number = diceType;
    //   setTotal1(Math.round(Math.random() * (max - min) + min));
    // }
  };

  return (
    <div className="text-black">
      <h2 className="font-serif text-2xl font-semibold text-cyan-500">May Tymora be with you...</h2>
      <form className="flex flex-col p-3 rounded-md shadow-md w-fit shadow-cyan-700">
        {/* Select Dice Type */}
        <select
          value={diceType}
          className="mx-2 text-xl font-semibold text-center border-transparent shadow-inner shadow-cyan-700 bg-cyan-900 text-cyan-500 rounded-xl"
        >
          <option value="20">D-20</option>
          <option value="12">D-12</option>
          <option value="10">D-10</option>
          <option value="8">D-8</option>
          <option value="6">D-6</option>
          <option value="4">D-4</option>
        </select>
        {/* Roll Modifier */}
        <input
          className="w-24 px-2 mx-2 mt-1 font-serif text-4xl font-semibold text-center border-transparent shadow-inner rounded-xl text-cyan-500 shadow-cyan-700 bg-cyan-900"
          type="number"
          name="modifier"
          id="modifier"
          placeholder="0"
          defaultValue={0}
        />
        {/* Advantage/Disadvantage/Straight */}
        <select
          className="mx-2 mt-1 text-xl font-semibold text-center border-transparent shadow-inner shadow-cyan-700 bg-cyan-900 text-cyan-500 rounded-xl"
          name="asda"
          id="asda"
        >
          <option value="0">Advantage</option>
          <option value="1">Straight</option>
          <option value="2">Dis-Advantage</option>
        </select>
        <button type="submit" onClick={rollDice}>
          Roll Dice
        </button>
      </form>
    </div>
  );
};
