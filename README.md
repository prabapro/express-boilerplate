# Express Boilerplate with Node Mailer

Boilerplate/Generator/Starter Project for Node.js, Express and Node-mailer.

## Getting Started

#### Clone the repo and make it yours:

```bash
git clone --depth 1 https://github.com/prabapro/express-boilerplate
cd express-boilerplate
rm -rf .git
```

#### Environment Variables

- Generate `.env` file from `.env.example` and add your env variables.
  ```shell
  cp .env.example .env
  ```
- If new keys are added to the `.env` file, run below command to update the example file with new keys.
  ```shell
  sed 's/=.*/=/' .env > .env.example
  ```

#### Run

```shell
npm run dev
```

#### If port is already in use

```shell
killall node
```
