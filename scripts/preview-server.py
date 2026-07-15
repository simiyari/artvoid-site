# سرور پیش‌نمایش استاتیک out/ با غیرفعال‌سازی کش مرورگر
# (python -m http.server هدر Cache-Control نمی‌فرستد و مرورگر نسخه کهنه را نگه می‌دارد)
import functools
import http.server
import sys


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


port = int(sys.argv[1]) if len(sys.argv) > 1 else 8318
handler = functools.partial(NoCacheHandler, directory="out")
print(f"preview server on http://localhost:{port} (no-store)")
http.server.ThreadingHTTPServer(("", port), handler).serve_forever()
