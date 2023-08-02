const document = (nodeList) => {
  console.log('content', nodeList?.content)
  return nodeList?.content?.map((node) => parse(node))
}

export default document
