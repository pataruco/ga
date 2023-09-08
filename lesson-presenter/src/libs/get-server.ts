import { createServer } from 'vite';

export const getServer = async () => {
  // const __dirname = fileURLToPath(new URL('./'));
  // console.log({ __dirname });

  const server = await createServer({
    // any valid user config options, plus `mode` and `configFile`
    mode: 'development',
    root: './lesson-presenter/src',
    configFile: false,
    base: '/public',
    // root: __dirname,
    server: {
      port: 0,
    },
    // build: {
    //   rollupOptions:{}
    // }
  });

  return server;
};
