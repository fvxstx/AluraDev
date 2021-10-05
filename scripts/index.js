// Interações do botão highlight
const buttonHighlight = document.querySelector(".btn-highlight");
const areahighlight = document.querySelector(".main-code");
const colorBorder = document.querySelector(".container-code");

buttonHighlight.onclick = () => {
  const selectLanguage = document.querySelector("#language").value;
  const selectColor = document.querySelector("#color").value;
  const code = areahighlight.innerText;

  areahighlight.innerHTML = `<code class="preview hljs language-${selectLanguage}" contenteditable="true" aria-label="Code editor" spellcheck="false"></code>`;
  areahighlight.querySelector("code").textContent = code;

  colorBorder.style.border = `25px solid ${selectColor}`;

  hljs.highlightElement(areahighlight.querySelector("code"));
};
