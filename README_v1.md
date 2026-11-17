- [Purpose ENG](#purpose-eng)
- [Tools](#tools)
- [Result](#result)
- [Further Development - Maybe?](#further-development---maybe-)
- [Lessons](#lessons)
- [Copilot, ChatGPT and I](#copilot--chatgpt-and-i)
  * [Start with Copilot:](#start-with-copilot-)
  * [Ok, let the ChatGPT step in](#ok--let-the-chatgpt-step-in)
    + [Confusion](#confusion)
  * [Copilot, here we go again!](#copilot--here-we-go-again-)
  * [I](#i)
- [Eesmärk EST](#eesm-rk-est)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


# Purpose ENG

Each month begins with sending my water readings by email to the accountant of the housing cooperative.

Although it is a very small task, it is still repetitive and annoying. For example, several times I have copied the accountant’s email incorrectly.

So, I decided to use **AI to help me code a script which creates an email draft in Gmail** with:

- _subject line_: näidud/water meter readings + current month in Estonian + current year
- _recipient_: accountant’s mail-address 
- _body_:
    - is taken from last sent email which subject is “näidud/water meter readings…”
    - original line: Külm vesi/Cold water: 30.05 31.05 1.00 is replaced with line Külm vesi/Cold water: 31.05 blank 00.00
    - the same is done with Soe vesi/Hot water.

The second part was to trigger the creating of an email-draft on the first day of each month. It is done inside Apps Script.



# Tools
- Copilot in Edge browser
- ChatGPT version without logging in
- Coogle Apps Script
- Gmail

  

# Result

![water_readings](https://github.com/user-attachments/assets/e5608ee8-0a5d-44bc-8f4e-2a7449c63b39)

- [Code](https://github.com/AnuVi/water_meter_email_draft/blob/main/script.js) 
- [Apps Script trigger settings](trigger.md)




# Further Development - Maybe?

I also investigated the possibility of writing the new reading and then having the calculation done automatically. As it turns out, there is a chance to do it using Google Sheets: entering new data -> calculation.
But at the moment there is unwillingness to re-learn from my-side, because instead of one environment I would have to use two: Google Sheets and Gmail.


Of course, I can just:
- add up some average amount and correct it once in a while.
- add up some average amount based on the summer/winter season.
- or feed my historical numbers to Sheets and let set numbers from that.


But these are ideas for the future. At the moment I am quite happy with my current solution and let’s see how it works for me.




# Lessons
- Please, please, please use **Copy/Kopeeri button** instead of selecting the text with CTRL+C/CTRL+V while copying script from an AI-helper.
- If it feels like AI has left out some code - keep scrolling - it keeps writing the code.
- Take small steps and as usual, save a copy of the working script somewhere separately.
- And in some places AI "reads your mind" and other places it surprises you, that it does not. For example if you ask it to correct spelling mistakes several times, it does it without repeating the prompt. But then, suddenly I need a synonym and I do not understand why it still provides spelling instead. I did not say, that I wanted a synonym this time.

  

# Copilot, ChatGPT and I



## Start with Copilot
:heavy_check_mark: It nicely helped me modify months into Estonian.

:heavy_check_mark: With message body text, it was a little bit longer process. The first result was with html-tags. Then the message looked like this.
  ![image1](https://github.com/user-attachments/assets/662b94c2-8626-4a97-8de4-b07ae21e4ad9)

:heavy_check_mark: Maybe, I should have asked plain text version right away? After that, all text was in one row. But I wanted paragraphs.

:heavy_check_mark: It offered different solutions based on result or error message. And Copilot also guided debugging (running different test scripts or reading console messages).

:x: Somewhere during the process I celebrated the progress and thanked Copilot. Then I gave the new prompt and suddenly Copilot explained me how to do it in Excel. I do not know whether it was celebration/thank-you part or certain keywords I used in previous prompts related to Excel.

:x: Now replacing ‘Külm vesi/Cold water: 30.05 31.05 1.00’ with line ‘Külm vesi/Cold water: 31.05 blank 00.00’. In testing it got correct version but running the script in Gmail, it still displayed old version. And here, Copilot messed up. It guided me to add _Labels_ to emails. It meant that if I added labels to three emails I got three drafts. And still no signs of changes in body message.




## Ok, let the ChatGPT step in

:heavy_check_mark: The first prompt delivered the working solution to my line modifing problem.

:heavy_check_mark: Several ideas was offered, how to make the calculation part working.

:x: It is not actually minus, but too much information. Each time then ChatGPT provided solution it had thorough explanations. I actually did not read it.

:x: I used free version and was not logged in, so one moment it started to redirect me on logging page instead of helping.

### Confusion
- One moment I noticed that ChatGPT lost some of my helperfunctions and did not provide a full script. But no errors in Apps Script and all worked.
  - Later I noticed that also Copilot does that but then I just scrolled with my mouse and Copilot continued typing.
- I also developed idea bit further and then decided to use earlier version. So there was a mess how to restore previous working code.
- And I had changed only one paragraph, but I wanted changes also in the 4th/ Hot water line.


  

## Copilot, here we go again!
:x: I once again copied the code to Copilot. It added something to the script and that part caused errors. I had to clean a little bit of code by myself to make it without errors.

:heavy_check_mark: I managed to change the 4th paragraph and also removed breaks after 7th, 8th and 9th paragraph. But I’ll think it still suggested some unnecessary functions which still caused errors till the end.



## I
As the first draft was successfully created, I manually triggered also next draft-email. And ... it did not work again. So, I preferred GhatGPT first. Now I was using my new layout in mails - there were 7 paragraphs instead 9 and that caused the error. I can't remember, if changing paragraph length number was my idea or Copilots. And at first, there were no logging-errors from Apps Script, that is, why there are so many error loggings in code.



# Eesmärk EST
Automatiseerimine isiklikus elus - veenäitude saatmine korteriühistule. Väike, aga tüütu ülesanne. Mitu korda olete teie vigadega kopeerinud e-posti aadressi,
kuhu näidud edastatakse?

Eesmärgiks oli luu iga kuu esimesel päeval GMailis e-posti mustand, kus:
- saaja: vastav e-posti aadress
- teema: näidud + käesolev kuu eesti keeles + käesolev aasta
- kirja sisu:
   - võetakse viimati saadetud näitude emailist
   - külma vee vana näit 30.05 31.05 1.00 asendatakse 31.05 blank 0.00. Blank'i asendab inimene uue näiduga ja ka arvutab inimene.
   - sama tehakse sooja vee reaga
 
Miks mitte arvutused ka automaatseks?
  -  Dünaamiliselt (ehk trükkides arvu ja siis arvutab) seda Gmailis teha ei saa. Küll aga saab GSheets+Gmail. Hetkel jäi see mõte poolikuks, sest ... laiskus. Nõuab inimeselt ümberõppimist ja kahes keskkonnas tegutsemist.
  - Lihtsama lahendusena saab liita juurde ka suvalise näidu, teha arvutustehe ja siis aeg-ajalt korrigeerida, aga hetkel jäi nii.

 Abilised: Copilot, ChatGPT, Google Apps Script, Gmail



