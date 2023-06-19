import { useEffect } from "react";
import ContainerCard from '../common/ContainerCard';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectYaml, selectSchema, setNextStepEnabled } from '../wizard/wizardSlice';

const Configuration = () => {

  const dispatch = useAppDispatch();
  const schema = useAppSelector(selectSchema);
  const yaml = useAppSelector(selectYaml);

  return (
    <ContainerCard title="Configuration" description="Configure Zowe initilaization and components"> 
      
    </ContainerCard>
  );
};

export default Configuration;
