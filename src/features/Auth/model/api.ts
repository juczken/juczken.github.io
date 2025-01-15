// import { useGetProfileWithSync } from 'src/entities/User/model/api';
import { baseApi } from 'src/shared/api/baseApi';
import { AuthResult, SignInBody, SignUpBody } from 'src/shared/types/serverTypes';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation<AuthResult, SignInBody>({
      query: (credentials) => ({
        url: '/signin',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Profile'],
    }),
    signup: builder.mutation<AuthResult, SignUpBody>({
      query: (credentials) => ({
        url: '/signup',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Profile'],
    }),
  }),
});

const { useSigninMutation, useSignupMutation } = authApi;

// const useSigninWithSync = (): {
//   signin: ReturnType<typeof useSigninMutation>[0];
//   signinState: ReturnType<typeof useSigninMutation>[1];
//   profile: ReturnType<typeof useGetProfileWithSync>;
// } => {
//   const dispatch = useDispatch();
//   const [signin, signinState] = useSigninMutation();

//   useEffect(() => {
//     if (signinState.isSuccess && signinState.data?.token) {
//       saveTokenToLocalStorage(signinState.data.token);
//       dispatch(setAuthenticated(signinState.data));
//     }
//   }, [signinState, dispatch]);

//   const profile = useGetProfileWithSync();

//   return { signin, signinState, profile };
// };

// const useSignupWithSync = (): {
//   signup: ReturnType<typeof useSignupMutation>[0];
//   signupState: ReturnType<typeof useSignupMutation>[1];
//   profile: ReturnType<typeof useGetProfileWithSync>;
// } => {
//   const dispatch = useDispatch();
//   const [signup, signupState] = useSignupMutation();
//   const { isSuccess, data } = signupState;

//   useEffect(() => {
//     if (isSuccess && data?.token) {
//       saveTokenToLocalStorage(data.token);
//       dispatch(setAuthenticated(data));
//     }
//   }, [isSuccess, data, dispatch]);

//   const profile = useGetProfileWithSync();

//   return { signup, signupState, profile };
// };

// export { useSigninMutation, useSigninWithSync, useSignupMutation, useSignupWithSync };
export { useSigninMutation, useSignupMutation };
