import { createContext, useCallback, useContext, useState } from 'react';

interface IDrawerContextData {
  isDrawerOpen: boolean,
  toggleDrawerOpen: () => void
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

interface IDrawerProviderProps {
  children: React.ReactNode
}

export const DrawerProvider: React.FC<IDrawerProviderProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOPen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOPen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};