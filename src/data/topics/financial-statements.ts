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

The most common exam question on this topic is simply placement: is this item on the balance sheet or the income statement, and if it is on the cash flow statement, which of the three sections?

## The balance sheet

### The accounting equation

**Assets = Liabilities + Shareholders' equity**

Rearranged, **shareholder equity = assets − liabilities**. This is also called **net worth** or **book value**. The equation is an identity — it always balances, because every dollar of asset was financed either by a creditor or by an owner.

### Assets

- **Current assets** — convertible to cash within **one year**: cash and equivalents, marketable securities, accounts receivable, inventory, prepaid expenses.
- **Fixed (long-term) assets** — property, plant, and equipment, carried at cost less accumulated depreciation.
- **Intangible assets** — patents, trademarks, copyrights, goodwill. Goodwill arises only from an acquisition, when the purchase price exceeds the fair value of identifiable net assets.

### Liabilities

- **Current liabilities** — due within **one year**: accounts payable, accrued wages and taxes, short-term notes, and the current portion of long-term debt.
- **Long-term liabilities** — bonds outstanding, long-term notes, deferred taxes, lease obligations.

### Shareholders' equity

Read top to bottom: **preferred stock at par**, **common stock at par**, **additional paid-in capital** (amounts received above par when shares were issued), and **retained earnings** (cumulative profits not paid out as dividends), less **treasury stock** (shares repurchased by the company, a contra-equity item).

**Working capital = current assets − current liabilities.** It measures the cushion available to fund day-to-day operations. Positive and stable is healthy; shrinking working capital is an early liquidity warning.

## The income statement

The statement runs from the top line to the bottom line:

- **Revenue (net sales)**
- less **Cost of goods sold** → **Gross profit**
- less **Operating expenses** (SG&A, research and development, **depreciation and amortization**) → **Operating income (EBIT)**
- less **Interest expense** → **Pre-tax income (EBT)**
- less **Taxes** → **Net income**

From net income, preferred dividends are subtracted to reach **earnings available to common**, which drives EPS. Common dividends are then paid and whatever remains flows into **retained earnings** on the balance sheet — the hinge that connects the two statements.

**EBITDA** is earnings before interest, taxes, depreciation, and amortization. Adding back the non-cash charges produces a rough proxy for operating cash generation, which is why it is popular in credit analysis and leveraged deals. It is **not a GAAP measure** and it deliberately ignores real costs — capital assets do wear out and debt does have to be serviced.

## The statement of cash flows

Because accounting income is not cash, this statement reconciles the two. Three sections:

### Operating activities

Cash from running the business: net income adjusted for non-cash items (**depreciation and amortization added back**) and for changes in working capital accounts (receivables, inventory, payables). This is the section analysts weight most heavily — a company that reports profits while operating cash flow is negative deserves scrutiny.

### Investing activities

Purchases and sales of **long-term assets** and of securities held as investments. Capital expenditures show as an outflow; proceeds from selling a plant or a subsidiary show as an inflow.

### Financing activities

Transactions with **capital providers**: issuing or repaying debt, issuing or repurchasing stock, and **paying dividends**.

A frequently missed distinction: **interest paid is an operating item, but dividends paid are a financing item.** Interest is an expense that runs through the income statement; dividends are a distribution to owners.

## Accrual versus cash accounting

**GAAP requires accrual accounting** for public companies. Revenue is recognized when **earned** and expenses when **incurred**, regardless of when cash moves. Cash accounting records transactions only when cash changes hands.

Accrual accounting gives a truer picture of economic performance across periods, but it creates the gap between reported earnings and cash that the cash flow statement exists to explain, and it leaves room for judgment — which is where earnings management lives.

## Depreciation, amortization, and depletion

**Depreciation** spreads the cost of a tangible fixed asset over its useful life; **amortization** does the same for intangibles; **depletion** applies to natural resources. All three are **non-cash charges** that reduce reported income and taxes without reducing cash in the period, which is exactly why they get added back in the operating section of the cash flow statement.

## Footnotes and the auditor

The **footnotes** are part of the financial statements, not an appendix. They disclose accounting policies, debt terms and maturities, lease and pension obligations, contingent liabilities and pending litigation, segment detail, and related-party transactions. Much of what actually changes an analysis is found here rather than on the face of the statements.

The **independent auditor** expresses an opinion on whether the statements are fairly presented in conformity with **GAAP**:

- **Unqualified (clean)** — the best outcome; statements are fairly presented.
- **Qualified** — fairly presented **except for** a specific identified issue.
- **Adverse** — the statements are **not** fairly presented. A serious red flag.
- **Disclaimer** — the auditor cannot form an opinion, typically from a scope limitation.

Remember what the opinion is not: an auditor does not certify that the business is a good investment, guarantee the absence of fraud, or endorse management.`,
  pitfalls: [
    'Dividends paid appear in the FINANCING section of the cash flow statement, while interest paid appears in the OPERATING section — the exam tests this pairing directly.',
    'Depreciation is a non-cash charge; it reduces reported net income but is added back in the operating section because no cash left the company that period.',
    'Retained earnings is a balance sheet equity account holding cumulative undistributed profits, not a pot of cash and not an income statement line.',
    'EBITDA is not a GAAP measure and is not cash flow — it ignores capital spending, interest, taxes, and working capital changes.',
    "An unqualified audit opinion is the GOOD one. The word unqualified means nothing was excepted, not that the auditor lacked qualifications.",
    'Goodwill only arises from an acquisition. A company cannot record goodwill for a valuable brand it built itself.',
    'Working capital is current assets minus current liabilities, an absolute dollar figure — do not confuse it with the current ratio, which is the same items divided rather than subtracted.',
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
  ],
};
