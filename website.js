<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PlanEatRepeat</title>
  
  <link rel="stylesheet" href="recipegenerator2.css">
  <link rel="icon" type="image/x-icon" href="https://cdn-icons-png.flaticon.com/512/12271/12271946.png">

</head>
<body onload="addOptionsToPage()">
  <div class="container">
    <div class="header">
      <header style="text-align: center;"> <img id='headerbackground' src='handwriting_20231112_221458_via_10015_io-removebg-preview.png' ></header>
    </div>
    <div class="allmenudetails">
      <div class='dateinput' style="border:none; padding-bottom:0px;">
        <input class='date' type="date" id="txtDate" onclick="pastDays()">
        <button class='create' onclick="createTheDataTable()">Create</button>
      </div>
      <div class="breakfast-MIIC">
        <div class="breakfastMBG">
          <p class="breakfastMT">Breakfast Menu</p>
        </div>
        <div class='breakfastCBG'>
          <select id="breakfastmenu" onchange="getBreakfastDetails()"></select>
          <span class="breakfast-details"></span>
        </div>
      </div>
     <div class="lunch-MIIC">
        <div class='lunchMBG'>
          <p class='lunchMT'>Lunch Menu</p>
        </div>
        <div class='lunchCBG'>
          <select id="lunchmenu" onchange="getLunchDetails()"></select>
          <span class="lunch-details"></span>
        </div>
      </div>
      <div class="dinner-MIIC">
        <div class="dinnerMBG">
          <p class="dinnerMT">Dinner Menu</p>
        </div>
        <div class="dinnerCBG">
          <select id="dinnermenu" onchange="getDinnerDetails()"></select>
          <span class="dinner-details"></span>
        </div>
      </div>
      
    </div>
  </div>
  <p style="text-align: center; font-size: large;">Your Meal Plan</p>
  <div class="datafromjs">
    <p style="text-align: center;">Create A Plan to display</p>
  </div>
  <script src="data2.js"></script>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js">
  </script>
</body>
</html>