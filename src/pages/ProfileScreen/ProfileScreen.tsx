import React from 'react';
import EditProfile, { EditProfileFields } from './EditProfile/EditProfile';
import ChangePassword, { ChangePasswordFields } from './ChangePassword/ChangePassword';
import cn from 'clsx';
import styles from './ProfileScreen.module.css';
import { useTranslation } from 'react-i18next';

const ProfileScreen: React.FC = () => {
  const { t } = useTranslation();

  const handleEditProfileSubmit = (data: EditProfileFields) => {
    console.log('onEditProfileSubmit', data);
  };

  const handleChangePasswordSubmit = (data: ChangePasswordFields) => {
    console.log('onChangePasswordSubmit', data);
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
