import { options as sharedOptions } from './parser'
import { asset, embed, paragraph } from '../../resolvers/contentful/amp/index'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

const options = {
  renderNode: {
    ...sharedOptions.renderNode,
    [BLOCKS.EMBEDDED_ASSET]: asset,
    [BLOCKS.EMBEDDED_ENTRY]: embed,
    [BLOCKS.PARAGRAPH]: paragraph,
    [BLOCKS.TABLE]: (node, next) => ''
  }
}

function parser(data) {
  return documentToHtmlString(data, options)
}

export default parser
