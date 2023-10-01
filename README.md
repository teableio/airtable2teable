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

## Quick Start

```typescript
const dbMigrate = new DBMigrate({
  from: {
    baseId: '',
    airtableToken: ''
  },
  to: {
    dirPath: `${__dirname}`
  }
});
const result = await dbMigrate.execute();
```

## Process:

- [x] singleLineText
- [x] email
- [x] url
- [x] multilineText
- [x] number
- [x] percent
- [x] currency
- [x] singleSelect
- [x] multipleSelects
- [x] singleCollaborator
- [x] multipleCollaborators
- [x] multipleRecordLinks
- [x] date
- [x] dateTime
- [x] phoneNumber
- [x] multipleAttachments
- [x] checkbox
- [x] formula
- [x] createdTime
- [x] rollup
- [x] count
- [x] lookup
- [x] multipleLookupValues
- [x] autoNumber
- [x] barcode
- [x] rating
- [x] richText
- [x] duration
- [x] lastModifiedTime
- [x] button
- [x] createdBy
- [x] lastModifiedBy
- [ ] externalSyncSource
- [ ] aiText