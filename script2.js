function trocaStrings () {
    const originalText = document.getElementById('original-text').value;
    const toRmv = document.getElementById('original-substring').value;
    const toInsrt = document.getElementById('new-substring').value;
    const newText = originalText.split(toRmv).join(toInsrt);
    document.getElementById('new-text').value = newText;
}