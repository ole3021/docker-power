# Use Docker with Monolithic App

## Local Development Workflow

Use Docker management local development process, and share the development status
with other team-members.

* Share local files into docker container as a Volume in realtime.
* Managing external dependencies with docker environment.


## Share Files with Docker
Map volume to docker with the setup in docker-compose file

```YAML
volumes:
  - .:/app/node_monolithic
```

## Manage dependencies in Docker
The following code make another layer to mange all dependencies in the docker separately.

```YAML
volumes:
  - /app/node_monolithic/node_modules
```
