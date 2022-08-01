import { useEffect, useState, useRef } from "react";

/**
 *  Modulo de agrupacion de hooks personalizados
 *
 * @module Hooks
 */

/**
 * @author DamianDev
 *
 * @description
 * Hook para oprimizar la carga y renderizado de los componentes mediante un LazyLoading del componetne.
 * Recibe como parámetro un elemento y un state para poder ser implementado adecuadamente en el dom
 *
 * @param {*} element
 * @param {*} setShow
 */
const useLazyRender = () => {
  const [show, setShow] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== "undefined"
        ? window.IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    });
  }, [element]);

  return [element, show];
};

/**
 * @author DamianDev
 *
 * @description
 * Hook para almacenar datos en el localstorage de la aplicación
 *
 * @param {*} key
 * @param {*} initialValue
 * @returns
 */
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (e) {
      console.error(e);
    }
  };

  return [storedValue, setLocalStorage];
};

export { useLazyRender, useLocalStorage };
