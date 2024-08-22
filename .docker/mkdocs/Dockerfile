FROM squidfunk/mkdocs-material:9.5.10

RUN apk add --no-cache \
    curl

RUN pip install markdown-callouts

HEALTHCHECK --start-period=60s CMD curl -f http://localhost:8000 || exit 1