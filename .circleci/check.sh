#!/bin/bash

GIT_LOG=$(git log origin/master.. --oneline --format="%H" ./$1)
echo git log is ${GIT_LOG}

if [ -z "${GIT_LOG}" ]; then
    echo cancel circle ci
    circleci-agent step halt
fi
