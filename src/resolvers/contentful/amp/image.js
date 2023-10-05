import resolveImageDomain from "../../resolveImageDomain";

export default node =>
  `<amp-img
    width="600"
    height="338"
    layout="responsive"
    src="https:${resolveImageDomain(node?.data?.target?.fields?.file?.url)}?fit=fill&w=600&h=338&q=85"
    alt=""></amp-img>
  <em>${node?.data?.target?.fields?.description}</em>`
