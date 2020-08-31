function elt(name, attrs) {
  var node = document.createElement(name);
  if (attrs) {
    for (var attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        node.setAttribute(attr, attrs[attr]);
      }
    }
  }
  for (var i = 2; i < arguments.length; i++) {
    var child = arguments[i];
    if (typeof child === 'string') {
      child = document.createTextNode(child);
    }
    node.appendChild(child);
  }
  return node;
}
