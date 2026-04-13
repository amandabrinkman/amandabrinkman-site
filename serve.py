import os, http.server, socketserver

PORT = 8080
os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({'.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript'})

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    httpd.serve_forever()
