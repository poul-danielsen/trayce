# Trayce

This is a small slice of a contact tracing app

## Using this example

Local use requires some manual setup of of Clerk and binding a KV namespace to a CF worker. 
Would not recommend. 

Live site at:
https://trayce-web.vercel.app/

Menu routing is not in place, the two pages as such are just the homepage and /events/test-event

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: A small Next.js frontend, with Clerk for user authentication and sessions and MUI as a robust and accessible component library
- `backend/cloudflare`: a rudimentary CF Worker connected to a simple KV for storing events, and attaching users.
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Considerations

- `Time`: Most of the features are underdeveloped as this was a rapid iteration, not meant to be a complete product
- `Complexity`: The CF Worker is unsecured, and could do with using JWTs from Clerk to verify users, etc. 
- `Technology`: A KV DB was used here for absolute speed, but it would be preferable to have a more well defined structure, like an SQL DB, or potentially even a graph DB, if the intent was scale and insight.
- `Pick Two`: This is largely Fast and Cheap, not so heavy on the Good. Code is a little messy and could do with better reuse, especially sharing types across the backend and frontend by using a types workspace. 
