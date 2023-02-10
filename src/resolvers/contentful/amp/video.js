export default (node) =>
`<amp-video width="${node.data.target.fields.width}" height="${node.data.target.fields.height}" src="${node.data.target.fields.videoUrls['application/x-mpegURL']}" poster="${node.data.target.fields.videoUrls['image/jpeg']}" layout="responsive" controls>
  <div fallback>
    <p>Your browser doesn't support HTML5 video.</p>
  </div>
  <source type="video/mp4" src="${node.data.target.fields.videoUrls['video/mp4']}">
</amp-video>`
