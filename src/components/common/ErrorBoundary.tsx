import React, { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode; // Кастомная верстка на случай ошибки
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    // Метод обновляет состояние, чтобы следующий рендер показал запасной UI
    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    // Метод для логирования ошибки (например, отправки в Sentry)
    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("ErrorBoundary поймал ошибку:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            // Возвращаем кастомный UI или дефолтный текст
            return this.props.fallback || (
                <div style={{ padding: '20px', color: 'red' }}>
                    <h2>Что-то пошло не так.</h2>
                    <button onClick={() => window.location.reload()}>Обновить страницу</button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
