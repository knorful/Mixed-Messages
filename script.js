const positiveAffirmations = [
  "I am worthy of love and respect.",
  "I am capable of achieving my goals.",
  "I am grateful for all that I have.",
  "I am confident in my abilities.",
  "I attract positivity into my life.",
  "I am deserving of success.",
  "I am surrounded by supportive people.",
  "I believe in my dreams.",
  "I am in control of my happiness.",
  "I radiate positivity and kindness.",
  "I am resilient and can overcome challenges.",
  "I am constantly growing and evolving.",
  "I am deserving of love and happiness.",
  "I embrace change with open arms.",
  "I am filled with inner peace.",
  "I trust in the process of life.",
  "I am proud of myself and my achievements.",
  "I am capable of handling whatever comes my way.",
  "I am creating a life filled with joy.",
  "I am blessed with abundant opportunities.",
  "I am confident in my ability to succeed.",
  "I am worthy of all the good things in life.",
  "I am grateful for my unique qualities.",
  "I am a magnet for success and prosperity.",
  "I am surrounded by love and positivity.",
  "I am making a positive impact on the world.",
  "I am worthy of success and happiness.",
  "I am at peace with who I am.",
  "I am loved and appreciated by others.",
  "I am free to be myself.",
  "I am open to receiving abundance in all areas of my life.",
  "I am aligned with my true purpose.",
  "I am filled with gratitude for each new day.",
  "I am confident in my ability to overcome obstacles.",
  "I am surrounded by abundance and prosperity.",
  "I am a beacon of light for others.",
  "I am deserving of all the good things life has to offer.",
  "I am constantly growing and improving.",
  "I am grateful for the lessons that life teaches me.",
  "I am deserving of love and kindness.",
  "I am creating a life I love.",
  "I am surrounded by positivity and optimism.",
  "I am deserving of success and happiness.",
  "I am confident in my ability to achieve my goals.",
  "I am grateful for the abundance in my life.",
  "I am filled with peace and tranquility.",
  "I am attracting positive energy into my life.",
  "I am worthy of all the good things life has to offer.",
  "I am capable of achieving anything I set my mind to.",
  "I am deserving of love, happiness, and success.",
];

const affirmation = document.getElementById("affirmation");
const backBtn = document.getElementById("back");
const nextBtn = document.getElementById("next");
let previousIdx = 0;
let randIdx;

const getRandomIdx = () =>
  Math.floor(Math.random() * positiveAffirmations.length);

const getRandAffirmation = () => {
  // if (!backBtn.disabled) {
  //   backBtn.disabled = true;
  // }
  randIdx = getRandomIdx();
  affirmation.innerHTML = positiveAffirmations[randIdx];
};

//user can't move back on default affirmation
backBtn.disabled = true;
//on default have an affirmation present
getRandAffirmation();

nextBtn.addEventListener("click", () => {
  backBtn.disabled = false;
  if (!backBtn.disabled) {
    previousIdx = randIdx;
  }
  getRandAffirmation();
});

backBtn.addEventListener("click", () => {
  console.log(previousIdx, randIdx);
  if (previousIdx >= 0) {
    affirmation.innerHTML = positiveAffirmations[previousIdx];
    backBtn.disabled = true;
  }
});
