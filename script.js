/**
Logger.Log part can be deleted - they were used for debugging purposes.
**/

function createDraftWithEstonianDateAndHtmlBody() {
 // Logger.log("Script started."); // Simple log to confirm the script is being triggered.

  var recipient = "someaddress@someaddress.com"; // Replace with the recipient's email address
  var subject = "näidud " + getEstonianMonthAndYear(); // Subject with current month and year in Estonian
  var htmlBody = getLastSentEmailBody("näidud"); // Get the HTML body from the last sent email with subject "näidud"
  var plainTextBody = stripHtmlWithLineBreaks(htmlBody); // Convert HTML to plain text with line breaks

  // Split the body into paragraphs
  var paragraphs = plainTextBody.split("\n\n"); // Split by double newlines into paragraphs

 // Logger.log("Paragraphs: " + paragraphs.length); // Log number of paragraphs to check if we're processing them correctly

  // Check if there are at least 3 paragraphs to process
  if (paragraphs.length >= 3) {
    // Process the third paragraph (index 2)
    var thirdParagraph = paragraphs[2];
    var regex = /\d+\.\d+/g;  // Match numbers with decimals (e.g., 36.09)
    var numbers = thirdParagraph.match(regex); // Extract all numbers in the third paragraph
    
   // Logger.log("Third Paragraph: " + thirdParagraph); // Log the third paragraph
   // Logger.log("Extracted numbers from third paragraph: " + numbers); // Log the extracted numbers

    if (numbers && numbers.length > 1) {
      // Get the second number from the matched numbers (index 1)
      var extractedValue = parseFloat(numbers[1]); // Use the second number, i.e., the value 36.65

      var blankValue = "blank"; // Placeholder for user to replace
      var calculatedResult = "0.00"; // Initially set to 0.00

      // Update the third paragraph with only the second number and placeholders
      paragraphs[2] = "    Külm vesi: " + extractedValue.toFixed(2) + "    " + blankValue + "   <b>" + calculatedResult + "</b>";
     // Logger.log("Updated Third Paragraph: " + paragraphs[2]); // Log the updated third paragraph
    }
  }

  // Check if there are at least 4 paragraphs to process
  if (paragraphs.length >= 4) {
    // Process the fourth paragraph (index 3) similarly
    var fourthParagraph = paragraphs[3];
    var numbers = fourthParagraph.match(regex); // Extract all numbers in the fourth paragraph
    
   // Logger.log("Fourth Paragraph: " + fourthParagraph); // Log the fourth paragraph
   // Logger.log("Extracted numbers from fourth paragraph: " + numbers); // Log the extracted numbers

    if (numbers && numbers.length > 1) {
      // Get the second number from the matched numbers (index 1)
      var extractedValue = parseFloat(numbers[1]); // Use the second number from the match (i.e., 13.20)

      var blankValue = "blank"; // Placeholder for user to replace
      var calculatedResult = "0.00"; // Set the calculated result to 0.00

      // Update the fourth paragraph with only the second number and placeholders
      paragraphs[3] = "    Soe vesi: " + extractedValue.toFixed(2) + "    " + blankValue + "   <b>" + calculatedResult + "</b>";
     // Logger.log("Updated Fourth Paragraph: " + paragraphs[3]); // Log the updated fourth paragraph
    }
  }

  // Process the last three paragraphs (7th, 8th, and 9th) if available
  if (paragraphs.length >= 7) {
    var lastThreeParagraphs = paragraphs.slice(6, 9).join("\n");
    paragraphs = paragraphs.slice(0, 6).concat(lastThreeParagraphs); // Combine and keep all paragraphs intact
  }

  // Rejoin the paragraphs back into the plain text body
  plainTextBody = paragraphs.join("\n\n");

  // Convert plainTextBody to HTML by replacing newlines with <br> tags
  var htmlFormattedBody = plainTextBody.replace(/\n/g, "<br>"); // Convert newlines to <br> tags

  // Create the draft with HTML body
  GmailApp.createDraft(recipient, subject, "", { htmlBody: htmlFormattedBody });
}

function getEstonianMonthAndYear() {
  var date = new Date();
  var monthNames = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
  var month = monthNames[date.getMonth()]; // Get the month name in Estonian
  var year = date.getFullYear(); // Get the year
  return month + " " + year;
}

function getLastSentEmailBody(subject) {
  var threads = GmailApp.search("subject:" + subject + " in:sent"); // Search for sent emails with the given subject
  var messages = threads[0].getMessages();
  var lastMessage = messages[messages.length - 1]; // Get the last message in the thread
  return lastMessage.getBody();
}

function stripHtmlWithLineBreaks(html) {
  // Replace <br> tags with newline characters
  html = html.replace(/<br\s*\/?>/gi, "\n");

  // Replace block-level elements with newline characters
  html = html.replace(/<\/?(div|p|blockquote|li|ol|ul|h1|h2|h3|h4|h5|h6)[^>]*>/gi, "\n");

  // Remove remaining HTML tags
  html = html.replace(/<[^>]+>/g, '');

  // Replace multiple newlines with a single newline
  html = html.replace(/\n\s*\n/g, '\n\n');

  return html.trim(); // Remove leading and trailing whitespace
}
