import React from 'react';
import EditProfile, { EditProfileFields } from './EditProfile/EditProfile';
import ChangePassword, { ChangePasswordFields } from './ChangePassword/ChangePassword';
import cn from 'clsx';
import styles from './ProfileScreen.module.css';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store/store';
import { changePassword, updateProfile } from '../../features/Profile/model/thunks';

const ProfileScreen: React.FC = () => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const profileStatus = useSelector((state: RootState) => state.profile.status);
  const profileError = useSelector((state: RootState) => state.profile.error);

  const handleEditProfileSubmit = (data: EditProfileFields) => {
    dispatch(updateProfile({ email: currentUser.email, name: data.userName, about: data.about }));
  };

  const handleChangePasswordSubmit = (data: ChangePasswordFields) => {
    dispatch(
      changePassword({ email: currentUser.email, oldPassword: data.oldPassword, newPassword: data.newPassword })
    );
  };

  if (profileStatus === 'loading') {
    return <div>{'loading'}</div>;
  }

  return (
    <div className={cn(styles.page)}>
      <h1 className={cn(styles.title)}>{t('ProfileScreen.title')}</h1>
      <div>
        <EditProfile
          onSubmit={handleEditProfileSubmit}
          defaultValues={currentUser && { userName: currentUser?.name, about: currentUser?.about }}
        />
      </div>
      <div>
        <ChangePassword onSubmit={handleChangePasswordSubmit} />
      </div>
      {profileError && <div className={styles.error}>{profileError}</div>}
    </div>
  );
};

export default ProfileScreen;
