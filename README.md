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
### Supported embeddables
|**Type**|**Method**|**Code**|**Example**|
|------------------|----------------------------------|----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Associated Press | shortcode | `[associated-press]LINK[/associated-press]`|`[associated-press]https://interactives.ap.org/embeds/Itjny/6/[/associated-press]`|
| Facebook | shortcode| `[facebook]FACEBOOK_POST_OR_VIDEO_LINK[/facebook]` | `[facebook]https://www.facebook.com/20531316728/posts/10154009990506729/[/facebook]` |
| Google Maps| shortcode| `[google-maps]IFRAME_EMBED_CODE[/google-maps]` | `[google-maps]<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.7037980044033!2d-74.0129422!3d40.7025207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a139d556855%3A0x3f5495d6bf9b2b4f!2s1%20State%20St%2C%20New%20York%2C%20NY%2010004%2C%20USA!5e0!3m2!1sen!2sca!4v1676411914798!5m2!1sen!2sca" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>[/google-maps]` |
| Instagram| shortcode| `[instagram]LINK[/instagram]`| `[instagram]https://www.instagram.com/reel/CopbhHdgAzR/?hl=en[/instagram]`|
| PDFs | editor embed icon|| |
| SoundCloud | shortcode| `[soundcloud]LINK[/soundcloud]`| `[soundcloud]https://soundcloud.com/yangximusic/babyshark[/soundcloud]` |
| Spotim| shortcode| `[spotim organization=ORGANIZATION_ID]ID[/spotim]` | `[spotim organization=sp_jdoMBksO]5365[/spotim]`|
| Spotify| shortcode| `[spotify]LINK[/spotify]`| `[spotify]https://open.spotify.com/track/4br0nM6NdvDKMJgLj44foR[/spotify]` OR `[spotify]https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ[/spotify]` |
| Tagboard | shortcode| `[tagboard]ID[/tagboard]`| `[tagboard]5165[/tagboard]` |
| Tiktok | shortcode| `[tiktok]LINK[/tiktok]`| `[tiktok]https://www.tiktok.com/@scout2015/video/6718335390845095173[/tiktok]`|
| Twitter| shortcode| `[twitter]STATUS_LINK[/twitter]` | `[twitter]https://twitter.com/Santos4Congress/status/1618822155365658625[/twitter]` |
| UGC form | shortcode| `[ugc-form]ID[/ugc-form]`| `[ugc-form]5365[/ugc-form]` |
| UGC gallery| shortcode| `[ugc-gallery]ID[/ugc-gallery]`| `[ugc-gallery]5365[/ugc-gallery]` |
| VideoFile| editor embed icon - select entry || |
| Vimeo| shortcode| `[vimeo]LINK[/vimeo]`| `[vimeo]https://vimeo.com/165729368[/vimeo]` |
| Youtube| shortcode| `[youtube]LINK[/youtube]`|`[youtube]https://www.youtube.com/watch?v=n_uFzLPYDd8[/youtube]`|

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
