## Project setup

Add the `DATABASE_URL` environment variable to a `.env` file

Then

```bash
$ yarn install
```

Start the development server:

```
yarn start:dev
```

To create seed data, make a GET request to `/seed/regenerate`. It will create a user with 5 resources (products).

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
