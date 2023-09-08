import { createServer } from 'vite';

export const getServer = async () => {
  const server = await createServer({
    mode: 'development',
    root: './lesson-presenter/src',
    configFile: false,
    base: '/public',
    server: {
      port: 0,
      open: true,
    },
  });

  return server;
};
