#!/bin/bash
# Double-click to launch local server and open the visualisation in your browser.
# Why needed: opening index.html directly (file://) blocks CSV/GeoJSON loading
# due to browser CORS. A local HTTP server fixes this.

cd "$(dirname "$0")"

# Kill any old server on this port (so re-running doesn't fail)
lsof -ti:8765 | xargs kill -9 2>/dev/null

# Start server in background
python3 -m http.server 8765 > /tmp/dv2-server.log 2>&1 &
echo "Server started on http://localhost:8765/"
sleep 1

# Open browser
open http://localhost:8765/

echo "Server is running in the background."
echo "Press Cmd+Q on this Terminal window to keep the server running, or close to stop."
read -p "Press Enter to stop the server and exit..."
lsof -ti:8765 | xargs kill -9 2>/dev/null
echo "Server stopped."
