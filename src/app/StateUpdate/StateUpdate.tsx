import React, { useEffect } from 'react';
import { useGetProfileQuery } from 'src/entities/User/model/api';
import { AppDispatch } from '../store/store';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from 'src/entities/User/model/slice';
import Loader from './Loader/Loader';

const StateUpdater: React.FC = () => {
  const { isSuccess, data, isFetching, isLoading } = useGetProfileQuery();
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) {
      dispatch(setCurrentUser(data));
    }
  }, [isSuccess, data]);

  return (
    <>
      <Loader visible={isLoading || isFetching} />
    </>
  );
};

export default StateUpdater;
