async function sendMessage(){

    let input = document.getElementById("userInput");
    let text = input.value.trim();

    if(text === "") return;

    let chatBox = document.getElementById("chatBox");

    chatBox.innerHTML += `
        <div class="user msg">${text}</div>
    `;

    input.value = "";

    let response = await fetch("/ask", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            message:text
        })
    });

    let data = await response.json();

    chatBox.innerHTML += `
        <div class="bot msg">${data.reply}</div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;
}