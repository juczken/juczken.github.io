import React from 'react';
import { Navigate } from 'react-router-dom';

type SignOutProps = {
  onSignOut: () => void;
};

const SignOut: React.FC<SignOutProps> = ({ onSignOut }) => {
  onSignOut();
  return <Navigate to={'/'} replace />;
};

export default SignOut;