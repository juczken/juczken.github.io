import React from 'react';
import SignIn, { SignInFields } from './SignIn/SignIn';
import SignUp, { SignUpFields } from './SignUp/SignUp';
import cn from 'clsx';
import styles from './AuthScreen.module.css';
import { useTranslation } from 'react-i18next';

export enum AuthAction {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

type AuthScreenProps = {
  authAction: AuthAction;
};

const AuthScreen: React.FC<AuthScreenProps> = ({ authAction }) => {
  const { t } = useTranslation();

  const handleSignInSubmit = (data: SignInFields) => {
    console.log('data:', data);
  };
  const handleSignUpSubmit = (data: SignUpFields) => {
    console.log('data:', data);
  };

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
