# devnews-web
Developer news web client

[Data provided by the devnews-core API](http://github.com/imjacobclark/devnews-core)

# Deploying via Docker

```
git clone https://github.com/imjacobclark/devnews-web.git && cd devnews-web
docker build -t devnews-web . 
docker run -d -p 3000:3000 --name devnews-web devnews-web
```

# Deploying via Node
```
git clone https://github.com/imjacobclark/devnews-web.git && cd devnews-web
npm install
node server.js
```
