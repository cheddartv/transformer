import config from '../../config'

export default (node) => `
  <div class="${config.embed.class} ${config.embed['associated-press'].class}">
    <iframe src="https://interactives.ap.org/ap-polling-presidential-approval" class="ap-embed" width="100%" height="600" style="border: 1px solid #eee;"></iframe>
  </div>`
