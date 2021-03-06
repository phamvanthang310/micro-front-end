# Sample micro front-end project

## Pre-required
* **Node** - v8.10.0 or later
* **GoLang** - go1.10.3 darwin/amd64

## Install
### Skipper
Check your installed Go version:
```bash
go version
```

Go to `.skipper` workspace:
```bash
cd ./skipper
export GOPATH=$(pwd)
export PATH=$PATH:$GOPATH/bin
```

Get skipper packages:
```bash
go get github.com/zalando/skipper/...
```

### Source
This project is leverage from [lerna](https://github.com/lerna/lerna) library for multi package managements.
We can use npm/yarn for script running:

Install dependencies:
```bash
yarn install
```

Build all fragments:
```bash
yarn run build
```
The `bundle.js` file located at `/dist`

## Run

### Start skipper
```bash
skipper -routes-file main.eskip
```
Use `-address` to specify a network address that skipper should listen on. Default is `:9090`. 
To check if the skipper works properly or not: 
```bash
curl localhost:9090/hello
```
It will result in [www.example.org](https://www.example.org) page


### Start Tailor server 
Specify the `SKIPPER_ADDRESS` value match with skipper address
```bash
SKIPPER_ADDRESS=localhost:9090 yarn run start
```

### Start all Fragment
```bash
yarn run start:fragments
```
