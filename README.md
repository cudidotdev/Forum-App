# Forum Application

This is the front-end of a Forum application built with svelte and tailwind css.

In this application, you can 
- Write, save and comment on a post.
- Reply a comment, which in turn be replied to.
- Filter post by hashtags and sort by latest or highest engaged post.
- View users and see their created post.
- View posts saved by a user.

Here is a preview:
![forum_homepage](https://github.com/CudiLala/Forum-App/assets/88282186/c73b9345-ef06-4831-88d0-74603bfcb0fc)

## Setup
Here, I assume you may already have node.js installed, together with npm, yarn or pnpm.

To set up the application locally, you first clone this repository and modify your environment variables.
There is a file called `.env.example` which you can rename to `.env` and use as your environment variables. 
Below are the bash codes for the above 

``` bash
# clone the repo
git clone https://github.com/CudiLala/Forum-App.git

# copy the example env as your .env file
cp .env.example .env
```

The `.env.exmaple` file looks like this

```env
PUBLIC_DEV_API_URL = 'http://127.0.0.1:8080'
PUBLIC_PROD_API_URL =  'https://api.forum.projects.cudi.dev'
```

The `PUBLIC_DEV_API_URL` is the url of the api to be used in development, while `PUBLIC_PROD_API_URL` is the url of the api to be used in production.

You can replace `PUBLIC_DEV_API_URL` with `https://api.forum.projects.cudi.dev` in your env file, if you want to connect your ui, to the already existing api in dev mode.

To initialize your own api, you will have to clone and setup your own server from https://github.com/CudiLala/forum-api.git.

### Development
After cloning and setting up your env file, you can run the application in dev mode by
```bash
  # Using npm
  npm install
  npm run dev
```
or 
```bash
  # Using yarn
  yarn
  yarn dev
```
or 
```bash
  # Using pnpm
  pnpm i
  pnpm dev
```

### Production
To run as a production application,

```bash
  # Using npm
  npm install
  npm run build
  npm start
```
or 
```bash
  # Using yarn
  yarn
  yarn build
  yarn start
```
or 
```bash
  # Using pnpm
  pnpm i
  pnpm build
  pnpm start
```

Thank you! Feel free to contact me @ augustinemadu9@gmail.com
