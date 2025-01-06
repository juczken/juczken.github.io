import React from 'react';
import SignIn, { SignInFields } from './SignIn/SignIn';
import SignUp, { SignUpFields } from './SignUp/SignUp';
import cn from 'clsx';
import styles from './AuthScreen.module.css';
import { useTranslation } from 'react-i18next';
import { AppDispatch, RootState } from '../../app/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { signout, signin, signup } from '../../features/Auth/model/thunks';

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
  const authStatus = useSelector((state: RootState) => state.auth.status);
  const authError = useSelector((state: RootState) => state.auth.error);

  const handleSignInSubmit = (data: SignInFields) => {
    dispatch(signin({ email: data.email, password: data.password }));
  };
  const handleSignUpSubmit = (data: SignUpFields) => {
    dispatch(signup({ email: data.email, password: data.password }));
  };

  if (authAction === AuthAction.SignOut) {
    dispatch(signout());

    if (authStatus === 'loading') {
      return <div>{'loading'}</div>;
    }
    if (authStatus === 'failed') {
      return <div className={styles.error}>{authError}</div>;
    }
    return <div>{t('AuthScreen.signOut')}</div>;
  }

  if (authStatus === 'loading') {
    return <div>{'loading'}</div>;
  }

  const signIn = <>{authAction === AuthAction.SignIn && <SignIn onSubmit={handleSignInSubmit} />}</>;
  const signUp = <>{authAction === AuthAction.SignUp && <SignUp onSubmit={handleSignUpSubmit} />}</>;

  return (
    <div className={cn(styles.page)}>
      <div>
        {signIn}
        {signUp}
      </div>
      {authError && <div className={styles.error}>{authError}</div>}
    </div>
  );
};

export default AuthScreen;
