import { assetResolver, embedResolver, listItemResolver, listResolver, paragraphResolver, quoteResolver, tableCellResolver, tableHeaderCellResolver } from '../../resolvers/contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: assetResolver,
    [BLOCKS.EMBEDDED_ENTRY]: embedResolver,
    [BLOCKS.LIST_ITEM]: listItemResolver,
    [BLOCKS.OL_LIST]: listResolver,
    [BLOCKS.PARAGRAPH]: paragraphResolver,
    [BLOCKS.QUOTE]: quoteResolver,
    [BLOCKS.TABLE_CELL]: tableCellResolver,
    [BLOCKS.TABLE_HEADER_CELL]: tableHeaderCellResolver,
    [BLOCKS.UL_LIST]: listResolver
  }
}

function parser(data) {
  return documentToHtmlString(data, options)
}

export default parser

