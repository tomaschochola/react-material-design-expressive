# syntax=docker/dockerfile:1

FROM mcr.microsoft.com/devcontainers/typescript-node:24-trixie AS versioneddevcontainer

FROM versioneddevcontainer AS devcontainer
WORKDIR /workspaces
ENV APP_ENV=local
ENV APP_VERSION=latest
ENV NODE_ENV=development
ADD --chmod=755 https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64 /usr/local/bin/yq
USER node
RUN <<EOF
  set -euo pipefail
  npm exec --ignore-scripts -- playwright install --with-deps
EOF
