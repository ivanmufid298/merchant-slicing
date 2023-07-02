import { fetchAskMeData } from '@/redux-toolkit/app/askme/askme.thunk';
import { useAppDispatch } from '@/redux-toolkit/hooks';
import { useEffect } from 'react';
import AskMeDesktop from '../AskMeDesktop/AskMeDesktop';
import AskMeMobile from '../AskMeMobile/AskMeMobile';

export interface AskMeProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  isDesktop: boolean;
}

const AskMe: React.FC<AskMeProps> = ({ onClose, isDesktop }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAskMeData());
  }, [dispatch]);

  return isDesktop ? (
    <AskMeDesktop onClose={onClose} />
  ) : (
    <AskMeMobile onClose={onClose} />
  );
};

export default AskMe;
