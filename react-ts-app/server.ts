import express from 'express';
import { createServer as createViteServer } from 'vite';
import fsp from 'fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = process.cwd();
const PORT = process.env.PORT || 5000;

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    root,
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);
  app.use('*', async (req, res) => {
    const url = req.originalUrl;
    try {
      let template = await fsp.readFile(path.resolve(__dirname, 'index.html'), 'utf8');
      template = await vite.transformIndexHtml(url, template);
      const [startHTML, endHTML] = template.split('<!--ssr-outlet-->');

      const { render } = await vite.ssrLoadModule('./src/entry-server.tsx');
      try {
        res.write(startHTML);
        const stream = render(url, {
          onShellReady() {
            stream.pipe(res);
          },
          onAllReady() {
            res.write(endHTML);
            res.end();
          },
        });
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.log(error);
    }
  });
  return app;
}

createServer().then((app) => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port: 5000`);
  });
});
