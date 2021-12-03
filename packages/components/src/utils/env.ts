export const isDev = process.env.NODE === 'development';
export const isProd = process.env.NODE === 'production';
export const isBrowser = process.env.BROWSER;
export const isSsr = !isBrowser;
