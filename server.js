/**
 * TrustNexus Technologies - Lightweight Local Dev Server
 * Zero npm dependencies required. Uses Node.js native http, fs, and path.
 *
 * Usage: node server.js
 * Opens at: http://localhost:3000
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml; charset=UTF-8',
  '.txt': 'text/plain; charset=UTF-8',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  let reqPath;
  try {
    reqPath = decodeURI(req.url.split('?')[0]);
  } catch (e) {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=UTF-8' });
    return res.end('400 Bad Request: Malformed URI');
  }
  
  // Normalize root path
  if (reqPath.endsWith('/')) {
    reqPath += 'index.html';
  }

  // Reject any directory traversal attempts
  if (reqPath.includes('..')) {
    res.writeHead(403, { 
      'Content-Type': 'text/plain; charset=UTF-8',
      'X-Content-Type-Options': 'nosniff'
    });
    return res.end('403 Forbidden: Directory traversal not allowed');
  }

  // Resolve canonical path within ROOT_DIR
  let filePath = path.resolve(ROOT_DIR, '.' + path.sep + reqPath.replace(/^[\/\\]+/, ''));
  if (!filePath.toLowerCase().startsWith(ROOT_DIR.toLowerCase())) {
    res.writeHead(403, { 
      'Content-Type': 'text/plain; charset=UTF-8',
      'X-Content-Type-Options': 'nosniff'
    });
    return res.end('403 Forbidden: Access Denied');
  }

  // If path has no extension and is a directory or file without extension
  if (!path.extname(filePath)) {
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    } else if (fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    } else if (fs.existsSync(path.join(filePath, 'index.html'))) {
      filePath = path.join(filePath, 'index.html');
    }
  }

  // Final traversal guard after path resolution
  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=UTF-8' });
    return res.end('403 Forbidden: Access Denied');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 
        'Content-Type': 'text/html; charset=UTF-8',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN'
      });
      res.end(`
        <!DOCTYPE html>
        <html>
        <head><title>404 Not Found | TrustNexus</title><link rel="stylesheet" href="/assets/css/main.css"></head>
        <body class="blueprint-bg" style="display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center;">
          <div class="blueprint-card corner-brackets" style="max-width:500px;margin:20px;">
            <span class="tech-badge alert">ERROR 404 // NODE NOT FOUND</span>
            <h1 style="font-size:2rem;margin:12px 0;">Page Not Found</h1>
            <p>The requested facility path does not exist in the routing table.</p>
            <div style="margin-top:20px;"><a href="/" class="btn btn-primary btn-sm">Return to Command Home</a></div>
          </div>
        </body>
        </html>
      `);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`  TrustNexus Technologies Corporate Web Server Live   `);
  console.log(`  Address: http://localhost:${PORT}/                    `);
  console.log(`======================================================\n`);
});
