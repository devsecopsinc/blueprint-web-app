FROM hasura/graphql-engine:v2.1.1.cli-migrations-v3
WORKDIR /tmp/hasura-project

COPY . ./
COPY ./migrations /hasura-migrations
COPY ./metadata /hasura-metadata

EXPOSE 3001
