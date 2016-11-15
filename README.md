# node-ci-cdn-mock
Mocking CDN served Content with node environment at build time

## Tooling available
- yarn

## Standard port
80
change it with giving the image a different environment variable called `PORT`

```yml

cdn:
  environment:
    - PORT=3000
  ports:
    - "3000:3000"
```

## Usage:
Build your own dockerfile and start it with:
```Dockerfile
FROM julianbei/node-ci-cdn-mock

COPY . .
RUN yarn
RUN npm test
RUN npm build
```
the result must be a `./dist` folder.
Abosulte path is: `/server/app/dist`
