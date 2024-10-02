# airtable2teable

The data pipeline from airtable to teable.

## Prepare

Airtable's API uses token-based authentication, allowing users to authenticate API requests by inputting their tokens
into the HTTP authorization bearer token header.

Tokens can only access API endpoints covered by the scopes granted to them. Tokens serve as the account of the user who
grants access, with the following limitations:

- Scopes: What actions the token can perform.
- Resources/access: What bases and workspace the token can access. Tokens can be granted access to individual—or
  all—bases/workspaces. These can be listed using the list bases endpoint.

To import airtable Base data into a teable Workspace, the token requires the following
Scope: `data.records:read`, `schema.bases:read`.

[Teable - Access Token](https://help.teable.io/developer/api/access-token)

## Quick Start

### Command

```shell
npm install -g @teatool/cmd

npx teatool base:migrate --from <AIRTABLE_BASE_ID> --to <TEABLE_SPACE_ID> [--baseUrl <BASE_URL>]
Airatable Token: <AIRTABLE_TOKEN>
Teable Token: <TEABLE_TOKEN>
```

### GUI

<table>
  <tr>
    <td><image src="./asset/success.png"></td>
    <td><image src="./asset/error.png"></td>
  </tr>
</table>

## Dev

```shell
pnpm run build

cd .\packages\bin

# windows
.\bin\dev.cmd base:migrate --from <AIRTABLE_BASE_ID> --to <TEABLE_SPACE_ID> [--baseUrl <BASE_URL>]
Airatable Token: <AIRTABLE_TOKEN>
Teable Token: <TEABLE_TOKEN>

# linux
./bin/dev.js base:migrate --from <AIRTABLE_BASE_ID> --to <TEABLE_SPACE_ID> [--baseUrl <BASE_URL>]
Airatable Token: <AIRTABLE_TOKEN>
Teable Token: <TEABLE_TOKEN>
```

## Reporting Issues

If you encounter any problems while using this tool, please open an issue in our GitHub repository. When reporting an issue, it's helpful to provide a minimal, reproducible example. This allows us to better understand and address the problem. Your detailed feedback helps improve the tool for everyone.
