function addRowAndDate() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Lisa tühi rida enne teist rida (esimene andmerida)
  // Insert a blank row before row 2 (the first data row)
  sheet.insertRowBefore(2);

  // Kuupäev - kuu esimene päev
  // Date - first day of the current month
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  // Vorminda kuupäev kujule "dd.mm.yyyy"
  // Format the date as "dd.mm.yyyy"
  const day = ("0" + firstDayOfMonth.getDate()).slice(-2);
  const month = ("0" + (firstDayOfMonth.getMonth() + 1)).slice(-2);
  const year = firstDayOfMonth.getFullYear();
  const formattedDate = `${day}.${month}.${year}`;

  // Pane see kuupäev lahtrisse A2 (sest uus rida lisati rea 2 ette)
  // Put this date into cell A2 (since a new row was inserted before row 2)
  sheet.getRange("A2").setValue(formattedDate);

  // Võta andmed eelmise rea C3 lahtrist
  // Get data from previous row's C3 cell
  const previousDataC = sheet.getRange("C3").getValue();

  // Pane need andmed lahtrisse B2
  // Put that data into cell B2
  sheet.getRange("B2").setValue(previousDataC);

  // Võta andmed eelmise rea F3 lahtrist
  // Get data from previous row's F3 cell
  const previousDataF = sheet.getRange("F3").getValue();

  // Pane need andmed lahtrisse E2
  // Put that data into cell E2
  sheet.getRange("E2").setValue(previousDataF);

  // Lisa valemid D2 ja G2 lahtritesse
  // Add formulas into cells D2 and G2
  sheet.getRange("D2").setFormula("=C2-B2");
  sheet.getRange("G2").setFormula("=F2-E2");
}

function createDraftWithEstonianDateAndHtmlBody2() {
  //eposti päis, header
  var recipient = ""; //kirjuta siia saaja, fill the email
  var subject = "näidud" + getEstonianMonthAndYear();

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var coldWaterValue = sheet.getRange("B2").getValue();
  var coldWaterBlank = sheet.getRange("C2").getValue();
  var coldWaterCalc = sheet.getRange("D2").getValue();

  var hotWaterValue = sheet.getRange("E2").getValue();
  var hotWaterBlank = sheet.getRange("F2").getValue();
  var hotWaterCalc = sheet.getRange("G2").getValue();

  var residents = sheet.getRange("J1").getValue();; // Võid vajadusel lugeda ka lahtrist
//emaili keha
// body of the email
  var htmlBody = "";
htmlBody += "Tere!<br><br>";
htmlBody += "Näidud on järgmised:<br><br>";

htmlBody += '<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">';


htmlBody += '<tr>';
htmlBody += '<td>Külm vesi</td>'; //Cold Water
htmlBody += '<td>' + parseFloat(coldWaterValue).toFixed(2) + '</td>';
htmlBody += '<td>' + coldWaterBlank + '</td>';
htmlBody += '<td><b>' + parseFloat(coldWaterCalc).toFixed(2) + '</b></td>';
htmlBody += '</tr>';

htmlBody += '<tr>';
htmlBody += '<td>Soe vesi</td>';
htmlBody += '<td>' + parseFloat(hotWaterValue).toFixed(2) + '</td>';
htmlBody += '<td>' + hotWaterBlank + '</td>';
htmlBody += '<td><b>' + parseFloat(hotWaterCalc).toFixed(2) + '</b></td>';
htmlBody += '</tr>';

htmlBody += '</table><br><br>';

htmlBody += "Elanikke: " + residents + "<br><br>";

htmlBody += "Heade soovidega<br>";
htmlBody += sheet.getRange("K1").getValue() + "<br>";
htmlBody +=  sheet.getRange("L1").getValue() + "<br>";
  GmailApp.createDraft(recipient, subject, "", { htmlBody: htmlBody });
}
//kuud eesti keeles
// months in Estonian
function getEstonianMonthAndYear() {
  var date = new Date();
  var monthNames = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
  var month = monthNames[date.getMonth()];
  var year = date.getFullYear();
  return month + " " + year;
}

