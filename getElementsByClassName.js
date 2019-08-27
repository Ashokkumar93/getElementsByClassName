function getElementsByClassNameImplementation(className) {
  const nodes = []
  
  function traverseDomNodes(node) {
    if (node.classList && node.classList.value.indexOf(className) > -1) {
      nodes.push(node)
    }
    node.childNodes.forEach((child) => 
      traverseDomNodes(child)
    )
  }
  traverseDomNodes(document.body)
  
  return nodes
}
