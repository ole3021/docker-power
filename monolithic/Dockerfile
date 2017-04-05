FROM daocloud.io/library/node:7.7.3-slim

EXPOSE 6040
WORKDIR /app
WORKDIR node_monolithic
ENV NODE_ENV development

ADD package.json /app/node_monolithic
RUN npm i

# TODO: setup production env
#ADD . /app/node_monolithic
#CMD ['node', 'server.js']
