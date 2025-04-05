const words = ["Welcome to Goldmine AI!", "How may I help you?"];

// const text = "Have a great Monday everyone!";
const typewriter = document.getElementById("typewriter");
let i = 0;
let k = 0;

function typeWrite() {
    const text = words[k];
    if (i < text.length) {
        typewriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWrite, 80);
    } else {
            setTimeout(resetTypewriter, 2500);
    }

}

function resetTypewriter() {
    typewriter.innerHTML = "";
    i = 0;

    if(k < words.length)
    {
        k++;
    }
    if(k >= words.length)
    {
        k=0;
    }

    typeWrite();
}
typeWrite();


// let currentWord = "";
// let isDeleting = false;
// if (isDeleting) {
//     document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
//     j--;
//     if (j === 0) {
//       isDeleting = false;
//       i++;
//       if (i === words.length) {
//         i = 0;
//       }
//     }
//   } else {
//     document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
//     j++;
//     if (j === currentWord.length) {
//       isDeleting = true;
//     }
//   }