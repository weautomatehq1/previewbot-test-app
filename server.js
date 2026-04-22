import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>PreviewBot Test App</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: system-ui, sans-serif; background: #0a0a0a; color: #fafafa; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
        .card { background: #1a1a1a; border: 1px solid #333; border-radius: 12px; padding: 3rem; max-width: 480px; text-align: center; }
        h1 { font-size: 1.5rem; margin-bottom: 1rem; }
        p { color: #999; line-height: 1.6; }
        .version { margin-top: 1.5rem; font-size: 0.875rem; color: #666; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>PreviewBot Test App</h1>
        <p>This is a <strong>preview branch</strong> deployment. The landing page has been updated with new styling and content.</p>
        <ul style="text-align: left; margin-top: 1rem; color: #ccc; list-style: none;">
          <li>Docker build</li>
          <li>Nginx reverse proxy</li>
          <li>Lighthouse audit</li>
          <li>GitHub PR comment</li>
        </ul>
        <p class="version">v1.1.0-preview</p>
      </div>
    </body>
    </html>
  `);
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Test app listening on port ${port}`);
});
