window.onload = function () {
  MathJax.Hub.Register.StartupHook('TeX Jax Ready', function () {
    window.editor = new MathJaxEditor('#editor')
    window.editor.setValue('<math><mi>x</mi><mo>=</mo><mfrac><mrow><mo>-</mo><mi>b</mi><mo>±</mo><msqrt><mrow><msup><mrow><mi>b</mi></mrow><mrow><mn>2</mn></mrow></msup><mo>-</mo><mn>4</mn><mi>a</mi><mi>c</mi></mrow></msqrt></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></math>')
  })
}