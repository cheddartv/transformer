import { asset, embed, listItem, list, paragraph, quote, tableCell, tableHeaderCell } from '../../resolvers/contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

export const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: asset,
    [BLOCKS.EMBEDDED_ENTRY]: embed,
    [BLOCKS.LIST_ITEM]: listItem,
    [BLOCKS.OL_LIST]: list,
    [BLOCKS.PARAGRAPH]: paragraph,
    [BLOCKS.QUOTE]: quote,
    [BLOCKS.TABLE_CELL]: tableCell,
    [BLOCKS.TABLE_HEADER_CELL]: tableHeaderCell,
    [BLOCKS.UL_LIST]: list
  }
}

function parser(data) {
  return documentToHtmlString(data, options)
}

export default parser
