import clsx from 'classnames';
import { overrideTailwindClasses } from 'tailwind-override';
import { _isEmpty, _pickBy } from './lodash';

/**
 * override class using clsx
 * @param rest
 * @returns
 */
export const clx = (...rest: any) => {
  return overrideTailwindClasses(clsx(rest));
};
export const clxx = (...rest: any) => {
  return overrideTailwindClasses(clsx(rest));
};

//  the class tw suggestion only one time per file so I need to create it n time
export const clx1 = clx;
export const clx2 = clx;
export const clx3 = clx;

export const cls = (...rest: any) => {
  return clsx(rest);
};
export const cl = (...rest: any) => {
  return clsx(rest);
};

/**
 * get suggestion tw class in vs-code setting.json
 * @param v
 * @returns
 */
export const tw = <T extends unknown>(v: T) => {
  return v;
};
export const tw1 = tw;
export const tw2 = tw;
export const tw3 = tw;

export function getStringVal<T>(v: T) {
  return _isEmpty(v) ? null : v;
}

export function getNotNullVal<T>(values: T): T {
  // @ts-ignore
  return _pickBy(
    values || {},
    (v: any) => v !== null && v !== undefined && v !== ' ' && v !== 'null' && v !== '',
  );
}
