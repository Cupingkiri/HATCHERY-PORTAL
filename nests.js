/* =============================================================
   nests.js — NEST DATA SOURCE  (SAFE FOR NON-TECHNICAL STAFF)
   =============================================================

   This is the ONLY file you need to edit to keep the portal
   up to date. You do not need to touch any other file.

   =============================================================
   QUICK START — THE ONLY THREE THINGS YOU EVER NEED TO EDIT
   =============================================================

   • layDate      → the date the eggs were laid
   • hatchedDay   → the date the hatchlings emerged
                    (leave as `null` until it actually hatches)
   • species      → a number: 1 for Green, 2 for Hawksbill

   Everything else on the portal — status badges, "Day X"
   counters, "Expecting Soon" warnings, the progress bar, and
   the hatch-day calculation — is worked out automatically
   from those dates. You never type a status or a day number.

   =============================================================
   HOW TO ADD A NEW NEST
   =============================================================
   1. Copy one whole block, from the opening  {  to the closing  },
   2. Paste it at the TOP of the list below (newest nests first).
   3. Fill in the values (see FIELD GUIDE at the bottom).
      For a brand-new nest, always set:

          hatchedDay: null

   4. Save the file and refresh the portal page.

   =============================================================
   HOW TO RECORD A NEST THAT HAS JUST HATCHED
   =============================================================
   1. Find the nest in the list.
   2. Change this line:

          hatchedDay: null

      to the ACTUAL CALENDAR DATE the hatchlings emerged:

          hatchedDay: "2026-11-05"

      ⚠ Use the format  "YYYY-MM-DD"
         (year dash month dash day — always two digits for
          month and day, wrapped in double quotes).

   3. Save and refresh.

   That's the entire job. The portal will automatically:
     ✔ Switch the status badge to "Hatched"
     ✔ Calculate the exact incubation day it hatched
       (e.g. "Hatched at Day 54")
     ✔ Show the hatch date in the pop-up details
     ✔ Fill the progress bar to 100%

   =============================================================
   AUTOMATIC STATUS RULES  (for your reference)
   =============================================================
   You do NOT set the status yourself. It is calculated from
   the two dates using these three rules, in this order:

     RULE 1 — If `hatchedDay` contains a calendar date,
              the status is ALWAYS "Hatched".

     RULE 2 — Otherwise, if incubation days are 0–50,
              the status is "Incubating".

     RULE 3 — Otherwise, if incubation days are 51–60,
              the status is "Expecting Soon".

   A nest past day 60 with no recorded hatch date stays as
   "Expecting Soon" (i.e. overdue) until you enter the date.

   =============================================================
   FIELD GUIDE
   =============================================================
   id          The nest label shown on the card.
               Keep the format  "Nest #01", "Nest #02", …
               (always two digits, in double quotes).

   year        Nesting season year, as a plain number
               (no quotes), e.g.  2026
               This drives the "Year" filter dropdown.

   species     ⚠ USE A NUMBER — do not type the name.
               The number is translated to a full species
               name (with scientific name) by the portal.

                  1  =  Green Turtle
                  2  =  Hawksbill Turtle

               Example:   species: 1,
               (A plain number, no quotes. Much less prone
               to typos than spelling the name.)

   layDate     The date the eggs were laid, as a calendar
               date string in the format  "YYYY-MM-DD"
               e.g.  "2026-08-15"
               ⚠ This drives the automatic "Day X" counter
                 and the "Expecting Soon" warning.

   eggCount    Total number of eggs incubated.
               A whole number, no quotes.  e.g.  112

   hatchedDay  The ACTUAL CALENDAR DATE the nest hatched.
               • Still incubating →  null
               • Has hatched      →  "YYYY-MM-DD"
                 e.g.  "2026-11-05"
               ⚠ Setting a date here automatically switches
                 the status to "Hatched" and calculates the
                 exact incubation day. No day number needed.

   adopter     Name of the adopting guest / family / company,
               in double quotes.
               Use  null  (no quotes) if the nest is still
               available for adoption.

   ============================================================= */

const nestsData = [
  {
    id: "Nest #394",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-30",
    eggCount: 97,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #393",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-30",
    eggCount: 82,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #392",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-29",
    eggCount: 96,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #391",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-28",
    eggCount: 58,
    hatchedDay: null,         // still incubating
    adopter: "Viktoria Lantrat & Sergei Plotnikov"
  },
  {
    id: "Nest #390",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-27",
    eggCount: 81,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #389",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-26",
    eggCount: 98,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #388",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-25",
    eggCount: 44,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #387",
    year: 2026,
    species: 2,               // 2 = Hawksbill Turtle
    layDate: "2026-09-26",
    eggCount: 129,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #386",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-23",
    eggCount: 67,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #385",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-22",
    eggCount: 105,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #384",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-22",
    eggCount: 102,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #383",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-22",
    eggCount: 74,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #382",
    year: 2026,
    species: 2,               // 2 = Hawksbill Turtle
    layDate: "2026-09-21",
    eggCount: 144,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #381",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-21",
    eggCount: 68,
    hatchedDay: null,         // still incubating
    adopter: null
  },
{
    id: "Nest #380",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-20",
    eggCount: 97,
    hatchedDay: null,         // still incubating
    adopter: null
  },
{
    id: "Nest #379",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-17",
    eggCount: 80,
    hatchedDay: null,         // still incubating
    adopter: null
  },
{
    id: "Nest #378",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-17",
    eggCount: 61,
    hatchedDay: null,         // still incubating
    adopter: null
  },
{
    id: "Nest #377",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-15",
    eggCount: 131,
    hatchedDay: null,         // still incubating
    adopter: "Lyyn"
  },
  {
    id: "Nest #376",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-15",
    eggCount: 37,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #375",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-12",
    eggCount: 100,
    hatchedDay: null,         // still incubating
    adopter: "Jocelyn Morris & Scott Morris"
  },
  {
    id: "Nest #374",
    year: 2026,
    species: 2,               // 2 = Hawksbill Turtle
    layDate: "2026-09-12",
    eggCount: 147,
    hatchedDay: null,         // still incubating
    adopter: "Michelle Wong"
  },
  {
    id: "Nest #373",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-12",
    eggCount: 121,
    hatchedDay: null,         // still incubating
    adopter: "Charlotte Wiggins"
  },
  {
    id: "Nest #372",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-12",
    eggCount: 95,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #371",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-11",
    eggCount: 117,
    hatchedDay: null,         // still incubating
    adopter: "Michelle Cates"
  },
  {
    id: "Nest #370",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-11",
    eggCount: 51,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #369",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-9",
    eggCount: 85,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #368",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-9",
    eggCount: 117,
    hatchedDay: null,         // still incubating
    adopter: "David Todd"
  },
  {
    id: "Nest #367",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-9",
    eggCount: 114,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #366",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-9",
    eggCount: 101,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #365",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-9",
    eggCount: 95,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #364",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-9",
    eggCount: 127,
    hatchedDay: null,         // still incubating
    adopter: "Michael Cates"
  },
  {
    id: "Nest #363",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-8",
    eggCount: 81,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #362",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-8",
    eggCount: 63,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #361",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-8",
    eggCount: 38,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #360",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-6",
    eggCount: 98,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #359",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-6",
    eggCount: 54,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #358",
    year: 2026,
    species: 2,               // 2 = hawksbill Turtle
    layDate: "2026-09-4",
    eggCount: 111,
    hatchedDay: null,         // still incubating
    adopter: "Dania Sigrist"
  },
  {
    id: "Nest #357",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-3",
    eggCount: 94,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #356",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-3",
    eggCount: 86,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #355",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-1",
    eggCount: 106,
    hatchedDay: "2026-10-21",         // still incubating
    adopter: null
  },
  {
    id: "Nest #354",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-1",
    eggCount: 89,
    hatchedDay: null,         // still incubating
    adopter: null
  },
  {
    id: "Nest #353",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-1",
    eggCount: 72,
    hatchedDay: "2026-10-24",         // still incubating
    adopter: "Ulli & Julia"
  },
  {
    id: "Nest #352",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-1",
    eggCount: 73,
    hatchedDay: "2026-10-24",         // still incubating
    adopter: null
  },
  {
    id: "Nest #351",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-1",
    eggCount: 57,
    hatchedDay: "2026-10-24",         // still incubating
    adopter: null
  },
  {
    id: "Nest #350",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-1",
    eggCount: 85,
    hatchedDay: "2026-10-22",         // still incubating
    adopter: null
  },
  {
    id: "Nest #349",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-09-1",
    eggCount: 87,
    hatchedDay: "2026-10-22",         // still incubating
    adopter: null
  },
    {
    id: "Nest #348",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-31",
    eggCount: 106,
    hatchedDay: "2026-10-21",         // still incubating
    adopter: null
  },
   {
    id: "Nest #347",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-30",
    eggCount: 108,
    hatchedDay: "2026-10-21",         // still incubating
    adopter: null
  },
   {
    id: "Nest #346",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-30",
    eggCount: 81,
    hatchedDay: "2026-10-19",         // still incubating
    adopter: null
  },
   {
    id: "Nest #345",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-30",
    eggCount: 136,
    hatchedDay: "2026-10-19",         // still incubating
    adopter: "Dania Sigrist"
  },
   {
    id: "Nest #344",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-30",
    eggCount: 63,
    hatchedDay: "2026-10-21",         // still incubating
    adopter: null
  },
   {
    id: "Nest #343",
    year: 2026,
    species: 2,               // 2 = Hawksbill Turtle
    layDate: "2026-08-29",
    eggCount: 141,
    hatchedDay: "2026-10-23",         // still incubating
    adopter: null
  },
   {
    id: "Nest #342",
    year: 2026,
    species: 2,               // 2 = Hawksbill Turtle
    layDate: "2026-08-29",
    eggCount: 126,
    hatchedDay: "2026-10-24",         // still incubating
    adopter: null
  },
   {
    id: "Nest #341",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-29",
    eggCount: 168,
    hatchedDay: "2026-10-21",         // still incubating
    adopter: "Dania Sigrist"
  },
   {
    id: "Nest #340",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-29",
    eggCount: 65,
    hatchedDay: "2026-10-20",         // still incubating
    adopter: "Gavin & Marian"
  },
   {
    id: "Nest #339",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-29",
    eggCount: 107,
    hatchedDay: "2026-10-19",         // still incubating
    adopter: "Jennifer Clarewatton"
  },
   {
    id: "Nest #338",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-29",
    eggCount: 77,
    hatchedDay: "2026-10-19",         // still incubating
    adopter: null
  },
   {
    id: "Nest #337",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-28",
    eggCount: 95,
    hatchedDay: "2026-10-19",         // still incubating
    adopter: "Flynn & Freddie"
  },
   {
    id: "Nest #336",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-28",
    eggCount: 65,
    hatchedDay: "2026-10-19",         // still incubating
    adopter: null
  },
   {
    id: "Nest #335",
    year: 2026,
    species: 2,               // 2 = Hawksbill Turtle
    layDate: "2026-08-28",
    eggCount: 136,
    hatchedDay: "2026-10-20",         // still incubating
    adopter: "Mirjam Knies"
  },
   {
    id: "Nest #334",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-27",
    eggCount: 105,
    hatchedDay: "2026-10-18",         // still incubating
    adopter: null
  },
   {
    id: "Nest #333",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-23",
    eggCount: 108,
    hatchedDay: "2026-10-17",         // still incubating
    adopter: "Viola Bianchi"
  },
 {
    id: "Nest #332",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-23",
    eggCount: 56,
    hatchedDay: "2026-10-19",         // still incubating
    adopter: null
  },
   {
    id: "Nest #331",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-23",
    eggCount: 79,
    hatchedDay: "2026-10-16",         // still incubating
    adopter: null
  },
   {
    id: "Nest #330",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-21",
    eggCount: 111,
    hatchedDay: "2026-10-10",         // still incubating
    adopter: "Gueldenpfennig"
  },
   {
    id: "Nest #329",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-20",
    eggCount: 89,
    hatchedDay: "2026-10-10",         // still incubating
    adopter: "Yu Ching Ho"
  },
   {
    id: "Nest #328",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-20",
    eggCount: 134,
    hatchedDay: "2026-10-10",         // still incubating
    adopter: "Raye"
  },
   {
    id: "Nest #327",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-20",
    eggCount: 114,
    hatchedDay: "2026-10-15",         // still incubating
    adopter: "Amanda Teoh"
  },
   {
    id: "Nest #326",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-18",
    eggCount: 62,
    hatchedDay: "2026-10-10",         // still incubating
    adopter: null
  },
   {
    id: "Nest #325",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-18",
    eggCount: 71,
    hatchedDay: "2026-10-10",         // still incubating
    adopter: null
  },
   {
    id: "Nest #324",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-17",
    eggCount: 65,
    hatchedDay: "2026-10-8",         // still incubating
    adopter: null
  },
   {
    id: "Nest #323",
    year: 2026,
    species: 2,               // 2 = hawksbill Turtle
    layDate: "2026-08-16",
    eggCount: 182,
    hatchedDay: "2026-10-8",         // still incubating
    adopter: "Nico & James"
  },
   {
    id: "Nest #322",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-15",
    eggCount: 101,
    hatchedDay: "2026-10-6",         // still incubating
    adopter: "Tina Loevdal"
  },
   {
    id: "Nest #321",
    year: 2026,
    species: 2,               // 2 = hawksbill Turtle
    layDate: "2026-08-14",
    eggCount: 157,
    hatchedDay: "2026-10-16",         // still incubating
    adopter: "Belford Tan"
  },
   {
    id: "Nest #320",
    year: 2026,
    species: 2,               // 2 = hawksbill Turtle
    layDate: "2026-08-14",
    eggCount: 134,
    hatchedDay: "2026-10-6",         // still incubating
    adopter: "Lieveke Van Bezouw"
  },
   {
    id: "Nest #319",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-13",
    eggCount: 88,
    hatchedDay: "2026-10-3",         // still incubating
    adopter: null
  },
   {
    id: "Nest #318",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-13",
    eggCount: 57,
    hatchedDay: "2026-10-7",         // still incubating
    adopter: null
  },
   {
    id: "Nest #317",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-13",
    eggCount: 78,
    hatchedDay: "2026-10-3",         // still incubating
    adopter: "Lisia Orsini"
  },
   {
    id: "Nest #316",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-12",
    eggCount: 99,
    hatchedDay: "2026-10-3",         // still incubating
    adopter: null
  },
   {
    id: "Nest #315",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-12",
    eggCount: 100,
    hatchedDay: "2026-10-1",         // still incubating
    adopter: "Sonja Szameit"
  },
   {
    id: "Nest #314",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-12",
    eggCount: 110,
    hatchedDay: null,         // still incubating
    adopter: "Elena Guala'"
  },
   {
    id: "Nest #313",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-12",
    eggCount: 94,
    hatchedDay: "2026-10-8",         // still incubating
    adopter: "Sarah Devlin"
  },
   {
    id: "Nest #312",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-12",
    eggCount: 81,
    hatchedDay: "2026-10-5",         // still incubating
    adopter: null
  },
   {
    id: "Nest #311",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-12",
    eggCount: 64,
    hatchedDay: "2026-10-6",         // still incubating
    adopter: null
  },
   {
    id: "Nest #310",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-12",
    eggCount: 127,
    hatchedDay: "2026-10-01",         // still incubating
    adopter: "Mirjam Glattli"
  },
   {
    id: "Nest #309",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-11",
    eggCount: 55,
    hatchedDay: "2026-10-6",         // still incubating
    adopter: null
  },
   {
    id: "Nest #308",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-11",
    eggCount: 75,
    hatchedDay: "2026-10-01",         // still incubating
    adopter: null
  },
   {
    id: "Nest #307",
    year: 2026,
    species: 2,               // 2 = Hawksbill Turtle
    layDate: "2026-08-11",
    eggCount: 93,
    hatchedDay: "2026-10-01",         // still incubating
    adopter: null
  },
   {
    id: "Nest #306",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-10",
    eggCount: 54,
    hatchedDay: "2026-10-3",         // still incubating
    adopter: null
  },
   {
    id: "Nest #305",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-10",
    eggCount: 88,
    hatchedDay: "2026-09-28",         // still incubating
    adopter: null
  },
   {
    id: "Nest #304",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-9",
    eggCount: 56,
    hatchedDay: "2026-10-2",         // still incubating
    adopter: null
  },
   {
    id: "Nest #303",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-8",
    eggCount: 96,
    hatchedDay: "2026-09-28",         // still incubating
    adopter: null
  },
   {
    id: "Nest #302",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-8",
    eggCount: 84,
    hatchedDay: "2026-09-28",         // still incubating
    adopter: null
  },
 {
    id: "Nest #301",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-8",
    eggCount: 88,
    hatchedDay: "2026-09-29",         // still incubating
    adopter: "Harecker Walter"
  },
   {
    id: "Nest #300",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-08-7",
    eggCount: 123,
    hatchedDay: "2026-09-29",         // still incubating
    adopter: "Elvira Kerchkoffs"
  },
    {
    id: "Nest #01",
    year: 2026,
    species: 2,               // 2 = Hawksbill Turtle
    layDate: "2026-01-03",
    eggCount: 103,
    hatchedDay: "2026-03-12",
    adopter: null
  },
  {
    id: "Nest #02",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-01-06",
    eggCount: 110,
    hatchedDay: "2026-03-08",
    adopter: null
  },
  {
    id: "Nest #03",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-01-07",
    eggCount: 84,
    hatchedDay: "2026-03-12",
    adopter: null
  },
  {
    id: "Nest #04",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-01-15",
    eggCount: 87,
    hatchedDay: "2026-03-19",
    adopter: null
  },
  {
    id: "Nest #05",
    year: 2026,
    species: 2,               // 2 = Hawksbill Turtle
    layDate: "2026-01-15",
    eggCount: 92,
    hatchedDay: "2026-03-24",
    adopter: null
  },
  {
    id: "Nest #06",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-01-18",
    eggCount: 105,
    hatchedDay: "2026-03-17",
    adopter: null
  },
  {
    id: "Nest #07",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-01-17",
    eggCount: 132,
    hatchedDay: "2026-03-20",
    adopter: null
  },
  {
    id: "Nest #08",
    year: 2026,
    species: 2,               // 2 = Hawksbill Turtle
    layDate: "2026-01-19",
    eggCount: 82,
    hatchedDay: "2026-03-27",
    adopter: null
  },
  {
    id: "Nest #09",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-01-22",
    eggCount: 66,
    hatchedDay: "2026-03-25",
    adopter: null
  },
  {
    id: "Nest #10",
    year: 2026,
    species: 1,               // 1 = Green Turtle
    layDate: "2026-01-24",
    eggCount: 139,
    hatchedDay: "2026-03-24",
    adopter: null
  },
  { id: "Nest #11", year: 2026, species: 1, layDate: "2026-01-26", eggCount: 70, hatchedDay: "2026-03-27", adopter: null },
{ id: "Nest #12", year: 2026, species: 1, layDate: "2026-01-26", eggCount: 74, hatchedDay: "2026-03-28", adopter: null },
{ id: "Nest #13", year: 2026, species: 1, layDate: "2026-01-26", eggCount: 99, hatchedDay: "2026-03-26", adopter: null },
{ id: "Nest #14", year: 2026, species: 1, layDate: "2026-01-27", eggCount: 116, hatchedDay: "2026-03-29", adopter: null },
{ id: "Nest #15", year: 2026, species: 1, layDate: "2026-01-28", eggCount: 84, hatchedDay: "2026-03-28", adopter: null },
{ id: "Nest #16", year: 2026, species: 2, layDate: "2026-01-28", eggCount: 152, hatchedDay: "2026-03-31", adopter: null },
{ id: "Nest #17", year: 2026, species: 1, layDate: "2026-01-29", eggCount: 131, hatchedDay: "2026-03-29", adopter: null },
{ id: "Nest #18", year: 2026, species: 1, layDate: "2026-01-29", eggCount: 104, hatchedDay: "2026-03-31", adopter: null },
{ id: "Nest #19", year: 2026, species: 2, layDate: "2026-01-29", eggCount: 114, hatchedDay: "2026-03-31", adopter: null },
{ id: "Nest #20", year: 2026, species: 2, layDate: "2026-01-30", eggCount: 96, hatchedDay: "2026-04-05", adopter: null },
{ id: "Nest #21", year: 2026, species: 2, layDate: "2026-01-31", eggCount: 143, hatchedDay: "2026-04-06", adopter: null },
{ id: "Nest #22", year: 2026, species: 2, layDate: "2026-02-02", eggCount: 168, hatchedDay: "2026-04-06", adopter: null },
{ id: "Nest #23", year: 2026, species: 1, layDate: "2026-02-05", eggCount: 76, hatchedDay: "2026-04-06", adopter: null },
{ id: "Nest #24", year: 2026, species: 1, layDate: "2026-02-06", eggCount: 92, hatchedDay: "2026-04-06", adopter: null },
{ id: "Nest #25", year: 2026, species: 1, layDate: "2026-02-06", eggCount: 69, hatchedDay: "2026-04-01", adopter: null },
{ id: "Nest #26", year: 2026, species: 2, layDate: "2026-02-07", eggCount: 80, hatchedDay: "2026-04-08", adopter: null },
{ id: "Nest #27", year: 2026, species: 2, layDate: "2026-02-08", eggCount: 91, hatchedDay: "2026-04-14", adopter: null },
{ id: "Nest #28", year: 2026, species: 1, layDate: "2026-02-08", eggCount: 109, hatchedDay: "2026-04-09", adopter: null },
{ id: "Nest #29", year: 2026, species: 2, layDate: "2026-02-09", eggCount: 178, hatchedDay: "2026-04-13", adopter: null },
{ id: "Nest #30", year: 2026, species: 2, layDate: "2026-02-10", eggCount: 156, hatchedDay: "2026-04-14", adopter: null },
{ id: "Nest #31", year: 2026, species: 1, layDate: "2026-02-10", eggCount: 106, hatchedDay: "2026-04-11", adopter: null },
{ id: "Nest #32", year: 2026, species: 2, layDate: "2026-02-11", eggCount: 93, hatchedDay: "2026-04-16", adopter: null },
{ id: "Nest #33", year: 2026, species: 2, layDate: "2026-02-13", eggCount: 106, hatchedDay: "2026-04-15", adopter: null },
{ id: "Nest #34", year: 2026, species: 1, layDate: "2026-02-16", eggCount: 116, hatchedDay: "2026-04-15", adopter: null },
{ id: "Nest #35", year: 2026, species: 2, layDate: "2026-02-16", eggCount: 173, hatchedDay: "2026-04-18", adopter: null },
{ id: "Nest #36", year: 2026, species: 2, layDate: "2026-02-16", eggCount: 145, hatchedDay: "2026-04-18", adopter: null },
{ id: "Nest #37", year: 2026, species: 1, layDate: "2026-02-17", eggCount: 71, hatchedDay: "2026-04-18", adopter: null },
{ id: "Nest #38", year: 2026, species: 2, layDate: "2026-02-17", eggCount: 127, hatchedDay: "2026-04-19", adopter: null },
{ id: "Nest #39", year: 2026, species: 1, layDate: "2026-02-18", eggCount: 96, hatchedDay: "2026-04-16", adopter: null },
{ id: "Nest #40", year: 2026, species: 1, layDate: "2026-02-18", eggCount: 82, hatchedDay: "2026-04-18", adopter: null },
{ id: "Nest #41", year: 2026, species: 2, layDate: "2026-02-19", eggCount: 156, hatchedDay: "2026-04-20", adopter: null },
{ id: "Nest #42", year: 2026, species: 1, layDate: "2026-02-21", eggCount: 123, hatchedDay: "2026-04-29", adopter: null },
{ id: "Nest #43", year: 2026, species: 1, layDate: "2026-02-22", eggCount: 114, hatchedDay: "2026-04-19", adopter: null },
{ id: "Nest #44", year: 2026, species: 2, layDate: "2026-02-25", eggCount: 177, hatchedDay: "2026-04-25", adopter: null },
{ id: "Nest #45", year: 2026, species: 2, layDate: "2026-02-24", eggCount: 148, hatchedDay: "2026-04-27", adopter: null },
{ id: "Nest #46", year: 2026, species: 2, layDate: "2026-02-24", eggCount: 137, hatchedDay: "2026-04-26", adopter: null },
{ id: "Nest #47", year: 2026, species: 1, layDate: "2026-02-24", eggCount: 111, hatchedDay: "2026-04-23", adopter: null },
{ id: "Nest #48", year: 2026, species: 1, layDate: "2026-02-25", eggCount: 98, hatchedDay: "2026-04-22", adopter: null },
{ id: "Nest #49", year: 2026, species: 2, layDate: "2026-02-26", eggCount: 96, hatchedDay: "2026-04-26", adopter: null },
{ id: "Nest #50", year: 2026, species: 2, layDate: "2026-02-27", eggCount: 130, hatchedDay: "2026-04-24", adopter: null },
{ id: "Nest #51", year: 2026, species: 1, layDate: "2026-02-27", eggCount: 114, hatchedDay: "2026-04-25", adopter: "Sarah & Matthew" },
{ id: "Nest #52", year: 2026, species: 2, layDate: "2026-03-01", eggCount: 104, hatchedDay: "2026-04-29", adopter: null },
{ id: "Nest #53", year: 2026, species: 2, layDate: "2026-03-02", eggCount: 155, hatchedDay: "2026-04-30", adopter: null },
{ id: "Nest #54", year: 2026, species: 1, layDate: "2026-03-02", eggCount: 31, hatchedDay: "2026-05-06", adopter: null },
{ id: "Nest #55", year: 2026, species: 2, layDate: "2026-03-02", eggCount: 172, hatchedDay: "2026-04-30", adopter: null },
{ id: "Nest #56", year: 2026, species: 2, layDate: "2026-03-03", eggCount: 97, hatchedDay: "2026-05-03", adopter: null },
{ id: "Nest #57", year: 2026, species: 1, layDate: "2026-03-03", eggCount: 26, hatchedDay: "2026-04-29", adopter: null },
{ id: "Nest #58", year: 2026, species: 1, layDate: "2026-03-05", eggCount: 98, hatchedDay: "2026-04-30", adopter: null },
{ id: "Nest #59", year: 2026, species: 2, layDate: "2026-03-05", eggCount: 185, hatchedDay: "2026-05-01", adopter: null },
{ id: "Nest #60", year: 2026, species: 1, layDate: "2026-03-07", eggCount: 104, hatchedDay: "2026-05-02", adopter: null },
{ id: "Nest #61", year: 2026, species: 2, layDate: "2026-03-08", eggCount: 210, hatchedDay: "2026-05-06", adopter: null },
{ id: "Nest #62", year: 2026, species: 2, layDate: "2026-03-08", eggCount: 193, hatchedDay: "2026-04-30", adopter: null },
{ id: "Nest #63", year: 2026, species: 2, layDate: "2026-03-08", eggCount: 147, hatchedDay: "2026-05-07", adopter: null },
{ id: "Nest #64", year: 2026, species: 2, layDate: "2026-03-09", eggCount: 137, hatchedDay: "2026-05-07", adopter: "Dimageleas & Georgia" },
{ id: "Nest #65", year: 2026, species: 2, layDate: "2026-03-10", eggCount: 139, hatchedDay: "2026-05-07", adopter: null },
{ id: "Nest #66", year: 2026, species: 1, layDate: "2026-03-12", eggCount: 112, hatchedDay: "2026-05-03", adopter: null },
{ id: "Nest #67", year: 2026, species: 1, layDate: "2026-03-13", eggCount: 110, hatchedDay: "2026-05-04", adopter: null },
{ id: "Nest #68", year: 2026, species: 1, layDate: "2026-03-13", eggCount: 64, hatchedDay: "2026-03-04", adopter: null },
{ id: "Nest #69", year: 2026, species: 1, layDate: "2026-03-13", eggCount: 89, hatchedDay: "2026-05-06", adopter: null },
{ id: "Nest #70", year: 2026, species: 2, layDate: "2026-03-15", eggCount: 40, hatchedDay: "2026-05-10", adopter: null },
{ id: "Nest #71", year: 2026, species: 2, layDate: "2026-03-16", eggCount: 98, hatchedDay: "2026-05-11", adopter: null },
{ id: "Nest #72", year: 2026, species: 1, layDate: "2026-03-18", eggCount: 93, hatchedDay: "2026-05-08", adopter: null },
{ id: "Nest #73", year: 2026, species: 2, layDate: "2026-03-18", eggCount: 189, hatchedDay: "2026-05-15", adopter: "Ishana, Sachin & Shamara" },
{ id: "Nest #74", year: 2026, species: 1, layDate: "2026-03-19", eggCount: 95, hatchedDay: "2026-05-11", adopter: null },
{ id: "Nest #75", year: 2026, species: 2, layDate: "2026-03-19", eggCount: 168, hatchedDay: "2026-05-13", adopter: "Dania" },
{ id: "Nest #76", year: 2026, species: 2, layDate: "2026-03-19", eggCount: 124, hatchedDay: "2026-05-17", adopter: null },
{ id: "Nest #77", year: 2026, species: 1, layDate: "2026-03-20", eggCount: 105, hatchedDay: "2026-05-14", adopter: null },
{ id: "Nest #78", year: 2026, species: 2, layDate: "2026-03-21", eggCount: 120, hatchedDay: "2026-05-14", adopter: null },
{ id: "Nest #79", year: 2026, species: 2, layDate: "2026-03-21", eggCount: 105, hatchedDay: "2026-05-17", adopter: null },
{ id: "Nest #80", year: 2026, species: 1, layDate: "2026-03-23", eggCount: 112, hatchedDay: "2026-05-14", adopter: "Hanspeter" },
{ id: "Nest #81", year: 2026, species: 1, layDate: "2026-03-24", eggCount: 117, hatchedDay: "2026-05-16", adopter: null },
{ id: "Nest #82", year: 2026, species: 1, layDate: "2026-03-24", eggCount: 107, hatchedDay: "2026-05-16", adopter: "Bishop Datuk Melter" },
{ id: "Nest #83", year: 2026, species: 2, layDate: "2026-03-25", eggCount: 186, hatchedDay: "2026-05-19", adopter: null },
{ id: "Nest #84", year: 2026, species: 2, layDate: "2026-03-26", eggCount: 156, hatchedDay: "2026-05-19", adopter: null },
{ id: "Nest #85", year: 2026, species: 2, layDate: "2026-03-26", eggCount: 137, hatchedDay: "2026-05-22", adopter: null },
{ id: "Nest #86", year: 2026, species: 1, layDate: "2026-03-28", eggCount: 90, hatchedDay: "2026-05-20", adopter: null },
{ id: "Nest #87", year: 2026, species: 2, layDate: "2026-03-28", eggCount: 119, hatchedDay: "2026-05-22", adopter: null },
{ id: "Nest #88", year: 2026, species: 2, layDate: "2026-03-28", eggCount: 154, hatchedDay: "2026-05-21", adopter: "Yong's Family" },
{ id: "Nest #89", year: 2026, species: 1, layDate: "2026-03-30", eggCount: 80, hatchedDay: "2026-05-19", adopter: null },
{ id: "Nest #90", year: 2026, species: 1, layDate: "2026-03-30", eggCount: 112, hatchedDay: "2026-05-22", adopter: null },
{ id: "Nest #91", year: 2026, species: 1, layDate: "2026-04-01", eggCount: 134, hatchedDay: "2026-05-22", adopter: null },
{ id: "Nest #92", year: 2026, species: 1, layDate: "2026-04-02", eggCount: 112, hatchedDay: "2026-05-23", adopter: "Bob, Jack, Fred & Lydia" },
{ id: "Nest #93", year: 2026, species: 1, layDate: "2026-04-03", eggCount: 162, hatchedDay: "2026-05-27", adopter: null },
{ id: "Nest #94", year: 2026, species: 2, layDate: "2026-04-04", eggCount: 97, hatchedDay: "2026-05-26", adopter: null },
{ id: "Nest #95", year: 2026, species: 1, layDate: "2026-04-05", eggCount: 125, hatchedDay: "2026-05-25", adopter: "Erik Lee" },
{ id: "Nest #96", year: 2026, species: 2, layDate: "2026-04-05", eggCount: 117, hatchedDay: "2026-05-28", adopter: "McManus Family" },
{ id: "Nest #97", year: 2026, species: 1, layDate: "2026-04-05", eggCount: 106, hatchedDay: "2026-05-25", adopter: "Bantug's Family" },
{ id: "Nest #98", year: 2026, species: 1, layDate: "2026-04-07", eggCount: 62, hatchedDay: "2026-05-26", adopter: null },
{ id: "Nest #99", year: 2026, species: 2, layDate: "2026-04-07", eggCount: 105, hatchedDay: "2026-05-31", adopter: "Huynh's Family" },
{ id: "Nest #100", year: 2026, species: 2, layDate: "2026-04-08", eggCount: 53, hatchedDay: "2026-06-01", adopter: null },
{ id: "Nest #101", year: 2026, species: 1, layDate: "2026-04-08", eggCount: 86, hatchedDay: "2026-05-29", adopter: null },
{ id: "Nest #102", year: 2026, species: 1, layDate: "2026-04-09", eggCount: 83, hatchedDay: "2026-05-29", adopter: null },
{ id: "Nest #103", year: 2026, species: 1, layDate: "2026-04-11", eggCount: 99, hatchedDay: "2026-06-01", adopter: null },
{ id: "Nest #104", year: 2026, species: 2, layDate: "2026-04-11", eggCount: 123, hatchedDay: "2026-06-01", adopter: "Timothy" },
{ id: "Nest #105", year: 2026, species: 2, layDate: "2026-04-11", eggCount: 176, hatchedDay: "2026-06-02", adopter: null },
{ id: "Nest #106", year: 2026, species: 2, layDate: "2026-04-11", eggCount: 117, hatchedDay: "2026-06-05", adopter: null },
{ id: "Nest #107", year: 2026, species: 2, layDate: "2026-04-12", eggCount: 112, hatchedDay: "2026-06-05", adopter: null },
{ id: "Nest #108", year: 2026, species: 1, layDate: "2026-04-12", eggCount: 87, hatchedDay: "2026-06-01", adopter: null },
{ id: "Nest #109", year: 2026, species: 1, layDate: "2026-04-14", eggCount: 79, hatchedDay: "2026-06-01", adopter: null },
{ id: "Nest #110", year: 2026, species: 1, layDate: "2026-04-14", eggCount: 113, hatchedDay: "2026-06-05", adopter: null },
{ id: "Nest #111", year: 2026, species: 2, layDate: "2026-04-15", eggCount: 88, hatchedDay: "2026-06-09", adopter: null },
{ id: "Nest #112", year: 2026, species: 1, layDate: "2026-04-16", eggCount: 103, hatchedDay: "2026-06-06", adopter: null },
{ id: "Nest #113", year: 2026, species: 2, layDate: "2026-04-16", eggCount: 174, hatchedDay: "2026-06-08", adopter: null },
{ id: "Nest #114", year: 2026, species: 2, layDate: "2026-04-17", eggCount: 117, hatchedDay: "2026-06-09", adopter: null },
{ id: "Nest #115", year: 2026, species: 1, layDate: "2026-04-18", eggCount: 67, hatchedDay: "2026-06-07", adopter: "Fabian Wolter" },
{ id: "Nest #116", year: 2026, species: 2, layDate: "2026-04-18", eggCount: 120, hatchedDay: "2026-06-09", adopter: "Fabian Wolter" },
{ id: "Nest #117", year: 2026, species: 2, layDate: "2026-04-20", eggCount: 137, hatchedDay: "2026-06-10", adopter: "Frigerio" },
{ id: "Nest #118", year: 2026, species: 1, layDate: "2026-04-21", eggCount: 63, hatchedDay: "2026-06-10", adopter: null },
{ id: "Nest #119", year: 2026, species: 1, layDate: "2026-04-21", eggCount: 104, hatchedDay: "2026-06-11", adopter: null },
{ id: "Nest #120", year: 2026, species: 2, layDate: "2026-04-23", eggCount: 109, hatchedDay: "2026-06-17", adopter: null },
{ id: "Nest #121", year: 2026, species: 1, layDate: "2026-04-23", eggCount: 92, hatchedDay: "2026-06-11", adopter: null },
{ id: "Nest #122", year: 2026, species: 2, layDate: "2026-04-23", eggCount: 116, hatchedDay: "2026-06-16", adopter: null },
{ id: "Nest #123", year: 2026, species: 1, layDate: "2026-04-24", eggCount: 3, hatchedDay: "2026-06-18", adopter: null },
{ id: "Nest #124", year: 2026, species: 2, layDate: "2026-04-24", eggCount: 169, hatchedDay: "2026-06-17", adopter: "Brenda Sidwell" },
{ id: "Nest #125", year: 2026, species: 1, layDate: "2026-04-25", eggCount: 69, hatchedDay: "2026-06-11", adopter: null },
{ id: "Nest #126", year: 2026, species: 2, layDate: "2026-04-26", eggCount: 97, hatchedDay: "2026-06-19", adopter: null },
{ id: "Nest #127", year: 2026, species: 1, layDate: "2026-04-26", eggCount: 99, hatchedDay: "2026-06-14", adopter: null },
{ id: "Nest #128", year: 2026, species: 1, layDate: "2026-04-26", eggCount: 95, hatchedDay: "2026-06-13", adopter: "The Ark Kapalai Travel Sdn Bhd." },
{ id: "Nest #129", year: 2026, species: 2, layDate: "2026-04-30", eggCount: 133, hatchedDay: "2026-06-21", adopter: "Chad Ovel" },
{ id: "Nest #130", year: 2026, species: 2, layDate: "2026-04-30", eggCount: 125, hatchedDay: "2026-04-30", adopter: "Discovery Journey & Travels Sdn Bhd." },
{ id: "Nest #131", year: 2026, species: 1, layDate: "2026-05-01", eggCount: 95, hatchedDay: "2026-06-20", adopter: null },
{ id: "Nest #132", year: 2026, species: 2, layDate: "2026-05-01", eggCount: 87, hatchedDay: "2026-06-27", adopter: null },
{ id: "Nest #133", year: 2026, species: 1, layDate: "2026-05-02", eggCount: 82, hatchedDay: "2026-06-18", adopter: null },
{ id: "Nest #134", year: 2026, species: 1, layDate: "2026-05-02", eggCount: 75, hatchedDay: "2026-06-21", adopter: null },
{ id: "Nest #135", year: 2026, species: 2, layDate: "2026-05-03", eggCount: 122, hatchedDay: "2026-06-27", adopter: null },
{ id: "Nest #136", year: 2026, species: 1, layDate: "2026-05-04", eggCount: 98, hatchedDay: "2026-06-20", adopter: null },
{ id: "Nest #137", year: 2026, species: 2, layDate: "2026-05-05", eggCount: 133, hatchedDay: "2026-06-25", adopter: null },
{ id: "Nest #138", year: 2026, species: 1, layDate: "2026-05-08", eggCount: 152, hatchedDay: "2026-06-29", adopter: null },
{ id: "Nest #139", year: 2026, species: 1, layDate: "2026-05-06", eggCount: 101, hatchedDay: "2026-06-25", adopter: null },
{ id: "Nest #140", year: 2026, species: 2, layDate: "2026-05-06", eggCount: 168, hatchedDay: "2026-06-30", adopter: null },
{ id: "Nest #141", year: 2026, species: 1, layDate: "2026-05-07", eggCount: 67, hatchedDay: "2026-06-26", adopter: null },
{ id: "Nest #142", year: 2026, species: 1, layDate: "2026-05-07", eggCount: 110, hatchedDay: "2026-06-25", adopter: null },
{ id: "Nest #143", year: 2026, species: 1, layDate: "2026-05-08", eggCount: 85, hatchedDay: "2026-06-28", adopter: null },
{ id: "Nest #144", year: 2026, species: 2, layDate: "2026-05-08", eggCount: 167, hatchedDay: "2026-06-30", adopter: null },
{ id: "Nest #145", year: 2026, species: 2, layDate: "2026-05-09", eggCount: 160, hatchedDay: "2026-07-01", adopter: "Kaley Rvarn" },
{ id: "Nest #146", year: 2026, species: 2, layDate: "2026-05-10", eggCount: 117, hatchedDay: "2026-07-01", adopter: null },
{ id: "Nest #147", year: 2026, species: 1, layDate: "2026-05-10", eggCount: 113, hatchedDay: "2026-06-30", adopter: null },
{ id: "Nest #148", year: 2026, species: 2, layDate: "2026-05-11", eggCount: 125, hatchedDay: "2026-07-03", adopter: "Richard & Lynda" },
{ id: "Nest #149", year: 2026, species: 1, layDate: "2026-05-12", eggCount: 100, hatchedDay: "2026-07-01", adopter: "Phil Shaw" },
{ id: "Nest #150", year: 2026, species: 1, layDate: "2026-05-12", eggCount: 64, hatchedDay: "2026-06-30", adopter: null },
{ id: "Nest #151", year: 2026, species: 2, layDate: "2026-05-12", eggCount: 125, hatchedDay: "2026-07-05", adopter: null },
{ id: "Nest #152", year: 2026, species: 2, layDate: "2026-05-13", eggCount: 110, hatchedDay: "2026-07-07", adopter: null },
{ id: "Nest #153", year: 2026, species: 1, layDate: "2026-05-14", eggCount: 65, hatchedDay: "2026-07-03", adopter: null },
{ id: "Nest #154", year: 2026, species: 2, layDate: "2026-05-14", eggCount: 102, hatchedDay: "2026-07-07", adopter: "Villain Maxime" },
{ id: "Nest #155", year: 2026, species: 1, layDate: "2026-05-19", eggCount: 91, hatchedDay: "2026-07-08", adopter: null },
{ id: "Nest #156", year: 2026, species: 1, layDate: "2026-05-19", eggCount: 59, hatchedDay: "2026-07-11", adopter: null },
{ id: "Nest #157", year: 2026, species: 2, layDate: "2026-05-19", eggCount: 92, hatchedDay: "2026-07-13", adopter: "Jungle Jenny" },
{ id: "Nest #158", year: 2026, species: 1, layDate: "2026-05-19", eggCount: 124, hatchedDay: "2026-07-09", adopter: null },
{ id: "Nest #159", year: 2026, species: 1, layDate: "2026-05-19", eggCount: 114, hatchedDay: "2026-07-06", adopter: null },
{ id: "Nest #160", year: 2026, species: 2, layDate: "2026-05-20", eggCount: 150, hatchedDay: "2026-07-13", adopter: "Natasha" },
{ id: "Nest #161", year: 2026, species: 1, layDate: "2026-05-21", eggCount: 104, hatchedDay: "2026-07-10", adopter: "Zhu Da Xiong" },
{ id: "Nest #162", year: 2026, species: 2, layDate: "2026-05-21", eggCount: 110, hatchedDay: "2026-07-14", adopter: null },
{ id: "Nest #163", year: 2026, species: 1, layDate: "2026-05-21", eggCount: 63, hatchedDay: "2026-07-12", adopter: null },
{ id: "Nest #164", year: 2026, species: 1, layDate: "2026-05-23", eggCount: 108, hatchedDay: "2026-07-13", adopter: null },
{ id: "Nest #165", year: 2026, species: 1, layDate: "2026-05-24", eggCount: 111, hatchedDay: "2026-07-14", adopter: null },
{ id: "Nest #166", year: 2026, species: 1, layDate: "2026-05-24", eggCount: 94, hatchedDay: "2026-07-14", adopter: "Palecanda" },
{ id: "Nest #167", year: 2026, species: 2, layDate: "2026-05-24", eggCount: 162, hatchedDay: "2026-07-17", adopter: "Palecanda" },
{ id: "Nest #168", year: 2026, species: 2, layDate: "2026-05-25", eggCount: 120, hatchedDay: "2026-07-19", adopter: null },
{ id: "Nest #169", year: 2026, species: 2, layDate: "2026-05-25", eggCount: 134, hatchedDay: "2026-07-18", adopter: null },
{ id: "Nest #170", year: 2026, species: 2, layDate: "2026-05-26", eggCount: 144, hatchedDay: "2026-07-21", adopter: null },
{ id: "Nest #171", year: 2026, species: 2, layDate: "2026-05-27", eggCount: 113, hatchedDay: "2026-07-23", adopter: null },
{ id: "Nest #172", year: 2026, species: 1, layDate: "2026-05-28", eggCount: 87, hatchedDay: "2026-07-22", adopter: "Stephane" },
{ id: "Nest #173", year: 2026, species: 1, layDate: "2026-05-20", eggCount: 77, hatchedDay: "2026-07-27", adopter: null },
{ id: "Nest #174", year: 2026, species: 2, layDate: "2026-05-30", eggCount: 131, hatchedDay: "2026-07-30", adopter: null },
{ id: "Nest #175", year: 2026, species: 1, layDate: "2026-05-30", eggCount: 61, hatchedDay: "2026-07-30", adopter: null },
{ id: "Nest #176", year: 2026, species: 2, layDate: "2026-05-30", eggCount: 89, hatchedDay: "2026-07-30", adopter: null },
{ id: "Nest #177", year: 2026, species: 1, layDate: "2026-05-30", eggCount: 121, hatchedDay: "2026-07-29", adopter: null },
{ id: "Nest #178", year: 2026, species: 1, layDate: "2026-06-01", eggCount: 100, hatchedDay: "2026-07-26", adopter: "Selina Schumacher" },
{ id: "Nest #179", year: 2026, species: 1, layDate: "2026-06-02", eggCount: 56, hatchedDay: "2026-07-30", adopter: null },
{ id: "Nest #180", year: 2026, species: 2, layDate: "2026-06-03", eggCount: 174, hatchedDay: "2026-07-31", adopter: "Jasper" },
{ id: "Nest #181", year: 2026, species: 1, layDate: "2026-06-04", eggCount: 105, hatchedDay: "2026-07-28", adopter: null },
{ id: "Nest #182", year: 2026, species: 1, layDate: "2026-06-04", eggCount: 97, hatchedDay: "2026-07-30", adopter: null },
{ id: "Nest #183", year: 2026, species: 1, layDate: "2026-06-04", eggCount: 99, hatchedDay: "2026-07-30", adopter: "Jungle Jenny" },
{ id: "Nest #184", year: 2026, species: 2, layDate: "2026-06-05", eggCount: 158, hatchedDay: "2026-08-01", adopter: "Simon Slinn" },
{ id: "Nest #185", year: 2026, species: 2, layDate: "2026-06-06", eggCount: 126, hatchedDay: "2026-08-09", adopter: null },
{ id: "Nest #186", year: 2026, species: 2, layDate: "2026-06-09", eggCount: 138, hatchedDay: "2026-08-07", adopter: "Alister" },
{ id: "Nest #187", year: 2026, species: 1, layDate: "2026-06-09", eggCount: 110, hatchedDay: "2026-08-05", adopter: "Marina Caruso" },
{ id: "Nest #188", year: 2026, species: 1, layDate: "2026-06-10", eggCount: 82, hatchedDay: "2026-08-05", adopter: null },
{ id: "Nest #189", year: 2026, species: 1, layDate: "2026-06-11", eggCount: 110, hatchedDay: "2026-08-05", adopter: null },
{ id: "Nest #190", year: 2026, species: 1, layDate: "2026-06-11", eggCount: 112, hatchedDay: "2026-08-05", adopter: "The Ark Kapalai Travel Sdn Bhd." },
{ id: "Nest #191", year: 2026, species: 1, layDate: "2026-06-11", eggCount: 112, hatchedDay: "2026-08-04", adopter: "Mark Pinder" },
{ id: "Nest #192", year: 2026, species: 1, layDate: "2026-06-12", eggCount: 94, hatchedDay: "2026-08-04", adopter: null },
{ id: "Nest #193", year: 2026, species: 2, layDate: "2026-06-12", eggCount: 82, hatchedDay: "2026-08-11", adopter: null },
{ id: "Nest #194", year: 2026, species: 1, layDate: "2026-06-12", eggCount: 96, hatchedDay: "2026-08-06", adopter: null },
{ id: "Nest #195", year: 2026, species: 1, layDate: "2026-06-13", eggCount: 98, hatchedDay: "2026-08-08", adopter: null },
{ id: "Nest #196", year: 2026, species: 2, layDate: "2026-06-14", eggCount: 102, hatchedDay: "2026-08-13", adopter: null },
{ id: "Nest #197", year: 2026, species: 1, layDate: "2026-06-14", eggCount: 94, hatchedDay: "2026-08-07", adopter: null },
{ id: "Nest #198", year: 2026, species: 1, layDate: "2026-06-14", eggCount: 56, hatchedDay: "2026-08-12", adopter: null },
{ id: "Nest #199", year: 2026, species: 1, layDate: "2026-06-17", eggCount: 84, hatchedDay: "2026-08-12", adopter: "Einley, Nora & Lola" },
{ id: "Nest #200", year: 2026, species: 1, layDate: "2026-06-17", eggCount: 106, hatchedDay: "2026-08-12", adopter: "Gerardo" },
{ id: "Nest #201", year: 2026, species: 2, layDate: "2026-06-18", eggCount: 143, hatchedDay: "2026-08-17", adopter: "Gerardo" },
{ id: "Nest #202", year: 2026, species: 1, layDate: "2026-06-19", eggCount: 75, hatchedDay: "2026-08-14", adopter: null },
{ id: "Nest #203", year: 2026, species: 1, layDate: "2026-06-19", eggCount: 92, hatchedDay: "2026-08-14", adopter: null },
{ id: "Nest #204", year: 2026, species: 2, layDate: "2026-06-19", eggCount: 122, hatchedDay: "2026-08-18", adopter: "Discovery Journey & Travels Sdn Bhd." },
{ id: "Nest #205", year: 2026, species: 2, layDate: "2026-06-19", eggCount: 160, hatchedDay: "2026-08-14", adopter: null },
{ id: "Nest #206", year: 2026, species: 1, layDate: "2026-06-19", eggCount: 101, hatchedDay: "2026-08-13", adopter: null },
{ id: "Nest #207", year: 2026, species: 1, layDate: "2026-06-20", eggCount: 101, hatchedDay: "2026-08-14", adopter: null },
{ id: "Nest #208", year: 2026, species: 2, layDate: "2026-06-20", eggCount: 112, hatchedDay: "2026-08-19", adopter: null },
{ id: "Nest #209", year: 2026, species: 1, layDate: "2026-06-20", eggCount: 90, hatchedDay: "2026-08-14", adopter: null },
{ id: "Nest #210", year: 2026, species: 1, layDate: "2026-06-20", eggCount: 118, hatchedDay: "2026-08-14", adopter: null },
{ id: "Nest #211", year: 2026, species: 1, layDate: "2026-06-21", eggCount: 69, hatchedDay: "2026-08-23", adopter: null },
{ id: "Nest #212", year: 2026, species: 2, layDate: "2026-06-22", eggCount: 98, hatchedDay: "2026-08-19", adopter: null },
{ id: "Nest #213", year: 2026, species: 1, layDate: "2026-06-22", eggCount: 93, hatchedDay: "2026-08-18", adopter: null },
{ id: "Nest #214", year: 2026, species: 2, layDate: "2026-06-23", eggCount: 137, hatchedDay: "2026-08-22", adopter: null },
{ id: "Nest #215", year: 2026, species: 1, layDate: "2026-06-28", eggCount: 127, hatchedDay: "2026-08-16", adopter: null },
{ id: "Nest #216", year: 2026, species: 1, layDate: "2026-06-24", eggCount: 84, hatchedDay: "2026-08-18", adopter: null },
{ id: "Nest #217", year: 2026, species: 2, layDate: "2026-06-25", eggCount: 107, hatchedDay: "2026-08-22", adopter: null },
{ id: "Nest #218", year: 2026, species: 2, layDate: "2026-06-25", eggCount: 101, hatchedDay: "2026-08-22", adopter: null },
{ id: "Nest #219", year: 2026, species: 1, layDate: "2026-06-26", eggCount: 84, hatchedDay: "2026-08-24", adopter: null },
{ id: "Nest #220", year: 2026, species: 1, layDate: "2026-06-27", eggCount: 68, hatchedDay: "2026-08-24", adopter: null },
{ id: "Nest #221", year: 2026, species: 1, layDate: "2026-06-27", eggCount: 105, hatchedDay: "2026-08-20", adopter: "Lucian, Julian & Libby" },
{ id: "Nest #222", year: 2026, species: 1, layDate: "2026-06-28", eggCount: 82, hatchedDay: "2026-08-21", adopter: null },
{ id: "Nest #223", year: 2026, species: 2, layDate: "2026-06-30", eggCount: 163, hatchedDay: "2026-08-25", adopter: "Amy White" },
{ id: "Nest #224", year: 2026, species: 2, layDate: "2026-06-30", eggCount: 36, hatchedDay: "2026-09-01", adopter: null },
{ id: "Nest #225", year: 2026, species: 1, layDate: "2026-06-30", eggCount: 118, hatchedDay: "2026-08-26", adopter: "Noemi Wollmann" },
{ id: "Nest #226", year: 2026, species: 1, layDate: "2026-06-30", eggCount: 67, hatchedDay: "2026-08-26", adopter: null },
{ id: "Nest #227", year: 2026, species: 1, layDate: "2026-06-30", eggCount: 93, hatchedDay: "2026-08-28", adopter: null },
{ id: "Nest #228", year: 2026, species: 1, layDate: "2026-07-01", eggCount: 97, hatchedDay: "2026-08-26", adopter: null },
{ id: "Nest #229", year: 2026, species: 1, layDate: "2026-07-02", eggCount: 74, hatchedDay: "2026-08-24", adopter: null },
{ id: "Nest #230", year: 2026, species: 1, layDate: "2026-07-03", eggCount: 45, hatchedDay: "2026-08-24", adopter: null },
{ id: "Nest #231", year: 2026, species: 1, layDate: "2026-07-03", eggCount: 123, hatchedDay: "2026-08-25", adopter: "Ernst Kreihuber" },
{ id: "Nest #232", year: 2026, species: 1, layDate: "2026-07-03", eggCount: 111, hatchedDay: "2026-08-26", adopter: "Ernst Kreihuber" },
{ id: "Nest #233", year: 2026, species: 1, layDate: "2026-07-05", eggCount: 130, hatchedDay: "2026-08-30", adopter: null },
{ id: "Nest #234", year: 2026, species: 2, layDate: "2026-07-06", eggCount: 123, hatchedDay: "2026-09-04", adopter: "Le Dorze" },
{ id: "Nest #235", year: 2026, species: 1, layDate: "2026-07-07", eggCount: 62, hatchedDay: "2026-09-03", adopter: null },
{ id: "Nest #236", year: 2026, species: 1, layDate: "2026-07-07", eggCount: 105, hatchedDay: "2026-09-03", adopter: "Patricia Low" },
{ id: "Nest #237", year: 2026, species: 1, layDate: "2026-07-08", eggCount: 108, hatchedDay: "2026-09-02", adopter: "Patricia Low" },
{ id: "Nest #238", year: 2026, species: 1, layDate: "2026-07-08", eggCount: 93, hatchedDay: "2026-09-03", adopter: null },
{ id: "Nest #239", year: 2026, species: 1, layDate: "2026-07-08", eggCount: 113, hatchedDay: "2026-09-05", adopter: null },
{ id: "Nest #240", year: 2026, species: 2, layDate: "2026-07-09", eggCount: 127, hatchedDay: "2026-09-05", adopter: "Amy White" },
{ id: "Nest #241", year: 2026, species: 1, layDate: "2026-07-10", eggCount: 6, hatchedDay: "2026-09-09", adopter: null },
{ id: "Nest #242", year: 2026, species: 1, layDate: "2026-07-10", eggCount: 138, hatchedDay: "2026-09-04", adopter: "Brodie Clarke" },
{ id: "Nest #243", year: 2026, species: 1, layDate: "2026-07-10", eggCount: 22, hatchedDay: "2026-09-07", adopter: null },
{ id: "Nest #244", year: 2026, species: 2, layDate: "2026-07-11", eggCount: 159, hatchedDay: "2026-09-07", adopter: "Amy White" },
{ id: "Nest #245", year: 2026, species: 1, layDate: "2026-07-11", eggCount: 136, hatchedDay: "2026-09-03", adopter: "Amy White" },
{ id: "Nest #246", year: 2026, species: 1, layDate: "2026-07-11", eggCount: 121, hatchedDay: "2026-09-04", adopter: null },
{ id: "Nest #247", year: 2026, species: 1, layDate: "2026-07-11", eggCount: 103, hatchedDay: "2026-09-05", adopter: "Amy White" },
{ id: "Nest #248", year: 2026, species: 1, layDate: "2026-07-11", eggCount: 39, hatchedDay: "2026-09-08", adopter: null },
{ id: "Nest #249", year: 2026, species: 2, layDate: "2026-07-11", eggCount: 113, hatchedDay: "2026-09-07", adopter: "Buijs" },
{ id: "Nest #250", year: 2026, species: 1, layDate: "2026-07-12", eggCount: 78, hatchedDay: "2026-09-07", adopter: null },
{ id: "Nest #251", year: 2026, species: 1, layDate: "2026-07-12", eggCount: 75, hatchedDay: "2026-09-07", adopter: null },
{ id: "Nest #252", year: 2026, species: 1, layDate: "2026-07-12", eggCount: 101, hatchedDay: "2026-09-06", adopter: "Glenn Rosenkjor" },
{ id: "Nest #253", year: 2026, species: 1, layDate: "2026-07-14", eggCount: 92, hatchedDay: "2026-09-06", adopter: null },
{ id: "Nest #254", year: 2026, species: 1, layDate: "2026-07-15", eggCount: 119, hatchedDay: "2026-09-07", adopter: null },
{ id: "Nest #255", year: 2026, species: 1, layDate: "2026-07-15", eggCount: 119, hatchedDay: "2026-09-07", adopter: null },
{ id: "Nest #256", year: 2026, species: 1, layDate: "2026-07-17", eggCount: 86, hatchedDay: "2026-09-08", adopter: "Roeline Biemond" },
{ id: "Nest #257", year: 2026, species: 1, layDate: "2026-07-17", eggCount: 120, hatchedDay: "2026-09-09", adopter: "Lyra & Tim" },
{ id: "Nest #258", year: 2026, species: 1, layDate: "2026-07-18", eggCount: 100, hatchedDay: "2026-09-10", adopter: "Jauiue Tax & Simona bon" },
{ id: "Nest #259", year: 2026, species: 1, layDate: "2026-07-19", eggCount: 71, hatchedDay: "2026-09-13", adopter: null },
{ id: "Nest #260", year: 2026, species: 1, layDate: "2026-07-19", eggCount: 96, hatchedDay: "2026-09-10", adopter: null },
{ id: "Nest #261", year: 2026, species: 2, layDate: "2026-07-19", eggCount: 80, hatchedDay: "2026-09-13", adopter: "Matteo Harino" },
{ id: "Nest #262", year: 2026, species: 1, layDate: "2026-07-20", eggCount: 138, hatchedDay: "2026-09-10", adopter: null },
{ id: "Nest #263", year: 2026, species: 2, layDate: "2026-07-20", eggCount: 106, hatchedDay: "2026-09-13", adopter: "Bachl Robert" },
{ id: "Nest #264", year: 2026, species: 1, layDate: "2026-07-21", eggCount: 130, hatchedDay: "2026-09-09", adopter: "Daisy & Diede" },
{ id: "Nest #265", year: 2026, species: 1, layDate: "2026-07-21", eggCount: 57, hatchedDay: "2026-09-13", adopter: null },
{ id: "Nest #266", year: 2026, species: 1, layDate: "2026-07-22", eggCount: 114, hatchedDay: "2026-09-13", adopter: "Fam. Thoomes" },
{ id: "Nest #267", year: 2026, species: 1, layDate: "2026-07-22", eggCount: 86, hatchedDay: "2026-09-11", adopter: null },
{ id: "Nest #268", year: 2026, species: 2, layDate: "2026-06-22", eggCount: 134, hatchedDay: "2026-09-15", adopter: "Nijsse-van Houijdonk" },
{ id: "Nest #269", year: 2026, species: 1, layDate: "2026-07-23", eggCount: 80, hatchedDay: "2026-09-13", adopter: null },
{ id: "Nest #270", year: 2026, species: 1, layDate: "2026-07-24", eggCount: 108, hatchedDay: "2026-09-14", adopter: "Oblov Aleksei" },
{ id: "Nest #271", year: 2026, species: 1, layDate: "2026-07-24", eggCount: 122, hatchedDay: "2026-09-13", adopter: null },
{ id: "Nest #272", year: 2026, species: 2, layDate: "2026-07-25", eggCount: 129, hatchedDay: "2026-09-17", adopter: "Erin Runalls" },
{ id: "Nest #273", year: 2026, species: 1, layDate: "2026-07-25", eggCount: 120, hatchedDay: "2026-09-14", adopter: "Danial & Sara" },
{ id: "Nest #274", year: 2026, species: 2, layDate: "2026-07-25", eggCount: 118, hatchedDay: "2026-09-19", adopter: "Hope & Oliver" },
{ id: "Nest #275", year: 2026, species: 1, layDate: "2026-07-27", eggCount: 101, hatchedDay: "2026-09-15", adopter: null },
{ id: "Nest #276", year: 2026, species: 1, layDate: "2026-07-27", eggCount: 120, hatchedDay: "2026-09-15", adopter: "Erin Runalls" },
{ id: "Nest #277", year: 2026, species: 1, layDate: "2026-07-27", eggCount: 95, hatchedDay: "2026-09-16", adopter: null },
{ id: "Nest #278", year: 2026, species: 1, layDate: "2026-07-28", eggCount: 82, hatchedDay: "2026-09-18", adopter: "Bobbi Stienmetz" },
{ id: "Nest #279", year: 2026, species: 1, layDate: "2026-07-29", eggCount: 103, hatchedDay: "2026-09-19", adopter: "Aletter Barbara" },
{ id: "Nest #280", year: 2026, species: 2, layDate: "2026-07-30", eggCount: 98, hatchedDay: "2026-09-25", adopter: "Ho Song-Chuen" },
{ id: "Nest #281", year: 2026, species: 1, layDate: "2026-07-30", eggCount: 64, hatchedDay: "2026-09-22", adopter: null },
{ id: "Nest #282", year: 2026, species: 1, layDate: "2026-07-31", eggCount: 104, hatchedDay: "2026-09-18", adopter: "Jane, Jess & Kendra" },
{ id: "Nest #283", year: 2026, species: 1, layDate: "2026-07-31", eggCount: 128, hatchedDay: "2026-09-19", adopter: "Tom" },
{ id: "Nest #284", year: 2026, species: 1, layDate: "2026-08-01", eggCount: 136, hatchedDay: "2026-09-18", adopter: "Maria Alessandra Pinio" },
{ id: "Nest #285", year: 2026, species: 1, layDate: "2026-08-01", eggCount: 105, hatchedDay: "2026-09-25", adopter: null },
{ id: "Nest #286", year: 2026, species: 1, layDate: "2026-08-01", eggCount: 108, hatchedDay: "2026-09-28", adopter: "Sarah Holland" },
{ id: "Nest #287", year: 2026, species: 1, layDate: "2026-08-01", eggCount: 125, hatchedDay: "2026-09-21", adopter: "Sara Lavezzari" },
{ id: "Nest #288", year: 2026, species: 1, layDate: "2026-08-01", eggCount: 89, hatchedDay: "2026-09-23", adopter: null },
{ id: "Nest #289", year: 2026, species: 1, layDate: "2026-08-02", eggCount: 85, hatchedDay: "2026-09-24", adopter: null },
{ id: "Nest #290", year: 2026, species: 2, layDate: "2026-08-02", eggCount: 150, hatchedDay: "2026-09-27", adopter: "Riccardo Martucci" },
{ id: "Nest #291", year: 2026, species: 1, layDate: "2026-08-02", eggCount: 67, hatchedDay: "2026-09-24", adopter: null },
{ id: "Nest #292", year: 2026, species: 1, layDate: "2026-08-02", eggCount: 102, hatchedDay: "2026-09-21", adopter: null },
{ id: "Nest #293", year: 2026, species: 1, layDate: "2026-08-02", eggCount: 106, hatchedDay: "2026-09-25", adopter: null },
{ id: "Nest #294", year: 2026, species: 1, layDate: "2026-08-02", eggCount: 90, hatchedDay: "2026-09-24", adopter: "Caroline Keen" },
{ id: "Nest #295", year: 2026, species: 1, layDate: "2026-08-03", eggCount: 75, hatchedDay: "2026-09-26", adopter: null },
{ id: "Nest #296", year: 2026, species: 1, layDate: "2026-08-04", eggCount: 114, hatchedDay: "2026-09-25", adopter: "Fam Andriessen" },
{ id: "Nest #297", year: 2026, species: 1, layDate: "2026-08-05", eggCount: 130, hatchedDay: "2026-09-25", adopter: "Jerome Keryell" },
{ id: "Nest #298", year: 2026, species: 2, layDate: "2026-08-05", eggCount: 110, hatchedDay: "2026-09-27", adopter: "Van Splunder" },
{ id: "Nest #299", year: 2026, species: 1, layDate: "2026-08-07", eggCount: 85, hatchedDay: "2026-09-28", adopter: null },
];