export const removeParagraphNode = (node) => {
  return {
    ...node,
    content: [
      ...node.content[0].content
    ]
  }
}
