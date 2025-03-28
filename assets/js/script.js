// Encrypt Text
function encryptText() {
    let inputText = document.getElementById("inputText").value;
    let encryptedText = btoa(inputText); // Convert to Base64
    document.getElementById("encryptedText").value = encryptedText;
}

// Decrypt Text
function decryptText() {
    let encryptedText = document.getElementById("decryptInput").value;
    try {
        let decryptedText = atob(encryptedText); // Convert from Base64
        document.getElementById("decryptedText").value = decryptedText;
    } catch (error) {
        document.getElementById("decryptedText").value = "Invalid encrypted text";
    }
}
