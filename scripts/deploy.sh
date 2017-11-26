#!/usr/bin/env bash
#
# Failed to run this script... open Terminal and run $ chmod 700 [PATH-TO-REPO]/scripts/semantic.sh
#
# Setup an initial Git Tag for Semantic Releases.
#
# main()
#
{
    git fetch --tags;

    if [ ! $(git tag -l v* | tail -n1) ]; then
        git tag v0.0.0 $(git rev-list --max-parents=0 HEAD);
        echo "Temporary tag v0.0.0 added.";
    fi;

    npm run semantic:release
}