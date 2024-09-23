let inputTextArea = document.getElementById("input-textarea");
let charCount = document.getElementById("char-count");
let wordCount = document.getElementById("word-count");

inputTextArea.addEventListener("input", () => {
  // Count characters excluding spaces
  let textWithoutSpaces = inputTextArea.value.replace(/\s/g, "");
  charCount.textContent = textWithoutSpaces.length;

  // Trim whitespace and count words
  let txt = inputTextArea.value.trim();
  wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});
