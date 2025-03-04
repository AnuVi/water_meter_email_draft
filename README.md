# Purpose ENG

In the beginning of each month, I send my water readings by email to my accountant of the housing cooperative.

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
- Copilot
- ChatGPT version without logging in
- Coogle Apps Script
- Gmail

# Lessons
