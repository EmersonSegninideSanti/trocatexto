function trocaStrings () {
    const originalText = document.getElementById('original-text').value;
    const toRmv = document.getElementById('original-substring').value;
    const toInsrt = document.getElementById('new-substring').value;
    const newText = originalText.split(toRmv).join(toInsrt);
    document.getElementById('new-text-input').value = newText;
}
function copy () {
    const text = document.getElementById("new-text-input").value;
    navigator.clipboard.writeText(text);

    const copy_message = document.querySelector('.clipboard-toast');
    copy_message.style.animationName = "move";
    copy_message.style.display = "block";
    setTimeout(() => {
        copy_message.style.animationName = "none";
        copy_message.style.display = "none";
    }, 3000)
}
