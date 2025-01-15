import React, { useEffect } from 'react';
import SignIn, { SignInFields } from './SignIn/SignIn';
import SignUp, { SignUpFields } from './SignUp/SignUp';
import SignOut from './SignOut/SignOut';
import cn from 'clsx';
import styles from './AuthScreen.module.css';
import { useTranslation } from 'react-i18next';
import { AppDispatch, RootState } from '../../app/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../features/Auth/model/thunks';
import { setAuthenticated } from '../../features/Auth/model/slice';
import { useSigninMutation, useSignupMutation } from '../../features/Auth/model//api';
import { saveTokenToLocalStorage } from 'src/shared/lib/localStorage';
import { AuthResult } from 'src/shared/types/serverTypes';
import { useGetProfileQuery } from '../../entities/User/model/api';
import { setCurrentUser } from 'src/entities/User/model/slice';

export enum AuthAction {
  SignIn = 'signIn',
  SignUp = 'signUp',
  SignOut = 'signOut',
}

type AuthScreenProps = {
  authAction: AuthAction;
};

const AuthScreen: React.FC<AuthScreenProps> = ({ authAction }) => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();

  const authState = useSelector((state: RootState) => state.auth);
  const userState = useSelector((state: RootState) => state.user);
  const profileState = useSelector((state: RootState) => state.profile);

  const [
    signin,
    {
      isLoading: isLoadingSignin,
      isError: isErrorSignin,
      error: errorSignin,
      data: dataSignin,
      isSuccess: isSuccessSignin,
    },
  ] = useSigninMutation();
  const [
    signup,
    {
      isLoading: isLoadingSignup,
      isError: isErrorSignup,
      error: errorSignup,
      data: dataSignup,
      isSuccess: isSuccessSignup,
    },
  ] = useSignupMutation();
  // const {
  //   isLoading: isLoadingProfile,
  //   isError: isErrorProfile,
  //   error: errorProfile,
  //   data: dataProfile,
  // } = useGetProfileQuery();

  const setLoginedState = (data: AuthResult) => {
    saveTokenToLocalStorage(data.token);
    // setCurrentUser(dataProfile);
    dispatch(setAuthenticated(data.token));
  };

  useEffect(() => {
    if (isSuccessSignin) {
      setLoginedState(dataSignin);
    }
  }, [isSuccessSignin, dataSignin]);

  useEffect(() => {
    if (isSuccessSignup) {
      setLoginedState(dataSignup);
    }
  }, [isSuccessSignup, dataSignup]);

  const {
    isLoading: isLoadingProfile,
    isError: isErrorProfile,
    isSuccess: isSuccessProfile,
    error: errorProfile,
    data: dataProfile,
  } = useGetProfileQuery(undefined, { skip: !isSuccessSignin && !isSuccessSignup });
  console.log('authscreen postgetProfile', isSuccessSignin, isSuccessProfile, errorProfile);

  useEffect(() => {
    console.log('useEffect - profile');
    if (isSuccessProfile) {
      console.log('useEffect - profile - isSuccess');
      dispatch(setCurrentUser(dataProfile));
    }
  }, [isSuccessProfile, dataProfile]);

  const handleSignInSubmit = async (data: SignInFields) => {
    await signin({ email: data.email, password: data.password });
  };
  const handleSignUpSubmit = async (data: SignUpFields) => {
    await signup({ email: data.email, password: data.password, commandId: '' });
  };
  const handleSignOut = () => dispatch(signout());

  if (isLoadingProfile || isLoadingSignin || isLoadingSignup) {
    return <div>{'loading'}</div>;
  }
  const signIn = <>{authAction === AuthAction.SignIn && <SignIn onSubmit={handleSignInSubmit} />}</>;
  const signUp = <>{authAction === AuthAction.SignUp && <SignUp onSubmit={handleSignUpSubmit} />}</>;
  const signOut = <>{authAction === AuthAction.SignOut && <SignOut onSignOut={handleSignOut} />}</>;

  return (
    <div className={cn(styles.page)}>
      <div>
        {signIn}
        {signUp}
        {signOut}
      </div>
      {/* {authError && <div className={styles.error}>{authError}</div>} */}
    </div>
  );
};

export default AuthScreen;
