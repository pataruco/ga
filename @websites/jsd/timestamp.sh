#!/bin/bash
set -euo pipefail

deleteEnv() {
  eval "rm .env" || echo 'no .env'
}

createEnv() {
  eval "echo REACT_APP_TIMESTAMP=$(date +%s) >> .env"
}

deleteEnv
createEnv

echo "Timestamp created ⏱"
