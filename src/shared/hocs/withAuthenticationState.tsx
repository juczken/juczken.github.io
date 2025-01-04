import React, { ComponentType, FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';

export enum AuthenticationState {
  Authenticated = 'Authenticated',
  Unauthenticated = 'Unauthenticated',
}

type withAuthenticationStateProps = {
  authenticationState?: AuthenticationState;
};

type WithAuthenticationStateProps = withAuthenticationStateProps & {
  routes: { root: string; signIn: string };
  children?: React.ReactNode;
};

export const WithAuthenticationState: FC<WithAuthenticationStateProps> = ({
  children,
  authenticationState,
  routes,
}) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  console.log('isAuthenticated', isAuthenticated);
  console.log('AuthenticationState', authenticationState);

  return (
    <>
      {authenticationState === AuthenticationState.Authenticated && isAuthenticated && children}
      {authenticationState === AuthenticationState.Unauthenticated && !isAuthenticated && children}
      {authenticationState === undefined && children}
      {authenticationState === AuthenticationState.Authenticated && !isAuthenticated && (
        <Navigate to={routes.signIn} replace />
      )}
      {authenticationState === AuthenticationState.Unauthenticated && isAuthenticated && (
        <Navigate to={routes.root} replace />
      )}
    </>
  );
};

const withAuthenticationState = <P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P & withAuthenticationStateProps> | null => {
  const HOC: React.FC<P & withAuthenticationStateProps> = (props) => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const { authenticationState, ...restProps } = props;

    return (
      <>
        {authenticationState === AuthenticationState.Authenticated && isAuthenticated && (
          <WrappedComponent {...(restProps as P)} />
        )}
        {authenticationState === AuthenticationState.Unauthenticated && !isAuthenticated && (
          <WrappedComponent {...(restProps as P)} />
        )}
        {authenticationState === undefined && <WrappedComponent {...(restProps as P)} />}
      </>
    );
  };

  return HOC;
};

export default withAuthenticationState;
