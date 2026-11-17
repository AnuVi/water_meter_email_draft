Read: How it all started?

# Purpose ENG
Each month begins with sending my water readings by email to the accountant of the housing cooperative.

I can't remeber when it was, but I was ready to unlearn my actions during submitting my metrics. 
Process at the moment:
1. Open _Google Sheets_.
-- Click New Row/Uus rida → A new row is created with the first day of the current month as the date. The previous month's final readings are automatically carried over as the starting readings for hot and cold water.
-- Enter the final readings for Hot and Cold Water.
-- Click Create Email Draft → The corresponding email draft is created in Gmail.
2. Open _Gmail Drafts_.
--  _subject line_: näidud/water meter readings + current month in Estonian + current year
-- _recipient_: accountant’s mail-address 
-- _body_:
   -- text
   -- calculated metrics
   -- my name
   
  - Click the Send button.

#Tools
Google Sheets, Gmail, Google Apps Script, ChatGPT free and unlogged version
Kasutatud: Google Sheets, Gmail, Google Apps Script, ChatGPT tasuta ja sisselogimata versioon. 

It ment:
- setting up Google Sheets:
  - Button

Although it is a very small task, it is still repetitive and annoying. For example, several times I have copied the accountant’s email incorrectly.

So, I decided to use **AI to help me code a script which creates an email draft in Gmail** with:

- _subject line_: näidud/water meter readings + current month in Estonian + current year
- _recipient_: accountant’s mail-address 
- _body_:
    - is taken from last sent email which subject is “näidud/water meter readings…”
    - original line: Külm vesi/Cold water: 30.05 31.05 1.00 is replaced with line Külm vesi/Cold water: 31.05 blank 00.00
    - the same is done with Soe vesi/Hot water.
