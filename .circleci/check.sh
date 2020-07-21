#!/bin/bash

USER_NAME=$0
echo USER_NAME is $0
USER_NAME_ARG=$1

if [ $USER_NAME_ARG != $USER_NAME ]; then
    echo $USER_NAME_ARG is not $USER_NAME
    circleci-agent step halt
fi
