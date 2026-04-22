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
        <p>This is the main branch. If you see this in a preview deployment, the full pipeline is working.</p>
        <p class="version">v1.0.0</p>
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
