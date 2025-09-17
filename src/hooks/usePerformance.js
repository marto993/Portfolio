import { useCallback, useMemo, useState } from 'react';

/**
 * Hook para optimizaciones de rendimiento
 * @param {Array} dependencies - Dependencias para memoización
 * @returns {Object} Funciones optimizadas
 */
export function usePerformance(dependencies = []) {
  // Memoizar funciones costosas
  const memoizedFunctions = useMemo(() => {
    return {
      // Función para debounce
      debounce: (func, delay) => {
        let timeoutId;
        return (...args) => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => func.apply(null, args), delay);
        };
      },

      // Función para throttle
      throttle: (func, limit) => {
        let inThrottle;
        return (...args) => {
          if (!inThrottle) {
            func.apply(null, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
          }
        };
      },

      // Función para deep clone optimizada
      deepClone: (obj) => {
        if (obj === null || typeof obj !== 'object') return obj;
        if (obj instanceof Date) return new Date(obj.getTime());
        if (obj instanceof Array) return obj.map(item => memoizedFunctions.deepClone(item));
        if (typeof obj === 'object') {
          const clonedObj = {};
          for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
              clonedObj[key] = memoizedFunctions.deepClone(obj[key]);
            }
          }
          return clonedObj;
        }
      }
    };
  }, dependencies);

  // Callback optimizado para eventos
  const optimizedCallback = useCallback((callback) => {
    return useCallback(callback, dependencies);
  }, dependencies);

  // Memoizar arrays y objetos
  const memoizedValue = useMemo(() => {
    return dependencies;
  }, dependencies);

  return {
    ...memoizedFunctions,
    optimizedCallback,
    memoizedValue
  };
}

/**
 * Hook para lazy loading de componentes
 * @param {Function} importFunc - Función de importación
 * @returns {Object} Componente y estado de carga
 */
export function useLazyComponent(importFunc) {
  const [Component, setComponent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadComponent = useCallback(async () => {
    if (Component) return;

    setLoading(true);
    setError(null);

    try {
      const module = await importFunc();
      setComponent(() => module.default);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [Component]);

  return {
    Component,
    loading,
    error,
    loadComponent
  };
}

/**
 * Hook para optimizar re-renders
 * @param {*} value - Valor a memoizar
 * @param {Function} compareFn - Función de comparación personalizada
 * @returns {*} Valor memoizado
 */
export function useMemoizedValue(value, compareFn) {
  return useMemo(() => value, [compareFn ? compareFn(value) : value]);
}
