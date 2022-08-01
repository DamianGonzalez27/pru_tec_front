import React, { createContext, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ ...props }) => {
  return <AppContext.Provider {...props} />;
};

const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be inside its provider');
  }
  return context;
};

const Context = createContext({
  agent: null,
  timezone: null
});

export default Context;
export { useApp, AppProvider };
