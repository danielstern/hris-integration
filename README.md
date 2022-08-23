# About

This is a project which demonstrates a universal HRIS consumer.

## Usage

1. Start the spec HRIS server:

`npm run hris`

This opens an HRIS server at `http://localhost:12042`, eg: `http://localhost:12042/employees?token=TOK-001`.

2. Run the scraper

`npm test`

### Sample Output
```
Integration successful. Integrated data is as follows:
[
  {
    "_id": "EMP001",
    "name": "Tyrion Lannister",
    "role": "President",
    "changed": false
  },
  {
    "_id": "EMP002",
    "name": "John Snow",
    "role": "Janitor",
    "changed": false
  }
]
```