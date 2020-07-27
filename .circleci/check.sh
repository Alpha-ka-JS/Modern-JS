#!/bin/bash

COMMIT=${CIRCLE_SHA1}
echo ${COMMIT}
GIT_LOG=$(git log -1 --format=format%H -- ./${$0})
echo test ${GIT_LOG}

if [ "${COMMIT}" != "${GIT_LOG}" ]; then
    circleci-agent step halt
fi
