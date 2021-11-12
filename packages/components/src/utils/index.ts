import clxs from 'classnames';
import { overrideTailwindClasses, } from 'tailwind-override';
import { _isEmpty, _pickBy } from './lodash';



export const clx = (...rest: any) => {
  return overrideTailwindClasses(clxs(rest));
};

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