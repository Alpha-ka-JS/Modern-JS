#!/bin/bash

USER_NAME=$1
echo USER_NAME is $1
USER_NAME_ARG=$2

if [ $USER_NAME_ARG != $USER_NAME ]; then
    echo $USER_NAME_ARG is not $USER_NAME
    circleci-agent step halt
fi
