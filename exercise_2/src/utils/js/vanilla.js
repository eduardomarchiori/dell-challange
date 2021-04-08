function changeColor(el, color){
  const [span] = el.children;

  if(span.style.backgroundColor == color){
    span.style.backgroundColor = 'white';
    return;
  }

  span.style.backgroundColor = color;
}