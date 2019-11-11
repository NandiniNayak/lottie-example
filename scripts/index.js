var anim= bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'text_demo.json'
})

// anim.addEventListener("DOMLoaded", function () {
//     console.log("BFEORE:", anim.renderer.elements[0]);
//   anim.renderer.elements[0].updateDocumentData({ t: 'text data changed', s: 90 }, 0);
//     anim.play();
//     console.log("AFTER:", anim.renderer.elements[0]);
//     anim.play();
// });

function playAnimation(jsonFileName){
    var anim= bodymovin.loadAnimation({
    container: document.getElementById('newAnimation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: jsonFileName
  })

  anim.addEventListener("DOMLoaded", function () {
    var newText = document.getElementById("input").value
    console.log("dom", newText)
    console.log("BEFORE:", anim.renderer.elements[0]);
    anim.renderer.elements[0].updateDocumentData({ t: newText, s: 90 }, 0);
    anim.play();
    console.log("AFTER:", anim.renderer.elements[0]);
    anim.play();
  });

}

