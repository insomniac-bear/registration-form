import { FC } from 'react';
import { IScaledBlockProps } from './scaled-block.props';
import scaledBlockStyles from './scaled-block.module.css';

const ScaledBlock: FC<IScaledBlockProps> = ({ name, isOpen, children, toggleState }): JSX.Element => {
  return (
    <div className={isOpen ? scaledBlockStyles.container_opened : scaledBlockStyles.container}>
      <button
        className={`${scaledBlockStyles.button} ${isOpen && scaledBlockStyles.button_opened}`}
        onClick={() => toggleState()}
      >
        {name}
      </button>
      { children }
    </div>
  );
};

export default ScaledBlock;