import { AuthProvider, AuthContext } from './AuthContext';
import { UserProvider, UserContext } from './UsersContext';
import { PostsProvider, PostsContext } from './PostsContext';

export { AuthContext, UserContext, PostsContext };

export const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <PostsProvider> {children}</PostsProvider>
      </UserProvider>
    </AuthProvider>
  );
};
