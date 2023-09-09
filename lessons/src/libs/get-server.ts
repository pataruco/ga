import { createServer } from 'vite';

export const getServer = async () => {
  const server = await createServer({
    mode: 'development',
    root: './lessons/src',
    configFile: false,
    base: '/public',
    server: {
      port: 0,
      open: true,
    },
  });

  return server;
};
