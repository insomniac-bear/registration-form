import { FC, useState } from 'react';
import ScaledBlock from '../scaled-block/scaled-block';
import Examples from '../examples/examples';
import Requirements from '../requirements/requirements';
import { IReferenceProps } from './reference.props';
import referenceStyles from './reference.module.css';

const Reference: FC<IReferenceProps> = (): JSX.Element => {
  const [requirementsState, setRequirementsState] = useState(false);
  const [examplesState, setExamplesState] = useState(false);

  const toggleRequirementsState = () => {
    if (examplesState) {
      setExamplesState(!examplesState);
    }
    setRequirementsState(!requirementsState);
  }

  const toggleExamplesState = () => {
    if (requirementsState) {
      setRequirementsState(!requirementsState);
    }
    setExamplesState(!examplesState);
  }

  return(
    <div className={referenceStyles.container}>
      <p className={referenceStyles.notion}>Если у вас есть учетная запись - <a href="/#" className={referenceStyles.link}>Войдите в личный кабинет</a></p>
      <ScaledBlock
        name='Требования к программному обеспечению'
        isOpen={requirementsState}
        toggleState={toggleRequirementsState}
      >
        <Requirements />
      </ScaledBlock>
      <ScaledBlock
        name='Примеры документов и шаблоны'
        isOpen={examplesState}
        toggleState={toggleExamplesState}
      >
        <Examples />
      </ScaledBlock>
    </div>
  );
};

export default Reference;
