import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'financial-statements',
  title: 'Financial Statements',
  weight: '~2%',
  order: 4,
  summary:
    "Three statements describe a company: the balance sheet is a snapshot of what it owns and owes, the income statement covers profitability over a period, and the statement of cash flows shows where cash actually came from and went. Know which line item lives on which statement.",
  body: `## The three statements and what each answers

| Statement | Question it answers | Time frame |
| --- | --- | --- |
| **Balance sheet** | What does the company own and owe **right now**? | A single instant (a snapshot) |
| **Income statement** | Was the company **profitable**? | A period (quarter or year) |
| **Statement of cash flows** | Where did **cash** come from and go? | A period (quarter or year) |

There are three statements rather than one because no single statement answers every question. A balance sheet tells you what the company is standing on but not how it got there. An income statement tells you whether the year was profitable but says nothing about whether the profit arrived in cash.

The three are mechanically linked, and the two links are the whole architecture: **net income from the income statement flows into retained earnings on the balance sheet**, and **the bottom line of the cash flow statement is the change in the cash line of that same balance sheet**.

The most common exam question on this topic is simply placement: is this item on the balance sheet or the income statement, and if it is on the cash flow statement, which of the three sections?

## The balance sheet

### The accounting equation

**Assets = Liabilities + Shareholders' equity**

Rearranged, **shareholder equity = assets − liabilities**. This is also called **net worth** or **book value**. The equation is an identity — it always balances, because every dollar of asset was financed either by a creditor or by an owner.

The rationale: the left side lists the resources, the right side lists the claims on them, and there is no third source of money. When a company acquires a machine it either paid cash (one asset swapped for another), borrowed (asset up, liability up), or issued stock (asset up, equity up). Every transaction touches at least two accounts in offsetting directions, so a balance sheet that does not balance is a bookkeeping error, never an economic event.

### Assets

- **Current assets** — convertible to cash within **one year**: cash and equivalents, marketable securities, accounts receivable, inventory, prepaid expenses.
- **Fixed (long-term) assets** — property, plant, and equipment, carried at cost less accumulated depreciation.
- **Intangible assets** — patents, trademarks, copyrights, goodwill. Goodwill arises only from an acquisition, when the purchase price exceeds the fair value of identifiable net assets.

### Why the current versus non-current split matters

The one-year line is not bookkeeping fussiness. Bills coming due inside a year must be paid from resources that turn into cash inside a year, and a factory is worth a great deal but is no help when payroll is due on Friday. Sorting **both** sides of the sheet on the same horizon is what makes it possible to set them against each other — which is exactly what working capital and the current ratio do.

The boundary has one documented exception: the split uses one year **or the company's normal operating cycle, whichever is longer**. A distiller whose whiskey ages four years still reports that inventory as current, because four years is its ordinary cycle from raw material to cash. The exception is narrow, not a license to reclassify anything inconvenient.

Two placement traps live here. The **current portion of long-term debt** — principal on a twenty-year bond falling due within twelve months — is a **current liability**, even though the instrument is long-term. And **prepaid expenses** are a current asset even though they will never become cash: the company already paid, and what it gets back is a service rather than money.

### Liabilities

- **Current liabilities** — due within **one year**: accounts payable, accrued wages and taxes, short-term notes, and the current portion of long-term debt.
- **Long-term liabilities** — bonds outstanding, long-term notes, deferred taxes, lease obligations.

### Shareholders' equity

Read top to bottom: **preferred stock at par**, **common stock at par**, **additional paid-in capital** (amounts received above par when shares were issued), and **retained earnings** (cumulative profits not paid out as dividends), less **treasury stock** (shares repurchased by the company, a contra-equity item).

**Par value** is a legal artifact, usually a penny or a dollar, set deliberately low so it constrains nothing; the meaningful figure is par plus additional paid-in capital together, which is what shareholders actually handed over. Hold the distinction from retained earnings: **paid-in capital is money that came from investors; retained earnings is money the business generated itself and kept.**

**Treasury stock** is subtracted rather than added because a buyback is the mirror image of an issuance. Cash leaves and equity shrinks by the same amount — which is why buybacks lower **total** book value while raising earnings per share, since fewer shares divide the same earnings. Book value *per share* is a separate question: it rises when shares are repurchased below book value per share and falls when they are repurchased above it.

What the balance sheet does **not** show matters as much as what it does. Assets sit largely at **historical cost**, so land bought in 1974 still carries its 1974 price. Internally built brands, trained workforces, and customer relationships appear nowhere, because no purchase ever set a price for them. Hence book value and market value routinely differ by multiples, and price-to-book means something entirely different for a railroad than for a software firm.

**Working capital = current assets − current liabilities**, the cushion available to fund day-to-day operations. It is a dollar amount and so says nothing about scale on its own — $500,000 is comfortable for a small distributor and trivial for a national manufacturer, which is why analysts pair it with the current ratio.

## The income statement

The statement runs from the top line to the bottom line, and each subtotal exists to isolate one thing:

- **Revenue (net sales)** — gross sales less returns, allowances, and discounts. The word "net" here means net of those items, not net of any cost.
- less **Cost of goods sold** → **Gross profit**. What survives the direct cost of producing the product. Gross margin is the crudest read on pricing power.
- less **Operating expenses** (SG&A, research and development, **depreciation and amortization**) → **Operating income (EBIT)**. The profit of the business itself, before the question of how it is financed arises.
- less **Interest expense** → **Pre-tax income (EBT)**. The capital structure has now been charged.
- less **Taxes** → **Net income**. What belongs to the owners.

**EBIT is the only line indifferent to financing**, and that is why analysts anchor on it. Two identical factories, one funded with debt and one with equity, report the same EBIT and very different net income. If the question is whether the underlying business is good, look at EBIT. If the question is what shareholders actually got, look at net income.

Watch for **non-recurring items** — restructuring charges, gains or losses on asset sales, discontinued operations. They are real, they hit net income, and they will not repeat, so an analyst estimating next year strips them out to reach a sustainable earnings figure.

From net income, preferred dividends are subtracted to reach **earnings available to common**, which drives EPS. Common dividends are then paid and whatever remains flows into **retained earnings** on the balance sheet — the hinge that connects the two statements.

**EBITDA** is earnings before interest, taxes, depreciation, and amortization. Adding back the non-cash charges produces a rough proxy for operating cash generation, which is why it is popular in credit analysis and leveraged deals. It is **not a GAAP measure** and it deliberately ignores real costs — capital assets do wear out and debt does have to be serviced. Its blind spot is worst exactly where it is used most: a capital-intensive firm with heavy annual reinvestment will show robust EBITDA and thin genuine free cash flow.

### Basic and diluted EPS

**Basic EPS** divides earnings available to common by the **weighted average** shares outstanding — weighted, because shares issued in October were outstanding for only a quarter of the year.

**Diluted EPS** answers a different question: what would each share have earned if every claim on future shares were exercised today? The candidates are **convertible bonds, convertible preferred stock, warrants, rights, and employee stock options**. Two adjustments run together. The share count rises, and the numerator is adjusted for whatever would stop being paid — converting a bond eliminates its interest expense (added back **net of tax**, since the interest was deductible), and converting preferred eliminates the preferred dividend.

A security is **anti-dilutive** if assuming conversion would raise EPS, and anti-dilutive securities are excluded. That exclusion is the reason **diluted EPS is always less than or equal to basic EPS**. Diluted is the conservative figure and the one an analyst should quote.

## The statement of cash flows

Because accounting income is not cash, this statement reconciles the two. Three sections:

### Operating activities

Cash from running the business: net income adjusted for non-cash items (**depreciation and amortization added back**) and for changes in working capital accounts (receivables, inventory, payables). This is the section analysts weight most heavily — a company that reports profits while operating cash flow is negative deserves scrutiny.

The **indirect method**, which starts at net income and works backward, is what almost every filer uses. The signs follow one rule: an increase in an operating asset **uses** cash (you shipped goods and got a receivable instead of money), while an increase in an operating liability **provides** cash (you took delivery and have not paid the supplier yet).

### Investing activities

Purchases and sales of **long-term assets** and of securities held as investments. Capital expenditures show as an outflow; proceeds from selling a plant or a subsidiary show as an inflow.

### Financing activities

Transactions with **capital providers**: issuing or repaying debt, issuing or repurchasing stock, and **paying dividends**.

A frequently missed distinction: **interest paid is an operating item, but dividends paid are a financing item.** The rationale is that interest is a contractual expense that already ran through the income statement in arriving at net income, whereas a dividend is a discretionary distribution of profit to owners — a financing decision, not a cost of doing business.

### Scenario: a $100,000 sale that produces no cash at all

A distributor ships $100,000 of goods on 60-day credit terms. The goods cost $60,000 to make; the tax rate is 25%.

On the **income statement**, revenue rises $100,000 and cost of goods sold rises $60,000, giving $40,000 of gross profit; tax of $10,000 accrues, so net income rises $30,000. On the **balance sheet**, receivables climb $100,000 while inventory falls $60,000, a net asset increase of $40,000; taxes payable climb $10,000 and retained earnings climb $30,000, so the sheet still balances at $40,000 = $10,000 + $30,000.

Now the **cash flow statement**: start with $30,000 of net income, subtract the $100,000 increase in receivables, add back the $60,000 decrease in inventory, add the $10,000 increase in taxes payable. 30,000 − 100,000 + 60,000 + 10,000 = **zero**. The company booked $30,000 of profit and collected not one dollar. Repeat that pattern across a year of rapid growth and a profitable company runs out of money.

### Scenario: tracing one equipment purchase through all three statements

A company buys a $300,000 machine for cash, depreciates it straight-line over five years with no salvage value, and pays tax at 25%. Follow year one.

**Income statement:** depreciation of $300,000 ÷ 5 = $60,000 cuts pre-tax income by $60,000 and taxes by 25% × $60,000 = $15,000, so net income falls $60,000 − $15,000 = **$45,000**.

**Cash flow statement:** the operating section starts $45,000 lower but adds the $60,000 of depreciation back, so operating cash flow is **$15,000 higher** — the tax saving, the only cash the depreciation entry ever moved. Investing carries the full **$300,000 outflow** in the purchase year. Net change in cash is 15,000 − 300,000 = −$285,000.

**Balance sheet:** cash down $285,000; gross PP&E up $300,000 against $60,000 of accumulated depreciation, so net PP&E up $240,000. Total assets change by −285,000 + 240,000 = −$45,000, matching the $45,000 fall in retained earnings exactly. The identity holds because the machine costs cash once and costs earnings five times.

### Scenario: growth that consumes cash

Cascade Instruments earns net income of $600,000. Depreciation and amortization add back $300,000, but receivables rise $310,000 and inventory rises $240,000 to support a surging order book. Those four items alone leave $350,000; the remaining working-capital movements net a further $60,000 and the add-back of the $25,000 loss on the equipment sale lifts operating cash flow to **$435,000**. Capital expenditure of $700,000 against $45,000 of proceeds from selling old equipment makes investing **−$655,000**, and the board pays $140,000 of dividends. Cash before any new financing changes by 435,000 − 655,000 − 140,000 = **−$360,000**.

The company is profitable, growing, and $360,000 short. It must borrow, issue stock, or draw down its cash balance. Nothing in the income statement announced this; only the cash flow statement did.

## Accrual versus cash accounting

**GAAP requires accrual accounting** for public companies. Revenue is recognized when **earned** and expenses when **incurred**, regardless of when cash moves. Cash accounting records transactions only when cash changes hands.

Accrual rests on the **matching principle**: costs are reported in the same period as the revenue they helped produce, which is why a machine is depreciated over its service life rather than expensed the day it is bought. The mirror image is **deferred (unearned) revenue** — cash collected for a service not yet delivered, which sits as a **liability** rather than as revenue until the obligation is performed.

Accrual accounting gives a truer picture of economic performance across periods, but it creates the gap between reported earnings and cash that the cash flow statement exists to explain, and it leaves room for judgment — which is where earnings management lives.

## Depreciation, amortization, and depletion

**Depreciation** spreads the cost of a tangible fixed asset over its useful life; **amortization** does the same for intangibles; **depletion** applies to natural resources. All three are **non-cash charges** that reduce reported income and taxes without reducing cash in the period, which is exactly why they get added back in the operating section of the cash flow statement.

Trace one charge across all three: on the **income statement** it lowers pre-tax income and therefore tax; on the **balance sheet** it raises accumulated depreciation, lowering net fixed assets and, through net income, retained earnings; on the **cash flow statement** it is added straight back. Its only cash effect is the tax it saves.

## Footnotes and the auditor

The **footnotes** are part of the financial statements, not an appendix. They disclose accounting policies, debt terms and maturities, lease and pension obligations, contingent liabilities and pending litigation, segment detail, and related-party transactions. Much of what actually changes an analysis is found here rather than on the face of the statements — a pending lawsuit or a debt covenant that trips at a specified leverage ratio will never appear as a line item.

The **independent auditor** expresses an opinion on whether the statements are fairly presented in conformity with **GAAP**:

- **Unqualified (clean)** — the best outcome; statements are fairly presented.
- **Qualified** — fairly presented **except for** a specific identified issue.
- **Adverse** — the statements are **not** fairly presented. A serious red flag.
- **Disclaimer** — the auditor cannot form an opinion, typically from a scope limitation.

Remember what the opinion is not: an auditor does not certify that the business is a good investment, guarantee the absence of fraud, or endorse management. A going-concern paragraph, which flags substantial doubt about survival, can appear even inside an otherwise unqualified opinion and should never be read past.

## What gets filed, and when

- **Form 10-K** — the annual report, **audited**, with full footnotes, management discussion and analysis, and risk factors. Deadlines run from roughly 60 to 90 days after year end depending on filer size.
- **Form 10-Q** — the quarterly report, filed for the first three quarters only (the fourth is folded into the 10-K). It is **unaudited**; the auditor performs a lighter review.
- **Form 8-K** — the current report for material events between periodic filings: a merger agreement, an auditor resignation, bankruptcy, the departure of a senior officer.

All three are free on the SEC EDGAR system, which matters practically: an adviser recommending a security has no excuse for not having read the most recent 10-K.`,
  pitfalls: [
    'Dividends paid appear in the FINANCING section of the cash flow statement, while interest paid appears in the OPERATING section — the exam tests this pairing directly.',
    'Depreciation is a non-cash charge; it reduces reported net income but is added back in the operating section because no cash left the company that period.',
    'Retained earnings is a balance sheet equity account holding cumulative undistributed profits, not a pot of cash and not an income statement line.',
    'EBITDA is not a GAAP measure and is not cash flow — it ignores capital spending, interest, taxes, and working capital changes.',
    "An unqualified audit opinion is the GOOD one. The word unqualified means nothing was excepted, not that the auditor lacked qualifications.",
    'Goodwill only arises from an acquisition. A company cannot record goodwill for a valuable brand it built itself.',
    'Working capital is current assets minus current liabilities, an absolute dollar figure — do not confuse it with the current ratio, which is the same items divided rather than subtracted.',
    'The current portion of long-term debt is a CURRENT liability. Leaving it in the long-term section overstates both working capital and the current ratio.',
    'The 10-K is audited; the 10-Q is not. Only three 10-Qs are filed each year because the fourth quarter is folded into the annual report.',
  ],
  keyTerms: [
    {
      term: 'Accounting equation',
      definition:
        'Assets equal liabilities plus shareholder equity. Rearranged, equity (net worth or book value) equals assets minus liabilities.',
    },
    {
      term: 'Current asset',
      definition:
        'An asset expected to be converted to cash or consumed within one year — cash, marketable securities, receivables, inventory, and prepaid expenses.',
    },
    {
      term: 'Working capital',
      definition:
        'Current assets minus current liabilities; the dollar cushion available to fund day-to-day operations and a basic liquidity gauge.',
    },
    {
      term: 'Retained earnings',
      definition:
        'The cumulative profits a company has kept rather than distributed as dividends; an equity account on the balance sheet, not a cash balance.',
    },
    {
      term: 'Operating income (EBIT)',
      definition:
        'Revenue less cost of goods sold and operating expenses, before interest and taxes; measures profitability of the core business independent of financing.',
    },
    {
      term: 'EBITDA',
      definition:
        'Earnings before interest, taxes, depreciation, and amortization; a non-GAAP proxy for operating cash generation that ignores capital costs and debt service.',
    },
    {
      term: 'Accrual accounting',
      definition:
        'The GAAP method that recognizes revenue when earned and expenses when incurred, regardless of when cash is received or paid.',
    },
    {
      term: 'Deferred (unearned) revenue',
      definition:
        'Cash collected before the good or service has been delivered; carried as a liability until the obligation is performed, not as revenue.',
    },
    {
      term: 'Anti-dilutive security',
      definition:
        'A convertible or exercisable security whose assumed conversion would raise earnings per share; it is excluded from diluted EPS, which is why diluted can never exceed basic.',
    },
    {
      term: 'Unqualified opinion',
      definition:
        'The clean audit opinion stating that the financial statements are fairly presented in conformity with GAAP, with no exceptions taken.',
    },
  ],
  confusions: [
    {
      dont: 'The balance sheet, a snapshot at a single point in time',
      with: 'The income statement, which covers activity across a period',
    },
    {
      dont: 'Net income, an accrual accounting result',
      with: 'Cash flow from operations, which adds back non-cash charges and working capital changes',
    },
    {
      dont: 'Interest paid, an operating cash flow',
      with: 'Dividends paid, a financing cash flow',
    },
    {
      dont: 'An unqualified opinion, which is the clean and favorable one',
      with: 'A qualified opinion, which takes exception to a specific issue',
    },
    {
      dont: 'Working capital, a dollar amount found by subtraction',
      with: 'The current ratio, a multiple found by division',
    },
    {
      dont: 'Paid-in capital, money contributed by investors when shares were issued',
      with: 'Retained earnings, profits the business generated itself and did not distribute',
    },
    {
      dont: 'The audited annual 10-K',
      with: 'The unaudited quarterly 10-Q, of which only three are filed each year',
    },
  ],
  formulas: [
    {
      name: 'Accounting equation',
      formula: 'Assets = Liabilities + Shareholder equity',
      note: 'Rearranges to equity = assets − liabilities, which is net worth or book value.',
    },
    {
      name: 'Working capital',
      formula: 'Working capital = Current assets − Current liabilities',
      note: 'A dollar figure, not a ratio. Declining working capital signals liquidity strain.',
    },
    {
      name: 'Net income (income statement flow)',
      formula:
        'Revenue − COGS = Gross profit; − operating expenses = EBIT; − interest = EBT; − taxes = Net income',
      note: 'Preferred dividends are then subtracted to reach earnings available to common shareholders.',
    },
    {
      name: 'EBITDA',
      formula: 'EBITDA = EBIT + Depreciation + Amortization',
      note: 'Equivalently, net income + taxes + interest + depreciation + amortization. Not a GAAP measure.',
    },
    {
      name: 'Cash flow from operations (indirect method)',
      formula:
        'CFO = Net income + non-cash charges − increases in operating assets + increases in operating liabilities',
      note: 'An increase in receivables or inventory uses cash; an increase in payables provides cash.',
    },
    {
      name: 'Retained earnings roll-forward',
      formula: 'Ending RE = Beginning RE + Net income − Dividends declared',
      note: 'Dividends means all dividends, preferred and common. This is the link from income statement to balance sheet.',
    },
  ],
  workedExamples: [
    {
      title: 'Working capital and the current ratio from one balance sheet',
      setup:
        "Cascade Instruments reports these balances at year end. Current assets: cash $120,000, marketable securities $60,000, accounts receivable $640,000, inventory $500,000, prepaid expenses $40,000. Net property, plant and equipment is $1,900,000 and goodwill is $240,000. Current liabilities total $850,000, of which $150,000 is the current portion of long-term debt; the remaining long-term debt is $1,400,000. Compute total current assets, working capital, the current ratio, and confirm shareholders' equity from the accounting equation.",
      steps: [
        'Step 1 — total the current assets, and only the current assets: $120,000 + $60,000 + $640,000 + $500,000 + $40,000 = $1,360,000. Net PP&E and goodwill are long-term and stay out.',
        'Step 2 — confirm the current liability figure. The $150,000 current portion of long-term debt is already inside the $850,000 and belongs there, because that principal is payable within twelve months. Current liabilities = $850,000.',
        'Step 3 — working capital = current assets − current liabilities = $1,360,000 − $850,000 = $510,000. This is a dollar cushion, not a ratio.',
        'Step 4 — current ratio = current assets ÷ current liabilities = $1,360,000 ÷ $850,000 = 1.6.',
        'Step 5 — build the full balance sheet to check the identity. Total assets = $1,360,000 + $1,900,000 + $240,000 = $3,500,000. Total liabilities = $850,000 + $1,400,000 = $2,250,000.',
        "Step 6 — shareholders' equity = assets − liabilities = $3,500,000 − $2,250,000 = $1,250,000.",
        'Step 7 — interpret. Current assets cover current obligations 1.6 times, with $510,000 of slack. But $500,000 of the $1,360,000 is inventory, so the comfort depends entirely on whether that inventory sells. Working capital tells you the size of the cushion; the current ratio tells you how many times over the bills are covered; neither tells you how fast the assets actually convert.',
      ],
      answer:
        "Total current assets $1,360,000; working capital $510,000; current ratio 1.6; shareholders' equity $1,250,000.",
      watchOut:
        'Pushing the $150,000 current portion of long-term debt back into the long-term section because the instrument is long-term. That leaves current liabilities at $700,000 and produces a current ratio of 1.94 and working capital of $660,000 — both flattering and both wrong. Maturity is measured from today, not from the day the bond was issued.',
    },
    {
      title: 'EBIT and EBITDA from the same income statement',
      setup:
        'Cascade Instruments reports net sales of $6,000,000, cost of goods sold of $3,600,000, selling, general and administrative expense of $1,200,000, depreciation of $260,000, amortization of patents of $40,000, interest expense of $100,000, and a 25% tax rate. Compute gross profit, EBIT, net income, and EBITDA.',
      steps: [
        'Step 1 — gross profit = net sales − COGS = $6,000,000 − $3,600,000 = $2,400,000, a 40% gross margin.',
        'Step 2 — total operating expenses = SG&A + depreciation + amortization = $1,200,000 + $260,000 + $40,000 = $1,500,000. Depreciation and amortization are operating expenses; they sit above the EBIT line.',
        'Step 3 — EBIT (operating income) = $2,400,000 − $1,500,000 = $900,000, a 15% operating margin.',
        'Step 4 — pre-tax income = EBIT − interest = $900,000 − $100,000 = $800,000. Tax = 25% × $800,000 = $200,000. Net income = $800,000 − $200,000 = $600,000, a 10% net margin.',
        'Step 5 — EBITDA from the top down = EBIT + depreciation + amortization = $900,000 + $260,000 + $40,000 = $1,200,000.',
        'Step 6 — cross-check from the bottom up. EBITDA = net income + taxes + interest + depreciation + amortization = $600,000 + $200,000 + $100,000 + $260,000 + $40,000 = $1,200,000. The two routes agree, which confirms the figure.',
        'Step 7 — see what each measure discarded. EBIT set aside $100,000 of interest and $200,000 of tax to isolate the operating business. EBITDA additionally set aside $300,000 of depreciation and amortization to approximate the cash the operations threw off. Sales of $6,000,000 support a 20% EBITDA margin against a 10% net margin — the same company, twice as flattering.',
      ],
      answer:
        'Gross profit $2,400,000 (40%); EBIT $900,000 (15%); net income $600,000 (10%); EBITDA $1,200,000 (20%).',
      watchOut:
        'Adding depreciation and amortization back to NET income and calling the result EBITDA: $600,000 + $300,000 = $900,000. That number is doubly dangerous because it happens to equal EBIT, so it looks like it belongs on the statement. EBITDA must add back interest and taxes as well; the correct answer is $1,200,000, a third higher.',
    },
    {
      title: 'Basic and diluted EPS from the same net income',
      setup:
        'Cascade Instruments earns net income of $600,000 and pays $40,000 of preferred dividends. Weighted average common shares outstanding are 200,000. Three dilutive securities exist: the preferred stock is convertible into 25,000 common shares; $500,000 of 8% convertible debentures pay $40,000 of interest and convert into 20,000 common shares; and 21,000 employee options are exercisable at $20 while the average market price for the year was $30. The tax rate is 25%. Compute basic and diluted EPS.',
      steps: [
        'Step 1 — earnings available to common = net income − preferred dividends = $600,000 − $40,000 = $560,000.',
        'Step 2 — basic EPS = $560,000 ÷ 200,000 shares = $2.80.',
        'Step 3 — assume the preferred converts. The $40,000 dividend would no longer be paid, so add it back: numerator returns to $600,000. Shares rise by 25,000.',
        'Step 4 — assume the debentures convert. The $40,000 of interest disappears, but interest was tax-deductible, so add it back NET OF TAX: $40,000 × (1 − 0.25) = $30,000. Numerator becomes $600,000 + $30,000 = $630,000. Shares rise by 20,000.',
        'Step 5 — handle the options by the treasury stock method. Exercise proceeds = 21,000 × $20 = $420,000. At the $30 average price those proceeds buy back $420,000 ÷ $30 = 14,000 shares. Net new shares = 21,000 − 14,000 = 7,000. The numerator is unchanged.',
        'Step 6 — confirm each security is dilutive before including it. Preferred: $40,000 ÷ 25,000 = $1.60 per incremental share. Debentures: $30,000 ÷ 20,000 = $1.50. Options: $0 ÷ 7,000 = $0. All three are below the $2.80 basic EPS, so all three pull EPS down and all three are included.',
        'Step 7 — diluted denominator = 200,000 + 25,000 + 20,000 + 7,000 = 252,000 shares.',
        'Step 8 — diluted EPS = $630,000 ÷ 252,000 = $2.50.',
        'Step 9 — measure the dilution: ($2.80 − $2.50) ÷ $2.80 = 10.7%. A shareholder reading only the basic figure overstates their claim on earnings by about a tenth.',
      ],
      answer:
        'Basic EPS $2.80; diluted EPS $2.50. The dilution is 10.7%, and diluted is the conservative figure an analyst should quote.',
      watchOut:
        'Dividing the BASIC numerator by the DILUTED share count: $560,000 ÷ 252,000 = $2.22. That double-counts the preferred dividend, which the conversion would have eliminated, and ignores the interest add-back entirely. The other standard slip is counting all 21,000 option shares instead of the 7,000 net of the treasury-stock buyback, which gives $630,000 ÷ 266,000 = $2.37.',
    },
    {
      title: 'Cash flow from operations by the indirect method',
      setup:
        'For the same year, Cascade Instruments reports net income of $600,000, depreciation of $260,000, and amortization of $40,000. During the year accounts receivable rose $310,000, inventory rose $240,000, prepaid expenses fell $10,000, accounts payable rose $70,000, and accrued wages fell $20,000. The company also recorded a $25,000 loss on the sale of old equipment. Compute cash flow from operations.',
      steps: [
        'Step 1 — start at net income: $600,000. The indirect method begins with the accrual result and removes everything in it that was not cash.',
        'Step 2 — add back the non-cash charges: $600,000 + $260,000 + $40,000 = $900,000. Neither depreciation nor amortization moved a dollar.',
        'Step 3 — receivables rose $310,000, meaning sales were booked but not collected. An increase in an operating asset USES cash: $900,000 − $310,000 = $590,000.',
        'Step 4 — inventory rose $240,000, cash spent on goods not yet sold: $590,000 − $240,000 = $350,000.',
        'Step 5 — prepaid expenses fell $10,000, a decrease in an operating asset, which PROVIDES cash: $350,000 + $10,000 = $360,000.',
        'Step 6 — accounts payable rose $70,000, meaning suppliers financed the company. An increase in an operating liability provides cash: $360,000 + $70,000 = $430,000.',
        'Step 7 — accrued wages fell $20,000, a liability paid down, which uses cash: $430,000 − $20,000 = $410,000.',
        'Step 8 — add back the $25,000 loss on equipment. It reduced net income but the transaction belongs in the INVESTING section, so removing it from operating avoids double-counting: $410,000 + $25,000 = $435,000.',
        'Step 9 — compare with net income. The company earned $600,000 and generated $435,000 of operating cash. The $165,000 gap is almost entirely the $550,000 poured into receivables and inventory, only partly offset by $300,000 of non-cash add-backs.',
      ],
      answer:
        'Cash flow from operations is $435,000, against reported net income of $600,000.',
      watchOut:
        'Reversing the working-capital signs — adding the increases in receivables and inventory rather than subtracting them — which gives $600,000 + $300,000 + $310,000 + $240,000 − $10,000 − $70,000 + $20,000 + $25,000 = $1,415,000, more than triple the truth. Anchor on the rule: an asset going UP means cash went OUT. The second common error is subtracting the $25,000 loss instead of adding it back, giving $385,000.',
    },
    {
      title: 'The retained earnings roll-forward',
      setup:
        'Cascade Instruments opened the year with retained earnings of $340,000. It earned net income of $600,000, paid preferred dividends of $40,000, and declared a common dividend of $0.50 per share on 200,000 shares. Compute ending retained earnings, and reconcile it with total equity of $1,250,000 given preferred stock of $100,000, common stock at par of $200,000, additional paid-in capital of $200,000, and treasury stock of $50,000.',
      steps: [
        'Step 1 — common dividends = $0.50 × 200,000 shares = $100,000.',
        'Step 2 — total dividends = preferred + common = $40,000 + $100,000 = $140,000. Both classes come out; retained earnings does not care who received the money.',
        'Step 3 — apply the roll-forward: ending RE = beginning RE + net income − dividends = $340,000 + $600,000 − $140,000.',
        'Step 4 — compute: $340,000 + $600,000 = $940,000; $940,000 − $140,000 = $800,000.',
        'Step 5 — reconcile total equity: $100,000 preferred + $200,000 common par + $200,000 paid-in capital + $800,000 retained earnings − $50,000 treasury stock = $1,250,000. Treasury stock is subtracted because a buyback returns capital to shareholders.',
        'Step 6 — read what happened. Of $600,000 earned, $140,000 went out the door and $460,000 was retained, so retained earnings grew from $340,000 to $800,000, a 135% increase.',
        'Step 7 — and note what did NOT happen. Retained earnings rose $460,000, but the company generated only $435,000 of operating cash and spent $700,000 on equipment. Retained earnings is a claim on assets already spent, not a reserve of cash sitting somewhere.',
      ],
      answer:
        "Ending retained earnings is $800,000, and total shareholders' equity reconciles to $1,250,000.",
      watchOut:
        'Adding dividends instead of subtracting them: $340,000 + $600,000 + $140,000 = $1,080,000. Dividends leave the company, so they always reduce retained earnings. Two other reliable traps: forgetting the preferred dividends and subtracting only the $100,000 common, which gives $840,000; and rolling forward with EBIT of $900,000 instead of net income, which gives $1,100,000. The roll-forward uses net income, after interest and after tax.',
    },
  ],
};
