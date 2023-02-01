document.onreadystatechange = () => {
    Array.from(document.getElementsByClassName("fadeout")).forEach((e) => {
        e.style = "animation: fadeout 3s forwards;";
    });
};
const greet = document.getElementById("welcomegreet");
let greettext = Array.from(greet.innerHTML),
    i = 0;
greet.innerHTML = "";
const greetinterval = setInterval(() => {
    i < greettext.length
        ? ((span = document.createElement("span")),
          (span.innerHTML = greettext[i]),
          (span.style.color = "red"),
          greet.appendChild(span),
          i++)
        : clearInterval(greetinterval);
}, 150);
let bombtext = [],
    bombs = Array.from(document.getElementsByClassName("bomb"));
bombs.forEach((bomb, index) => {
    bombtext.push(bomb.innerHTML);
    bomb.innerHTML = "";
    Array.from(bombtext[index]).forEach((letter) => {
        const div = document.createElement("div");
        div.className = "bombletter";
        div.innerHTML = letter;
        bomb.appendChild(div);
    });
    bomb.onmouseover = () => {
        Array.from(bomb.children).forEach((child) => {
            child.style.transform = `translate(${Math.random() * 100 - 50}%,${
                Math.random() * 100 - 50
            }%) rotate(${Math.random() * 50 - 25}deg)`;
        });
    };
    bomb.onmouseleave = () => {
        Array.from(bomb.children).forEach((child) => {
            child.style = "";
        });
    };
});
const scrollto = (e) => {
    try {
        console.log("trying id");
        document.getElementById(`${e}`).scrollIntoView();
    } catch (error) {
        console.log("trying class");
        document.querySelector(`.${e}`).scrollIntoView();
    }
};
const hideshow = (e) => {
    try {
        document.getElementById(e).style.display == "block"
            ? (document.getElementById(e).style.display = "none")
            : (document.getElementById(e).style.display = "block");

        console.log("hello1");
    } catch (error) {
        Array.from(document.getElementsByClassName(e)).forEach((o) => {
            o.style.display == "block"
                ? (o.style.display = "none")
                : (o.style.display = "block");
        });
    }
};
const scrollleft = (e) => {
    document.getElementById(e).scrollLeft -= 500;
};
const scrollright = (e) => {
    document.getElementById(e).scrollLeft += 500;
};
