import React from 'react';
import EditProfile, { EditProfileFields } from './EditProfile/EditProfile';
import ChangePassword, { ChangePasswordFields } from './ChangePassword/ChangePassword';
import cn from 'clsx';
import styles from './ProfileScreen.module.css';
import { useTranslation } from 'react-i18next';
import useAuth from '../../shared/contexts/AuthContext/AuthContext';

const ProfileScreen: React.FC = () => {
  const { t } = useTranslation();
  const { handleChangePassword, handleUpdateProfile } = useAuth();

  const handleEditProfileSubmit = (data: EditProfileFields) => {
    handleUpdateProfile({ name: data.userName, about: data.about });
  };

  const handleChangePasswordSubmit = (data: ChangePasswordFields) => {
    handleChangePassword({ password: data.oldPassword, newPassword: data.newPassword });
  };

  return (
    <div className={cn(styles.page)}>
      <h1 className={cn(styles.title)}>{t('ProfileScreen.title')}</h1>
      <div>
        <EditProfile onSubmit={handleEditProfileSubmit} />
      </div>
      <div>
        <ChangePassword onSubmit={handleChangePasswordSubmit} />
      </div>
    </div>
  );
};

export default ProfileScreen;
