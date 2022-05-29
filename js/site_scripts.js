//Create footer image function
const footerImageGenerator = () => {
  let imageList = [];
  const imageSuffix = [
    "bustour",
    "cabinrental",
    "campingadv",
    "collegetours",
    "rentalbike",
    "tourgroup",
  ];
  const openList = "<li class='partner'>";
  const closeList = "</li>";

  //More concise way to write it
  //Understood what inclass-demo did were for the best practice purpose
  for (let i = 0; i < 6; i++) {
    imageList = [
      ...imageList,
      `${openList}<img src="images/partner-${imageSuffix[i]}.png" alt="Partner Tour Group" />${closeList}`,
    ];
  }

  document.getElementById("partners").innerHTML = imageList.join("");
};

footerImageGenerator();
