import { format, parseISO, isValid, differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';
import { es } from 'date-fns/locale';

/**
 * Formatea una fecha para mostrar en la UI con formato español
 * @param {string} dateString - Fecha en formato ISO string
 * @param {string} formatString - Formato deseado (por defecto 'dd MMM yyyy')
 * @returns {string} Fecha formateada
 */
export function formatDate(dateString, formatString = 'dd MMM yyyy') {
  try {
    const date = parseISO(dateString);
    if (!isValid(date)) {
      throw new Error('Fecha inválida');
    }
    return format(date, formatString, { locale: es });
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString; // Retornar fecha original si hay error
  }
}

/**
 * Calcula el tiempo relativo desde una fecha (ej: "hace 2 días")
 * @param {string} dateString - Fecha en formato ISO string
 * @returns {string} Tiempo relativo
 */
export function getRelativeTime(dateString) {
  try {
    const date = parseISO(dateString);
    if (!isValid(date)) {
      throw new Error('Fecha inválida');
    }
    
    const now = new Date();
    const days = differenceInDays(now, date);
    const months = differenceInMonths(now, date);
    const years = differenceInYears(now, date);
    
    if (years > 0) {
      return `hace ${years} ${years === 1 ? 'año' : 'años'}`;
    } else if (months > 0) {
      return `hace ${months} ${months === 1 ? 'mes' : 'meses'}`;
    } else if (days > 0) {
      return `hace ${days} ${days === 1 ? 'día' : 'días'}`;
    } else {
      return 'hoy';
    }
  } catch (error) {
    console.error('Error calculating relative time:', error);
    return '';
  }
}

/**
 * Valida si una fecha es válida
 * @param {string} dateString - Fecha a validar
 * @returns {boolean} True si es válida
 */
export function isValidDate(dateString) {
  try {
    const date = parseISO(dateString);
    return isValid(date);
  } catch (error) {
    return false;
  }
}

/**
 * Obtiene el año de una fecha
 * @param {string} dateString - Fecha en formato ISO string
 * @returns {number} Año
 */
export function getYear(dateString) {
  try {
    const date = parseISO(dateString);
    if (!isValid(date)) {
      throw new Error('Fecha inválida');
    }
    return date.getFullYear();
  } catch (error) {
    console.error('Error getting year:', error);
    return new Date().getFullYear();
  }
}

/**
 * Obtiene el mes de una fecha
 * @param {string} dateString - Fecha en formato ISO string
 * @returns {string} Mes en español
 */
export function getMonth(dateString) {
  try {
    const date = parseISO(dateString);
    if (!isValid(date)) {
      throw new Error('Fecha inválida');
    }
    return format(date, 'MMMM', { locale: es });
  } catch (error) {
    console.error('Error getting month:', error);
    return '';
  }
}
