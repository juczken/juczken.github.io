import { baseApi } from 'src/shared/api/baseApi';
import { Profile, UpdateProfileBody } from 'src/shared/types/serverTypes';
import { setCurrentUser } from './slice';
import { useEffect } from 'react';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<Profile, void>({
      query: () => '/profile',
    }),
    updateProfile: builder.mutation<Profile, UpdateProfileBody>({
      query: (profile) => ({
        url: '/profile',
        method: 'POST',
        body: profile,
      }),
    }),
  }),
});

const { useGetProfileQuery, useUpdateProfileMutation } = userApi;

// const useGetProfileWithSync = (): typeof useGetProfileQuery => {
//   const { isSuccess, data, ...other } = useGetProfileQuery();
//   useEffect(() => {
//     if (isSuccess) {
//       setCurrentUser(data);
//     }
//   }, [isSuccess, data]);
//   return { isSuccess, data, ...other };
// };

// const useUpdateProfileWithSync = (): {
//   updateProfile: ReturnType<typeof useUpdateProfileMutation>[0];
//   updateProfileState: ReturnType<typeof useUpdateProfileMutation>[1];
// } => {
//   const [updateProfile, updateProfileState] = useUpdateProfileMutation();
//   const { isSuccess, data } = updateProfileState;
//   useEffect(() => {
//     if (isSuccess && data) {
//       setCurrentUser(data);
//     }
//   }, [isSuccess, data, setCurrentUser]);

//   return { updateProfile, updateProfileState };
// };

// export { useGetProfileWithSync, useGetProfileQuery, useUpdateProfileWithSync, useUpdateProfileMutation };
export { useGetProfileQuery, useUpdateProfileMutation };
