import { useEffect } from "react";
import ContainerCard from '../common/ContainerCard';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectYaml, selectSchema, setNextStepEnabled } from '../wizard/wizardSlice';

const Certificates = () => {

  const dispatch = useAppDispatch();
  const schema = useAppSelector(selectSchema);
  const yaml = useAppSelector(selectYaml);

  return (
    <ContainerCard title="Certificates" description="Configure certificates"> 
      
    </ContainerCard>
  );
};

export default Certificates;
