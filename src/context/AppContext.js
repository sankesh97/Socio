import { AuthProvider, AuthContext } from './AuthContext';
import { UsersProvider, UsersContext } from './UsersContext';
import { PostsProvider, PostsContext } from './PostsContext';

export { AuthContext, UsersContext, PostsContext };

export const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <UsersProvider>
        <PostsProvider> {children}</PostsProvider>
      </UsersProvider>
    </AuthProvider>
  );
};
