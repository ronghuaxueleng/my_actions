#!/bin/bash
set -e
set -o errexit
set -o pipefail
set -o nounset

/bin/bash /jd/shell/init.sh
#while true;do echo "进来测试吧";sleep 1;done
echo
exec "$@"