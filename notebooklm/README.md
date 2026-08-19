# NotebookLM sources — 46 topics, regenerated, never hand-edited

    node --experimental-strip-types --import ./scripts/ts-resolve-register.mjs \
         scripts/export-notebooklm.mjs

**Do not edit these files.** They are rendered from `src/data/topics/`. Edit the
topic, re-run the script.

## Why they are not just copies of the topic pages

NotebookLM narrates **whatever the source contains**, which makes the source a
*constraint* — the customise box is only an instruction the model may decline,
and a document that lacks a sentence cannot produce it. Measured against these
46 topics before writing the exporter:

| in the source | what NotebookLM does with it |
|---|---|
| **505 table rows** | reads them as a stream of cell values with **the column headings gone** |
| internal topic ids | speaks the slug aloud, personifying it into a product name |

So the exporter **rewrites every table into sentences that carry their own
headings** — *"Fed action — Easy expansionary: buys securities, cuts discount
rate. Tight contractionary: sells securities."* — and no topic id reaches the
file. Humans keep the tables; that view is the app. **Same material, two shapes.**

## Workflow

1. Run the exporter. 46 files, ~153,000 words, roughly 1,020 minutes of
   narration if every one were made.
2. Upload a file to NotebookLM, generate the Video Overview.
3. Upload the video to YouTube — **unlisted is enough**; the app embeds by id
   and nothing links to the channel.
4. Put the id in `src/data/topicVideos.ts` against that topic.

A topic with a `null` id renders **no player at all**, deliberately. Most of
these will be null for a long time, and 46 "coming soon" cards read as a broken
app rather than an unfinished one.

## Start with weight, not order

The exam is weighted. The first five files by exam weight are worth more than
the first five by number, and the app's own next-action engine already picks
topics that way.
