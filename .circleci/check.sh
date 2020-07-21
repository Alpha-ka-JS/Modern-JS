#!/bin/bash

USER_NAME=${CIRCLE_PR_USERNAME}
echo USER_NAME is ${CIRCLE_PR_USERNAME}
USER_NAME_ARG=$1

if [ $USER_NAME_ARG != $USER_NAME ]; then
    echo $USER_NAME_ARG is not $USER_NAME
    circleci-agent step halt
fi
