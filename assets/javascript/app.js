//establishing global variables
var currencytype = "";
var billtotal = 0;
var tippercent = 0;
var numberofguests = 0;
var calculatedtip = 0;
var tipandbill = 0.00;

// preparing page to recieve inputs
$(document).ready(function () {
    console.log("ready!");
});

// create function to run tip calculations and display results on page
function calculatetip() {

    // calculate tip alone. creates running decimal bug
    calculatedtip = (billtotal) * (tippercent);
    // adds calculated tip to total bill and limits decimals to 2 values.
    tipandbill = (calculatedtip + billtotal).toFixed(2);
    // calculates the split tip. creates running decimal bug
    splittip = calculatedtip / (numberofguests)
    //consolelog for debugging
    console.log("calculated tip is " + calculatedtip);
    console.log("tip plus original pretax bill " + tipandbill);
    // fixes bug from calculatedtip for display on screen
    var fixedcalculatedtip = calculatedtip.toFixed(2);
    // fixes bug from splittip for display on screen
    var fixedsplittip = splittip.toFixed(2);
    //calculate split bill total
    splitbill = billtotal / (numberofguests)
    var fixedsplitbill = splitbill.toFixed(2);


    //Screen display using JQuery template literal HTML generation
    $("#result").html(`
    <div class="row pt-3">
        <div class="col-sm-3"></div>
        <div style="background:#3C7A89" class="card text-white col-sm-3">
            <div class="card-body">
                <h4 class="card-title">Total Bill</h4>
                <h5 class="card-text">${currencytype}${billtotal}</h5>
            </div>
        </div>
        <div style="background:#3C7A89" class="card text-white col-sm-3">
            <div class="card-body">
                <h4 class="card-title">Bill Split</h4>
                <h5 class="card-text">${currencytype}${fixedsplitbill}</h5>
            </div>
        </div>
        <div class="col-sm-3"></div>
    </div>
    <div class="row pt-1">
    <div class="col-sm-3"></div>
    <div style="background:#3C7A89" class="card text-white col-sm-3">
    <div class="card-body">
        <h4 class="card-title">Tip</h4>
        <h5 class="card-text">${currencytype}${fixedcalculatedtip}</h5>
    </div>
</div>
<div style="background:#3C7A89" class="card text-white col-sm-3">
    <div class="card-body">
        <h4 class="card-title">Tip Split</h4>
        <h5 class="card-text">${currencytype}${fixedsplittip}</h5>
    </div>
</div>
<div class="col-sm-3"></div>
</div>
`);
}


// when button is clicked, collect user data and store each response in variables
$("#calculatetip").click(function () {
// validate form entry
// if blank
    var x = document.forms["tipform"]["billtotal"].value;
    if (x == "") {
      alert("Total Bill may not be blank.");
      return ;
    }
// if bill is negative
    if (x <= 0) {
        alert("Total Bill must be larger than zero.");
        return ;
    }

// collect currency type and console log for debugging
    currencytype = String($('#currency').val());
    console.log(currencytype);
    console.log(typeof currencytype);

// collect bill total and console log for debugging
    billtotal = Number($('#billtotal').val());
    console.log(billtotal);
    console.log(typeof billtotal);

// collect tip percent and console log for debugging
    tippercent = Number($('#tipamount').val());
    console.log(tippercent);
    console.log(typeof tippercent);

// collect number of guest
    numberofguests = Number($('#tipsplit').val());
    console.log(numberofguests);
    console.log(typeof numberofguests);

// run calculatetip function
    calculatetip();


})



