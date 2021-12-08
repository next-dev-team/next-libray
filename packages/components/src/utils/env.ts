export const isDev = process.env.NODE_ENV === 'development';
export const isProd = process.env.NODE_ENV === 'production';
export const isBrowser = process.env.BROWSER;
export const isSsr = !isBrowser;
