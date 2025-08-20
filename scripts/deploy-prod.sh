#!/bin/bash
set -e

BRANCH=${BRANCH:-master}
IMAGE=ghcr.io/sangdv219/cat:$BRANCH
HOST_PORT=80
CONTAINER_PORT=3000

echo "[INFO] Using port: $PORT"
echo "[INFO] Using branch: $BRANCH"
echo "[INFO] Deploying $APP_NAME with image $IMAGE"

echo "[INFO] Stopping old container if exists..."
sudo docker stop $APP_NAME || true
sudo docker rm $APP_NAME || true

echo "[INFO] Pulling latest image..."
sudo docker pull $IMAGE

echo "[INFO] Running container..."
sudo docker run -d --name $APP_NAME -p $HOST_PORT:$CONTAINER_PORT $IMAGE

echo "[INFO] Deployment completed successfully!"
sudo docker ps -a
sudo docker logs $APP_NAME
  # Healthcheck (optional)
sleep 10
if curl -fs http://54.252.231.194:3000 >/dev/null; then
  echo "[INFO] ✅ $APP_NAME is up and healthy on port $APP_PORT"
else
  echo "[ERROR] ❌ $APP_NAME failed to start" >&2
  exit 1
fi

echo "[INFO] $APP_NAME deployed on port $PORT"