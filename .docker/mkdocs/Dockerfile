FROM squidfunk/mkdocs-material:9.5.10

RUN apk add --no-cache \
    curl

RUN pip install markdown-callouts

HEALTHCHECK --interval=30s --timeout=10s \
  CMD curl --fail http://localhost:8000 || exit 1