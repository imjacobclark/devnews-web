# devnews-web
Developer news web client

[Data provided by the devnews-core API](http://github.com/imjacobclark/devnews-core)

### Deploying via Docker
```shell
docker pull imjacobclark/devnews-web
docker run -d -p 3000:3000 --name devnews-web devnews-web
```

### Deploying onto CoreOS
```shell
git clone https://github.com/imjacobclark/devnews-web.git && cd devnews-web
# replace {port} and repeat for amount of instances you require (where each instance is 1 node)
ln -s coreos/fleet/templates/devnews-web@.service coreos/fleet/instances/devnews-web@{port}.service
# replace {port} and repeat for amount of instances you require (where each instance is 1 node)
ln -s coreos/fleet/templates/devnews-web-discovery@.service coreos/fleet/instances/devnews-web-discovery@{port}.service
fleetctl submit coreos/fleet/instances/*
fleetctl start coreos/fleet/instances/*
```

### Deploying via Node
```shell
git clone https://github.com/imjacobclark/devnews-web.git && cd devnews-web
npm install
node server.js
```
