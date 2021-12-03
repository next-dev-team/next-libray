import { isBrowser } from './';

export const goToTop = () => {
  const body = document.querySelector('#root');
  if (isBrowser) {
    body?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
