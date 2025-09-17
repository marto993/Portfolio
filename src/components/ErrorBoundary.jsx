import React from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

/**
 * Error Boundary mejorado para manejar errores de React
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log del error para debugging
    console.error('Error Boundary capturó un error:', error, errorInfo);

    // En producción, enviar a servicio de monitoreo
    if (process.env.NODE_ENV === 'production') {
      // Aquí se puede integrar con servicios como Sentry, LogRocket, etc.
      this.logErrorToService(error, errorInfo);
    }
  }

  logErrorToService = (error, errorInfo) => {
    // Implementar logging a servicio externo
    console.log('Enviando error a servicio de monitoreo:', {
      error: error.toString(),
      errorInfo: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    });
  };

  handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prevState.retryCount + 1
    }));
  };

  handleGoHome = () => {
    window.location.hash = '#hero';
    this.handleRetry();
  };

  render() {
    if (this.state.hasError) {
      const { error, retryCount } = this.state;
      const { fallback: Fallback, showDetails = false } = this.props;

      // Si hay un componente fallback personalizado, usarlo
      if (Fallback) {
        return <Fallback error={error} retry={this.handleRetry} />;
      }

      // Componente de error por defecto
      return (
        <div className="min-h-screen bg-dark-950 flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center">
            <div className="glass-effect rounded-2xl p-8">
              <AlertCircle className="h-16 w-16 text-red-400 mx-auto mb-6" />
              
              <h1 className="text-2xl font-bold text-white mb-4">
                ¡Ups! Algo salió mal
              </h1>
              
              <p className="text-gray-400 mb-6">
                Ha ocurrido un error inesperado. Por favor, intenta recargar la página.
              </p>

              {showDetails && error && (
                <details className="mb-6 text-left">
                  <summary className="text-sm text-gray-500 cursor-pointer mb-2">
                    Detalles técnicos
                  </summary>
                  <div className="bg-gray-900 p-3 rounded text-xs text-gray-400 overflow-auto max-h-32">
                    <pre>{error.toString()}</pre>
                  </div>
                </details>
              )}

              <div className="flex gap-3 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="button-primary flex items-center gap-2"
                  disabled={retryCount >= 3}
                >
                  <RefreshCw size={18} />
                  {retryCount >= 3 ? 'Máximo de reintentos' : 'Reintentar'}
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="button-secondary flex items-center gap-2"
                >
                  <Home size={18} />
                  Ir al Inicio
                </button>
              </div>

              {retryCount > 0 && (
                <p className="text-xs text-gray-500 mt-4">
                  Reintentos: {retryCount}/3
                </p>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
