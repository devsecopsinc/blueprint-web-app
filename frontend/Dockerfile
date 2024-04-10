# pull official base image
FROM public.ecr.aws/docker/library/node:18.6.0 AS builder

# build-time arguments provide values for the application env vars
ARG HASURA_GRAPHQL_API_ENDPOINT
ARG HASURA_GRAPHQL_ADMIN_SECRET
ARG BASE_URL

ENV BUILD_TIMEOUT=100000

# application-specific environment variables
ENV VITE_HASURA_GRAPHQL_API_ENDPOINT="${HASURA_GRAPHQL_API_ENDPOINT}"
ENV VITE_HASURA_GRAPHQL_ADMIN_SECRET="${HASURA_GRAPHQL_ADMIN_SECRET}"
ENV VITE_BASE_URL="${BASE_URL}"

# set working directory
WORKDIR /app

# install app dependencies
#copies package.json and package-lock.json to Docker environment
COPY package*.json yarn.lock ./

# Installs all node packages
RUN yarn --network-timeout ${BUILD_TIMEOUT} install

# Copies everything over to Docker environment
COPY . ./
RUN yarn --network-timeout ${BUILD_TIMEOUT} build:prod

#Stage 2
#######################################
FROM public.ecr.aws/nginx/nginx:stable-alpine AS runner

ENV APP=""

# Copy only build result from builder stage
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/conf/nginx${APP}.conf /etc/nginx/conf.d/default.conf

# Copy Cloudflare SSL certificates
COPY --from=builder /app/conf/cloudflare_ssl.* /etc/nginx

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
