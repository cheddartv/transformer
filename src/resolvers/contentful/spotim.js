export default (node) =>
  `<script src="https://launcher.spot.im/spot/${node.attributes.organization}" data-spotim-module="spotim-launcher" data-live-blog="true" data-live-event-code="${node.content}" data-enable-live-blog-replies="false"></script>`
