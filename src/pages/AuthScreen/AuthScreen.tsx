import React from 'react';
import SignIn, { SignInFields } from './SignIn/SignIn';
import SignUp, { SignUpFields } from './SignUp/SignUp';
import cn from 'clsx';
import styles from './AuthScreen.module.css';
import { useTranslation } from 'react-i18next';
import useAuth from '../../shared/contexts/AuthContext/AuthContext';

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
  const { handleSignIn, handleSignOut, handleSignUp } = useAuth();

  const handleSignInSubmit = (data: SignInFields) => {
    handleSignIn({ email: data.email, password: data.password });
  };
  const handleSignUpSubmit = (data: SignUpFields) => {
    handleSignUp({ email: data.email, password: data.password });
  };

  if (authAction === AuthAction.SignOut) {
    handleSignOut();
    return <div>{t('AuthScreen.signOut')}</div>;
  }

  const signIn = <>{authAction === AuthAction.SignIn && <SignIn onSubmit={handleSignInSubmit} />}</>;
  const signUp = <>{authAction === AuthAction.SignUp && <SignUp onSubmit={handleSignUpSubmit} />}</>;

  return (
    <div className={cn(styles.page)}>
      <div>
        {signIn}
        {signUp}
      </div>
    </div>
  );
};

export default AuthScreen;
