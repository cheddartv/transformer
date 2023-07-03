import { decode } from 'he'

export function decodeHtml (htmlString){
  return decode(htmlString)
}

export default decodeHtml