# Purpose ENG

Each month begins with sending my water readings by email to the accountant of the housing cooperative.

Although it is a very small task, it is still repetitive and annoying. For example, several times I have copied the accountant’s email incorrectly.

So, I decided to use **AI to help me code a script which creates an email draft in Gmail** with:

- _subject line_: näidud/water meter readings + current month in Estonian + current year
- _recipient_: accountant’s mail-address 
- _body_:
    - is taken from last sent email which subject is “näidud/water meter readings…”
    - origin line: Külm vesi/Cold water: 30.05 31.05 1.00 is replaced with line Külm vesi/Cold water: 31.05 blank 00.00
    - the same is done with Soe vesi/Hot water.

The second part was to trigger creating email-draft on the first day of each month. It is done inside App Script.



# Tools
- Copilot in Edge browser
- ChatGPT version without logging in
- Coogle Apps Script
- Gmail

  

# Result

- [Code](https://github.com/AnuVi/water_meter_email_draft/blob/main/script.js) 
- [Apps Script trigger settings](trigger.md)
![water_readings](https://github.com/user-attachments/assets/e5608ee8-0a5d-44bc-8f4e-2a7449c63b39)




# Further Developemnt - Maybe?

I also investigated the possibility to write the new reading and then do the calculation automatically. As it turns out there is a chance to do it using Google Sheets: entering new data/calculation.
But at the moment there is unwillingness to re-learn from my-side, because instead of one environment I have to use two: Google Sheets and Gmail.


Of course, I can just:
- add up some average amount and correct it once a while.
- add up some average amount based on summer/winter season.
- or feed my historical numbers and let set numbers from that.


But these are ideas for the future. At the moment I am quite happy with my current solution and let’s see how it works for me.




# Lessons
- Please, please, please use **Copy/Kopeeri button** instead of selecting the text CTRL+C/CTRL+V while coping script from AI-helper.
- If it feels that AI has left out some code - keep scrolling - it keeps writing the code.
- Simple steps and as usual, save the copy of working script somewhere separatly.
- And in some places AI "reads your mind" and other places it suprises you, that it does not. For example if you ask to correct spelling mistakes several times and it does it without repeating prompt. And suddenly I need synonym and I do not understand why it gives still spelling, but I did not say, that I want synonym this time.

  

# Copilot, ChatGPT and I


## Start with Copilot:
:heavy_check_mark: It nicely helped me modify months into Estonian.

:heavy_check_mark: With message body text, it was a little bit longer process. The firstresult was with html-tags. Then the message looked like this.
  ![image1](https://github.com/user-attachments/assets/662b94c2-8626-4a97-8de4-b07ae21e4ad9)

:heavy_check_mark: Maybe, I should have asked plain text version right away? After that, all text was in one row. But I wanted into the paragraphs.

:heavy_check_mark: It offered different solutions based on result or error message. And Copilot also guided to debug, run different test script or read console messages.

:x: Somewhere during the process I celebrated the progress and thanked it. Then gave the new prompt and suddenly Copilot explained me how to do it in Excel. I do not know was it celebration/thank-you part or some keywords I used for prompting something to do using Excel in earlier conversions.

:x: Now replacing ‘Külm vesi/Cold water: 30.05 31.05 1.00’ with line ‘Külm vesi/Cold water: 31.05 blank 00.00’. In testing it got correct version but running the script in Gmail, it still displayed old version. And here, Copilot messed up. It guided me to add _Labels_ to emails. It meant that if I added labels to three emails I go three drafts. And still no signs of changes in body message.

## Ok, let the ChatGPT step in

:heavy_check_mark: The first prompt delivered the working solution to my line modifing problem.

:heavy_check_mark: Several ideas was offered, how to make the calculation part working.

:x: It is  not actually minus, but too much information. Each time then ChatGPT provided solution it had thorough explanations. I actually did not read it.

:x: I used free version and was not logged in, so one moment it started to redirect me on logging page instead of helping.

### Confusion
- One moment I noticed that ChatGPT lost some of my helperfunctions and did not provide a full script. But no errors in Apps Script and all worked.
  - Later I noticed that also Copilot does that but then I just scrolled with my mouse and Copilot continued typing.
- I also developed idea bit further and then decided to use earlier version. So where was a mess how to restore previous working code?
- And I had changed only one paragraph, but I wanted changes also in 4th/ Warm water line.

## Copilot, here we go again!
:x: I once copied again the code to Copilot. It added something to the script and that part caused errors. I had to clean a little bit of code by myself to make it without errors.

:heavy_check_mark: I managed to change the 4th paragraph and also removed breaks after 7th,8th and 9th paragraph.  But I’ll think it still suggested some unnecessary function which still caused error till the end

## I
As the first draft was successfully created, I manually triggered also next draft-email. And ... it did not work again. So, I preferred GhatGPT first. Now I was using my new layout in mails - there were 7 paragraphs instead 9 and that caused the error. I can't remember, if changing paragraph length number was my idea or Copilots. And at first, there were no logging-errors from Apps Script, that is, why there are so many error loggings in code.




