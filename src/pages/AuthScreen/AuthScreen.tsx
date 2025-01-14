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
    console.log(authState, userState, profileState);
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

  // if (isLoadingProfile || isLoadingSignin || isLoadingSignup) {
  if (isLoadingSignin || isLoadingSignup) {
    return <div>{'loading'}</div>;
  }
  console.log(authAction);
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
