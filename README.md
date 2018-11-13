# Simple Card Processing Demo

Technical test for interview.

## Quick Start

```
npm i
npm start
```

Server runs by default on `localhost:1337`

## API

### Add card
`POST /cards`
```
{
  name: 'John Doe',
  number: '4929573259759450',
  limit: '£100'
}
```
### Charge card
`POST /cards/charge`
```
{
  name: 'John Doe',
  amount: '£50'
}
```
### Credit card
`POST /cards/credit`
```
{
  name: 'John Doe',
  amount: '£50'
}
```
### Get all cards
`GET /cards`

## Testing
Tests are written using tape and the output is in standard _TAP_ format.

```
npm test
```
