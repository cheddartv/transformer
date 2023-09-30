import config from '../../../config'
import resolveImageDomain from "../../resolveImageDomain";

export default (node) =>
  `<div class="${config.asset.image.class}">
    <img src="https:${resolveImageDomain(node?.data?.target?.fields?.file?.url)}?fit=fill&w=1920&h=1080&q=85" alt=""/>
    <em>${node?.data?.target?.fields?.description || ''}</em>
  </div>`
