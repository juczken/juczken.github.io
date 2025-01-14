import React, { useEffect } from 'react';
import { useGetProfileQuery } from 'src/entities/User/model/api';
import { AppDispatch } from '../store/store';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from 'src/entities/User/model/slice';
import Loader from './Loader/Loader';
import { getTokenFromLocalStorage } from '../../shared/lib/localStorage';

const StateUpdater: React.FC = () => {
  console.log('StateUpdater');
  const { isSuccess, data, isFetching, isLoading, status } = useGetProfileQuery(undefined, {
    skip: getTokenFromLocalStorage() === null,
    selectFromResult: ({ isSuccess, data, isFetching, isLoading, status }) => ({
      isSuccess,
      data,
      isFetching,
      isLoading,
      status,
    }),
  });
  console.log(isSuccess, data, isFetching, isLoading);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) {
      dispatch(setCurrentUser(data));
      console.log('StateUpdater setCurrentUser', data);
    }
  }, [isSuccess, data, status]);

  return (
    <>
      <Loader visible={isLoading || isFetching} />
    </>
  );
};

export default StateUpdater;
