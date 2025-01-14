import React, { useEffect } from 'react';
import SignIn, { SignInFields } from './SignIn/SignIn';
import SignUp, { SignUpFields } from './SignUp/SignUp';
import cn from 'clsx';
import styles from './AuthScreen.module.css';
import { useTranslation } from 'react-i18next';
import { AppDispatch } from '../../app/store/store';
import { useDispatch } from 'react-redux';
import { signout } from '../../features/Auth/model/thunks';
import { useSigninMutation, useSignupMutation } from 'src/features/Auth/model/api';
import SignOut from './SignOut/SignOut';
import { useGetProfileQuery } from 'src/entities/User/model/api';
import { saveTokenToLocalStorage } from 'src/shared/lib/localStorage';
import { AuthResult } from 'src/shared/types/serverTypes';
import { setAuthenticated } from 'src/features/Auth/model/slice';

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
  const {
    isLoading: isLoadingProfile,
    isError: isErrorProfile,
    error: errorProfile,
    data: dataProfile,
  } = useGetProfileQuery();

  const setLoginedState = (data: AuthResult) => {
    saveTokenToLocalStorage(data.token);
    // setCurrentUser(dataProfile);
    dispatch(setAuthenticated(data));
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

  const handleSignInSubmit = async (data: SignInFields) => {
    await signin({ email: data.email, password: data.password });
    // setLoginedState(dataSignin);
  };
  const handleSignUpSubmit = async (data: SignUpFields) => {
    await signup({ email: data.email, password: data.password, commandId: '' });
    // setLoginedState(dataSignup);
  };
  const handleSignOut = () => dispatch(signout);

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
