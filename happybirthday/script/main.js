// Music confirmation popup
window.addEventListener('load', () => {
     createHearts();
    Swal.fire({
        title: 'Do you want to play music in the background?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});

// Notebook typing effect
const notebookMessage = `To the most special girl in my world 💖,

On this beautiful day, I just want to say...
You are my sunshine ☀️, my smile 😄, my everything.

Thank you for being so amazing.
Wishing you joy, laughter, and all the love in the universe.

Happy Birthday, my love! 🎂💝

— With all my heart, Itish 💌`;

let notebookIndex = 0;
const notebookTextEl = document.getElementById('notebookText');

function typeNotebookText() {
    if (notebookIndex < notebookMessage.length) {
        notebookTextEl.innerHTML += notebookMessage.charAt(notebookIndex);
        notebookIndex++;
        setTimeout(typeNotebookText, 50)
    }
}

// Animation Timeline
const animationTimeline = () => {
    const hbd = document.getElementsByClassName("wish-hbd")[0];
    hbd.innerHTML = `<span>${hbd.innerHTML.split(" ").join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    };

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    };

    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
        visibility: "visible"
    })
        .from(".one", 0.7, { opacity: 0, y: 10 })
        .from(".two", 1.3, { opacity: 0, y: 10 })
        .to(".one", 0.7, { opacity: 0, y: 10 }, "+=3.5")
        .to(".two", 0.7, { opacity: 0, y: 10 }, "-=1")
        .from(".three", 0.7, { opacity: 0, y: 10 })
        .to(".three", 0.7, { opacity: 0, y: 10 }, "+=3")

        // REPLACED .four (chatbox) with notebook effect
        .from(".four", 0.7, {
            scale: 0.2,
            opacity: 0,
            onComplete: () => {
                typeNotebookText();
                const delayTime = notebookMessage.length * 50 + 1000; // total typing time + 1s buffer

                setTimeout(() => {
                    tl.to(".four", 0.5, {
                        scale: 0.2,
                        opacity: 0,
                        y: -150
                    });

                    tl.play(); // resume timeline
                }, delayTime);

                tl.pause(); // pause timeline while typing
            }
        })

        .to(".four", 0.5, {
            scale: 0.2,
            opacity: 0,
            y: -150
        }, "+=6") // Wait ~6s to finish typing

        .from(".idea-1", 0.7, ideaTextTrans)
        .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
        .from(".idea-2", 0.7, ideaTextTrans)
        .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
        .from(".idea-3", 0.7, ideaTextTrans)
        .to(".idea-3 strong", 0.5, {
            scale: 1.2,
            x: 10,
            backgroundColor: "rgb(21, 161, 237)",
            color: "#fff",
        })
        .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
        .from(".idea-4", 0.7, ideaTextTrans)
        .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
        .from(".idea-5", 0.7, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
        }, "+=1.5")
        .to(".idea-5 span", 0.7, {
            rotation: 90,
            x: 8,
        }, "+=1.4")
        .to(".idea-5", 0.7, {
            scale: 0.2,
            opacity: 0,
        }, "+=2")
        .staggerFrom(".idea-6 span", 0.8, {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut,
        }, 0.2)
        .staggerTo(".idea-6 span", 0.8, {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
        }, 0.2, "+=1.5")

        .staggerFromTo(".baloons img", 2.5, {
            opacity: 0.9,
            y: 1400,
        }, {
            opacity: 1,
            y: -1000,
        }, 0.2)

        .from(".profile-picture", 0.5, {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
        }, "-=2")
        .from(".hat", 0.5, {
            x: -100,
            y: 350,
            rotation: -180,
            opacity: 0,
        })
        .from(".celebration-btn", 0.8, {
            opacity: 0,
            y: 20,
            scale: 0.8,
            ease: Power2.easeOut,
        })


    .staggerFrom(".wish-hbd span", 0.7, {
            opacity: 0,
            y: -50,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
        }, 0.1)
         .set(".celebration-btn", {
        opacity: 0,
        y: 50,
    })
    .to(".celebration-btn", 0.8, {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: Power2.easeOut,
    })
    .staggerFromTo(".wish-hbd span", 0.7, {
        scale: 1.4,
        rotationY: 150,
    }, {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
    }, 0.1, "party")
    .from(".wish h5", 0.5, {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
    }, "party")

        .staggerTo(".eight svg", 1.5, {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
    }, 0.3)

    .to(".six", 0.5, {
        opacity: 1,
        y: 30,
        zIndex: 10,
    });


// Restart on click
// const replyBtn = document.getElementById("replay");
// replyBtn.addEventListener("click", () => {
//     // Reset notebook
//     notebookTextEl.innerHTML = '';
//     notebookIndex = 0;
//     tl.restart();
// });
};


 function createHearts() {
            const heartsContainer = document.getElementById('heartsContainer');
            const heartCount = 30;
            
            for (let i = 0; i < heartCount; i++) {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.innerHTML = '<i class="fas fa-heart"></i>';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.color = `hsl(${Math.random() * 60 + 330}, 100%, 70%)`;
                heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
                heart.style.animationDelay = Math.random() * 10 + 's';
                heart.style.animationDuration = (Math.random() * 10 + 5) + 's';
                heartsContainer.appendChild(heart);
            }
        }
