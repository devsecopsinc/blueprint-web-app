FROM public.ecr.aws/docker/library/node:18 AS builder
WORKDIR /home/node

# Copies package.json and package-lock.json to Docker environment
COPY package*.json yarn.lock ./

# Installs all node packages
RUN yarn --network-timeout 100000 install

# Copies sources to Docker environment
COPY . ./
# Build project from sources
RUN yarn build

FROM public.ecr.aws/docker/library/node:18 AS runner
ENV NODE_ENV production
USER node
WORKDIR /home/node

COPY package*.json yarn.lock ./
COPY --from=builder /home/node/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/dist/ ./dist/
COPY --from=builder --chown=node:node /home/node/static ./static

EXPOSE 3003

ENTRYPOINT ["node"]
CMD ["dist/main"]
