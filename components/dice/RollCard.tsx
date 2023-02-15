import { FC } from 'react';

export const RollCard: FC = () => {
  const [diceType, setDiceType] = setState();

  return (
    <div className="">
      <h2>May Tymora be with you...</h2>
      <select onChange={(e) => setDiceType(e.target.value)}>
        <option value="20">D-20</option>
      </select>
    </div>
  );
};
