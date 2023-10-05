import resolveImageDomain from "../../resolveImageDomain";

export default (node) =>
  `<amp-google-document-embed
    src="https:${resolveImageDomain(node?.data?.target?.fields?.file?.url)}"
    width="300"
    height="500"
    layout="responsive">
  </amp-google-document-embed>`


