    #!/bin/bash

    # Stop on errors
    set -e

    # Build the Astro project
    npm run build

    # Create a temporary directory for deployment
    TEMP_DIR=$(mktemp -d)

    # Copy the contents of dist/ to the temp directory
    cp -r dist/* "$TEMP_DIR"

    # Navigate to the temp directory
    cd "$TEMP_DIR"

    # Initialize a new Git repo
    git init
    git checkout -b deploy

    # Add all files and commit
    git add .
    git commit -m "Deploy build"

    # Push to the deploy branch of the origin repo
    # Replace the remote URL if necessary
    git remote add origin https://github.com/samadsayyed/dummy-astro-project.git
    git push origin deploy

    # Clean up
    cd -
    rm -rf "$TEMP_DIR"
