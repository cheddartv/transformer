const document = (nodeList) => {
  return nodeList?.content?.map((node) => parse(node))
}

export default document
