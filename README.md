# base-cms-import-format

## Content Types
### Article
**Required Fields:**
- `id` (integer)
- `name` (string)
- `type` (string)
- `status` (integer)
- `created` (datetime)
- `createdBy` (string)
- `primarySite` (string:relationship)
- `primarySection` (string:relationship)

**Optional Fields:**
- `teaser` (string)
- `body` (string/html)
- `bodyOriginal` (string/html)
- `shortTitle` (string)
- `magazineDeck` (string)
- `updated` (datetime)
- `updatedBy` (string)
- `seoTitle` (string)
- `seoDescription` (string)
- `canonicalURL` (string)
- `redirects` (array of string)
- `requiresRegistration` (boolean)
- `primaryImage` (string:relationship)
- `assets` (array of object)
- `customAttributes` (object)
- `labels` (array of strings)
- `authors` (array of string:relationship)
- `contributors` (array of string:relationship)
- `photographers` (array of string:relationship)
- `company` (array of string:relationship)
- `relatedContent` (array of string:relationship)
- `notes` (string)
- `taxonomy` (object)
- `taxonomy.[type]` (array of string:relationship)
- `websiteSections` (array of string:relationship)
- `printIssues` (array of string:relationship)

### Company
### Contact
### Document
### Event
### Media Gallery
### News
### Page
### Podcast
### Press Release
### Product
### Promotion
### Video
### Webinar
### Whitepaper
