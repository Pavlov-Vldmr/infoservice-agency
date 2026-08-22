import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { Oval } from 'react-loader-spinner';

interface LoadingContextType {
    setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <LoadingContext.Provider value={{ setIsLoading }}>
            {children}

            {isLoading && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 999999999 // Поверх всех элементов
                }}>
                    <Oval height={80} width={80} color="#4fa94d" visible={true} />
                </div>
            )}
        </LoadingContext.Provider>
    );
};

// Хук для удобного использования в компонентах
export const useLoading = (): LoadingContextType => {
    const context = useContext(LoadingContext);
    if (!context) throw new Error('useLoading must be used within LoadingProvider');
    return context;
};
