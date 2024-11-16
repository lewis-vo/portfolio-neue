let Constants = {
  descriptions: [
    "Gemini",
    "INTJ",
    "Amateur Astronomer",
    "Cat Person",
    "RMIT University",
    "Design Studies",
    "Melancholy is My Muse",
    "Baggy Fits Addict",
    "Amateur Composer",
    "Búp Lè Hater",
  ]
}

document.addEventListener('alpine:initialized', () => {
  /*
  const shuffleString = (str, replaceChance, replacementChars) => {
    return str
      .split("")
      .map((char) => {
        return Math.random() < replaceChance // Only replace the text if the random value goes over the specified threshold
          ? replacementChars[Math.floor(Math.random() * replacementChars.length)]
          : char;
      })
      .sort(() => Math.random() - 0.5)
      .join("");
  };
  function shuffleTextOnHover() {
    const elements = document.querySelectorAll(".hoverable");
    const shuffleDuration = 200; // Duration of shuffling in milliseconds
    const shuffleCount = 8; // Number of times to shuffle
    const replaceChance = 0.4; // Chance of replacing a character
    const replacementChars = "@#$%^&*-+=[]?/";
  
    elements.forEach((element) => {
      const originalText = element.textContent;
  
      const shuffle = () => {
        let shuffleInterval = setInterval(() => {
          element.textContent = shuffleString(
            originalText,
            replaceChance,
            replacementChars
          );
        }, shuffleDuration / shuffleCount);
  
        setTimeout(() => {
          clearInterval(shuffleInterval);
          element.textContent = originalText;
        }, shuffleDuration);
      };
  
      element.addEventListener("mouseover", shuffle);
    });
  }
  
  shuffleTextOnHover();*/

  let navigationBar = document.querySelector("nav");
  let navItems =  navigationBar.querySelectorAll(".slide-in-hidden");
  let timingOffset = 50;
  let index = 0;

  setTimeout(() => {
    let slideInInterval = setInterval(() => {
      navItems[index].classList.remove("slide-in-hidden");
      navItems[index].classList.add("slide-in");
      index++;
  
      if (index == navItems.length) clearInterval(slideInInterval);
    }, timingOffset);
  }, 500);
})