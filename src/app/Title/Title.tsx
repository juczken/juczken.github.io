import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import React, { useEffect } from 'react';

const Title: React.FC = () => {
  const userState = useSelector((state: RootState) => state.user);
  useEffect(() => {
    document.title = `My Project${userState && ` - ${userState.currentUser.name}`}`;
  }, [userState]);
  return <></>;
};
export default Title;
