import { createContext } from 'react';

const BookmarksContext = createContext();

const BookmarksProvider = ({ children }) => {
  <BookmarksContext.Provider value={{}}>{children}</BookmarksContext.Provider>;
};

export { BookmarksContext, BookmarksProvider };
