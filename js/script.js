var subTypeElement = document.querySelector("#subscription");
var subDurElement = document.querySelector("#months");
var result = document.querySelector(".result");

var subType = "basic";
var subDur = 1;

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  updateSubscriptionDiv();
});

subDurElement.addEventListener("change", function (e) {
  subDur = e.target.value;
  updateSubscriptionDiv();
});

function updateSubscriptionDiv() {
  var monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = monthlyCost * subDur;
  result.innerText = `You have chosen a ${subDur} month ${subType} plan for $${total}.`;
}
