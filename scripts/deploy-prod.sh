#!/bin/bash
set -e

BRANCH=${BRANCH:-master}
IMAGE=ghcr.io/sangdv219/cat:$BRANCH
PORT=3000

echo "[INFO] Using port: $PORT"
echo "[INFO] Using branch: $BRANCH"
echo "[INFO] Deploying $APP_NAME with image $IMAGE"

# Stop old container
docker stop $APP_NAME || true
docker rm $APP_NAME || true

# Pull latest image
docker pull $IMAGE

# Run new container
docker run -d --name $APP_NAME -p 80:3000 $IMAGE

docker ps
  # Healthcheck (optional)
sleep 10
if curl -fs http://54.252.231.194:3000 >/dev/null; then
  echo "[INFO] ✅ $APP_NAME is up and healthy on port $APP_PORT"
else
  echo "[ERROR] ❌ $APP_NAME failed to start" >&2
  exit 1
fi

echo "[INFO] $APP_NAME deployed on port $PORT"