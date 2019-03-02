# Polymer GRPC - Starter Kit

### Setup

##### Prerequisites

Install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com) (we assume you have pre-installed [node.js](https://nodejs.org)).

    npm install -g polymer-cli --unsafe-perm

To generate the protobuf messages and client service stub class from your
`.proto` definitions, we need the `protoc` binary and the
`protoc-gen-grpc-web` plugin.

You can download the `protoc-gen-grpc-web` protoc plugin from our
[release](https://github.com/grpc/grpc-web/releases) page:

If you don't already have `protoc` installed, you will have to download it
first from [here](https://github.com/protocolbuffers/protobuf/releases).

Make sure they are both executable and are discoverable from your PATH.

For example, in MacOS, you can do:

```
$ sudo mv ~/Downloads/protoc-gen-grpc-web-1.0.3-darwin-x86_64 \
  /usr/local/bin/protoc-gen-grpc-web
$ chmod +x /usr/local/bin/protoc-gen-grpc-web
```

When you have both `protoc` and `protoc-gen-grpc-web` installed, you can now
run these commands:


```html
npm install
npm run dockerBuild
npm run dockerRun
npm run protoc
npm run webpack
pm2 start ecosystem.config.js 
```

Browse to http://localhost:8090/ and click on the numnber 1 while looking at the console