# Transformer

Transformer is a Node.js library designed to parse raw data into HTML content.

## Contentful RTE Data

Transformer will be able to parse Contentful's RTE data format into valid HTML string. Sample input data:
```JavaScript
{
  "nodeType": "document",
  "data": {},
  "content": [
    {
      "nodeType": "paragraph",]
      "data": {},
      "content": [
        {
          "nodeType": "text",
          "value": "This text is ",
          "data": {},
          "marks": []
        },
        {
          "nodeType": "text",
          "value": "important",
          "data": {},
          "marks": [
            "type": "bold"
          ]
        }
      ]
    }
  ]
}
```

## EditorJS Data

Transformer parses EditorJS data format into valid HTML string. Sample input data:
```JavaScript
[
  {
    "data": {
      "text": "New Jersey’s plastic and paper bag ban goes into effect in about two weeks."
    },
    "type": "paragraph"
  },
  {
    "data": {
      "text": "A new Monmouth University poll found that while a majority of New Jersey residents are aware of the plastic bag ban, not many people knew that the ban also included paper bags."
    },
    "type": "paragraph"
  },
]
```

## Development
- Install Node.js version 12
- Install yarn package manager
- Install dependencies by running `yarn install`

## Usage
`yarn add git://github.com/cheddartv/transformer`
