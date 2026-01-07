function runScript () {

    const originalTextElement = document.getElementById('original-text');

    // alert('script');

    // if (originalTextElement) {
    //     alert("True");
    // }else {
    //     alert("Falsi");
    // }
    originalTextElement.addEventListener('input', trocaStrings);

    // alert('passou addEventListener');


    function trocaStrings () {
        // alert("Entrou trocaString");
        const originalText = originalTextElement.value;
        const toRmv = document.getElementById('original-substring').value;
        const toInsrt = document.getElementById('new-substring').value;
        const newText = originalText.split(toRmv).join(toInsrt);
        document.getElementById('new-text').value = newText;
        // alert("Fim trocaStrings!!!");
    }
}

document.addEventListener('DOMContentLoaded',runScript());