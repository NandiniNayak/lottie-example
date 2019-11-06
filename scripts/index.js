var anim= bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
})

// console.log("elem", animation.renderer.elements[0].updateDocumentData({ t: 'new text', s: 20 }, 0));
// console.log("elem1", anim.renderer.elements[0]);

// anim.renderer.elements[0].updateDocumentData({ t: 'something' })


anim.addEventListener("DOMLoaded", function () {
    console.log("BFEORE:", anim.renderer.elements[0]);
    anim.renderer.elements[0].updateDocumentData({
        t: 'w'
    });
    anim.play();
    console.log("AFTER:", anim.renderer.elements[0]);
    anim.play();
});

