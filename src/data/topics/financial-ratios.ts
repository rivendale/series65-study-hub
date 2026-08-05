import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'financial-ratios',
  title: 'Financial Ratio Analysis',
  weight: '~2%',
  order: 5,
  summary:
    'Ratios turn raw statement figures into comparable measures of liquidity, leverage, profitability, and valuation. Memorize the formulas, know which statement each input comes from, and know which direction is favorable.',
  body: `## How ratios are tested

Series 65 ratio questions come in three flavors: **compute it** from a short set of figures, **identify what it measures**, and **interpret it** (higher is better, or the opposite). The math is arithmetic. The failures come from grabbing the wrong input — using total assets where the question wanted current assets, or forgetting to remove preferred dividends before calculating EPS.

Ratios are only meaningful **in context**: against the same company over time, against direct competitors, or against an industry norm. A current ratio of 1.2 is worrying for a manufacturer and unremarkable for a utility with predictable cash collections.

## Liquidity ratios — can it pay the bills?

### Current ratio

**Current assets ÷ current liabilities.** The broadest liquidity measure. A result above **1.0** means current assets cover current obligations. Very high readings are not automatically good — they can signal idle cash or bloated inventory.

### Quick ratio (acid test)

**(Current assets − inventory) ÷ current liabilities.** Strips out inventory, the current asset that is hardest to convert to cash quickly and at full value. This is the **more conservative** test, and the right one when a question emphasizes a company with slow-moving or obsolete stock.

### Working capital

**Current assets − current liabilities.** Not a ratio at all but a dollar amount. It answers how much cushion exists, while the current ratio answers how many times over the obligations are covered.

## Capitalization and leverage ratios — how is it financed?

**Total capitalization** means long-term debt plus preferred stock plus common equity — the permanent capital of the business. Current liabilities are excluded.

- **Debt-to-equity ratio = total debt ÷ total shareholder equity.** The higher the ratio, the more leveraged the company and the greater the risk to common shareholders in a downturn. Leverage magnifies both directions: it lifts returns in good years and accelerates losses in bad ones.
- **Bond ratio = long-term debt ÷ total capitalization.** The share of permanent capital supplied by bondholders. A **bond ratio above 50%** is generally considered highly leveraged for an industrial company.
- **Common stock ratio = common equity (including retained earnings) ÷ total capitalization.**
- **Debt service coverage ratio = net operating income ÷ total debt service.** How many times over current earnings cover required principal and interest payments. Below **1.0** means the company is not generating enough to meet its obligations. Lenders and bond analysts anchor on this one.

## Profitability ratios — how well does it convert sales to profit?

- **Net profit margin = net income ÷ net sales.** Cents of profit per dollar of revenue. Margins vary enormously by industry, so compare only within a sector.
- **Return on equity (ROE) = net income (after preferred dividends) ÷ common shareholder equity.** What management earns on the capital supplied by the owners. The most-cited single measure of managerial effectiveness — but note that ROE can be inflated by piling on debt, which shrinks the equity denominator without improving the underlying business.
- **Return on assets (ROA) = net income ÷ total assets.** How productively the asset base is used, independent of financing mix. Comparing ROE with ROA reveals how much of the return is coming from leverage rather than operations.

## Per-share figures

- **EPS = earnings available to common ÷ shares outstanding.** Earnings available to common is net income **minus preferred dividends** — the most common calculation error on the exam.
- **Basic EPS** uses shares actually outstanding. **Diluted EPS** assumes all convertible securities, warrants, rights, and options are exercised, which increases the share count. **Diluted EPS is therefore always less than or equal to basic EPS**, and it is the more conservative figure an analyst should use.
- **Book value per share = (tangible assets − liabilities − par value of preferred) ÷ common shares outstanding.** A liquidation-flavored estimate of what each share represents in net tangible assets. Intangibles and goodwill are excluded because they may realize nothing in a wind-down.

## Valuation ratios — is the price reasonable?

- **P/E ratio = market price per share ÷ EPS.** The number of dollars investors pay per dollar of annual earnings. **High P/E signals high expected growth** (or an overpriced stock); **low P/E** suggests a value candidate (or a business in trouble). **Growth stocks carry higher P/Es than value stocks** — that is essentially the definition of the style split.
- **PEG ratio = P/E ÷ annual earnings growth rate (in percent).** Normalizes P/E for growth so a fast grower can be compared with a slow one. A PEG near **1.0** is the traditional rough marker of fair value.
- **Price-to-book = market price per share ÷ book value per share.** Below 1.0 means the market values the company at less than its accounting net worth. A staple screen for **value investors**.
- **Dividend yield = annual dividends per share ÷ market price per share.** The income return alone, before any price change. Because price is the denominator, **a falling stock price mechanically raises the yield** — an unusually high yield is often a distress signal, not a bargain.
- **Dividend payout ratio = dividends per share ÷ EPS** (equivalently, common dividends ÷ earnings available to common). The share of profit distributed rather than reinvested. **Mature, stable companies pay out a high percentage; growth companies pay little or nothing** because they reinvest. A payout ratio above **100%** means the company is paying more than it earns, which cannot continue indefinitely.

## Reading the whole picture

No single ratio decides anything. A useful habit for exam scenarios: ask **can it survive the year** (liquidity), **can it survive a bad year** (leverage and coverage), **is the business actually good** (margins, ROE versus ROA), and **am I paying too much for it** (P/E, PEG, price-to-book).`,
  pitfalls: [
    'EPS uses earnings available to COMMON — subtract preferred dividends from net income first. Skipping that step is the most common arithmetic error on this topic.',
    'The quick ratio removes inventory, not receivables. Removing the wrong item is a deliberately baited wrong answer.',
    'Diluted EPS is always less than or equal to basic EPS because the assumed conversions increase the share count. It can never be higher.',
    'A high dividend yield may reflect a collapsing share price rather than generosity — yield rises automatically when price falls.',
    'A high ROE can come from heavy borrowing shrinking the equity denominator; compare ROE against ROA before crediting management.',
    'Total capitalization includes long-term debt, preferred, and common equity but excludes current liabilities — do not use total liabilities in the bond ratio.',
    'Book value per share excludes intangible assets and goodwill; using total assets overstates it.',
  ],
  keyTerms: [
    {
      term: 'Current ratio',
      definition:
        'Current assets divided by current liabilities; the broad measure of whether a company can meet obligations coming due within a year.',
    },
    {
      term: 'Quick ratio (acid test)',
      definition:
        'Current assets less inventory, divided by current liabilities; the conservative liquidity test that excludes the least liquid current asset.',
    },
    {
      term: 'Total capitalization',
      definition:
        'The permanent capital of a firm — long-term debt plus preferred stock plus common equity, including retained earnings. Current liabilities are excluded.',
    },
    {
      term: 'Bond ratio',
      definition:
        'Long-term debt as a percentage of total capitalization; a reading above 50% generally indicates a highly leveraged industrial company.',
    },
    {
      term: 'Debt service coverage ratio',
      definition:
        'Net operating income divided by required principal and interest payments; below 1.0 means earnings do not cover debt obligations.',
    },
    {
      term: 'Return on equity (ROE)',
      definition:
        'Net income after preferred dividends divided by common equity; measures the return management generates on owner capital, but can be inflated by leverage.',
    },
    {
      term: 'Diluted EPS',
      definition:
        'Earnings per share calculated as if all convertible securities, rights, warrants, and options were exercised; always less than or equal to basic EPS.',
    },
    {
      term: 'PEG ratio',
      definition:
        'The P/E ratio divided by the earnings growth rate, allowing valuation comparison across companies growing at different speeds; roughly 1.0 is the traditional fair-value marker.',
    },
  ],
  confusions: [
    {
      dont: 'Current ratio, which includes inventory',
      with: 'Quick ratio, which excludes inventory for a stricter liquidity test',
    },
    {
      dont: 'Working capital, an absolute dollar cushion',
      with: 'The current ratio, a coverage multiple',
    },
    {
      dont: 'ROE, measured against shareholder equity and sensitive to leverage',
      with: 'ROA, measured against total assets and independent of financing mix',
    },
    {
      dont: 'Basic EPS, using shares actually outstanding',
      with: 'Diluted EPS, assuming all convertible securities are exercised',
    },
    {
      dont: 'Dividend yield, income as a percentage of market price',
      with: 'Dividend payout ratio, dividends as a percentage of earnings',
    },
  ],
  formulas: [
    {
      name: 'Current ratio',
      formula: 'Current ratio = Current assets / Current liabilities',
      note: 'Above 1.0 means current obligations are covered; interpret against industry norms.',
    },
    {
      name: 'Quick ratio (acid test)',
      formula: 'Quick ratio = (Current assets − Inventory) / Current liabilities',
      note: 'The conservative liquidity measure; removes inventory only.',
    },
    {
      name: 'Working capital',
      formula: 'Working capital = Current assets − Current liabilities',
      note: 'A dollar amount, not a ratio.',
    },
    {
      name: 'Debt-to-equity ratio',
      formula: 'Debt-to-equity = Total debt / Total shareholder equity',
      note: 'Higher means more leverage and more risk to common shareholders.',
    },
    {
      name: 'Bond ratio',
      formula: 'Bond ratio = Long-term debt / Total capitalization',
      note: 'Total capitalization = long-term debt + preferred stock + common equity. Above 50% is highly leveraged.',
    },
    {
      name: 'Debt service coverage ratio',
      formula: 'DSCR = Net operating income / Total debt service',
      note: 'Below 1.0 means income does not cover required principal and interest.',
    },
    {
      name: 'Net profit margin',
      formula: 'Net profit margin = Net income / Net sales',
      note: 'Compare only within an industry; margin norms differ enormously across sectors.',
    },
    {
      name: 'Return on equity (ROE)',
      formula: 'ROE = (Net income − preferred dividends) / Common shareholder equity',
      note: 'Can be inflated by debt, which shrinks the denominator.',
    },
    {
      name: 'Return on assets (ROA)',
      formula: 'ROA = Net income / Total assets',
      note: 'Measures asset productivity independent of how the firm is financed.',
    },
    {
      name: 'Earnings per share (basic)',
      formula: 'EPS = (Net income − preferred dividends) / Common shares outstanding',
      note: 'Always subtract preferred dividends first to get earnings available to common.',
    },
    {
      name: 'Book value per share',
      formula:
        'Book value per share = (Tangible assets − liabilities − preferred par) / Common shares outstanding',
      note: 'Intangibles and goodwill are excluded.',
    },
    {
      name: 'Price-to-earnings (P/E) ratio',
      formula: 'P/E = Market price per share / EPS',
      note: 'Growth stocks trade at higher P/Es than value stocks.',
    },
    {
      name: 'PEG ratio',
      formula: 'PEG = P/E ratio / Annual earnings growth rate (%)',
      note: 'Roughly 1.0 is the traditional marker of fair value.',
    },
    {
      name: 'Price-to-book ratio',
      formula: 'Price-to-book = Market price per share / Book value per share',
      note: 'Below 1.0 means the market prices the firm below accounting net worth; a value screen.',
    },
    {
      name: 'Dividend yield',
      formula: 'Dividend yield = Annual dividends per share / Market price per share',
      note: 'Rises automatically when the share price falls.',
    },
    {
      name: 'Dividend payout ratio',
      formula: 'Payout ratio = Dividends per share / EPS',
      note: 'High for mature companies, low or zero for growth companies. Above 100% is unsustainable.',
    },
  ],
  workedExamples: [
    {
      title: 'Current ratio and quick ratio from the same balance sheet',
      setup:
        'Acme Manufacturing reports these current items: cash $120,000, marketable securities $80,000, accounts receivable $300,000, and inventory $400,000. Current liabilities are $500,000. Compute the current ratio, the quick ratio, and working capital.',
      steps: [
        'Step 1 — total the current assets: $120,000 + $80,000 + $300,000 + $400,000 = $900,000.',
        'Step 2 — current ratio = current assets ÷ current liabilities = $900,000 ÷ $500,000 = 1.8.',
        'Step 3 — build the quick-ratio numerator by removing inventory, and ONLY inventory: $900,000 − $400,000 = $500,000.',
        'Step 4 — quick ratio = $500,000 ÷ $500,000 = 1.0.',
        'Step 5 — working capital, a dollar amount rather than a ratio: $900,000 − $500,000 = $400,000.',
        'Step 6 — interpret the gap. Inventory is $400,000 of the $900,000 of current assets, roughly 44%. Excluding it drops coverage from 1.8 times to exactly 1.0 times, meaning quick assets barely cover current obligations with no cushion at all. For a manufacturer with slow-moving stock, the 1.0 is the number that matters.',
      ],
      answer:
        'Current ratio 1.8; quick ratio 1.0; working capital $400,000. The company looks comfortably liquid until inventory is stripped out, at which point it has no margin of safety.',
      watchOut:
        'Leaving inventory in the quick ratio, which just reproduces the 1.8 current ratio. The deliberately baited alternative is removing RECEIVABLES instead of inventory: ($900,000 − $300,000) ÷ $500,000 = 1.2, a plausible-looking wrong answer. Receivables stay in; inventory comes out.',
    },
    {
      title: 'Debt-to-equity, and how it differs from the bond ratio',
      setup:
        'Acme reports current liabilities of $500,000, long-term debt of $1,300,000, preferred stock of $200,000, and common equity including retained earnings of $1,000,000. Compute the debt-to-equity ratio and the bond ratio.',
      steps: [
        'Step 1 — total debt for the debt-to-equity ratio means all liabilities: $500,000 + $1,300,000 = $1,800,000.',
        'Step 2 — total shareholder equity is preferred plus common: $200,000 + $1,000,000 = $1,200,000.',
        'Step 3 — debt-to-equity = $1,800,000 ÷ $1,200,000 = 1.5, or 150%. The company is financed with $1.50 of debt for every $1.00 of owner capital.',
        'Step 4 — now the bond ratio, which uses a different denominator. Total capitalization is the PERMANENT capital only: long-term debt + preferred + common = $1,300,000 + $200,000 + $1,000,000 = $2,500,000. Current liabilities are excluded.',
        'Step 5 — bond ratio = long-term debt ÷ total capitalization = $1,300,000 ÷ $2,500,000 = 0.52, or 52%.',
        'Step 6 — interpret. A bond ratio above 50% is generally read as highly leveraged for an industrial company, so both measures point the same way: this balance sheet carries meaningful financial risk, and earnings will be volatile for common shareholders.',
      ],
      answer:
        'Debt-to-equity is 1.5 (150%). The bond ratio is 52%, above the 50% threshold conventionally treated as highly leveraged.',
      watchOut:
        'Using only long-term debt in the debt-to-equity ratio when the question says total debt: $1,300,000 ÷ $1,200,000 = 1.08 understates the leverage substantially. The reverse error is including the $500,000 of current liabilities in total capitalization, which would wrongly give $1,300,000 ÷ $3,000,000 = 43% and hide the leverage entirely.',
    },
    {
      title: 'Times interest earned from an income statement',
      setup:
        'Acme reports net sales of $5,000,000, cost of goods sold of $3,000,000, operating expenses of $1,400,000, interest expense of $150,000, and a 30% tax rate. Compute times interest earned.',
      steps: [
        'Step 1 — gross profit: $5,000,000 − $3,000,000 = $2,000,000.',
        'Step 2 — operating income (EBIT): $2,000,000 − $1,400,000 = $600,000. This is earnings BEFORE interest and taxes, which is the correct numerator.',
        'Step 3 — times interest earned = EBIT ÷ interest expense = $600,000 ÷ $150,000 = 4.0.',
        'Step 4 — interpret: operating earnings cover the interest bill four times over. Earnings could fall 75% before interest could not be paid from operations.',
        'Step 5 — stress it. If the company doubled its borrowing and interest rose to $300,000, TIE = $600,000 ÷ $300,000 = 2.0, and the cushion halves. Coverage moves inversely with the interest bill, so new borrowing erodes it even when operating earnings are unchanged.',
        'Step 6 — carry the statement down for later examples: pre-tax income = $600,000 − $150,000 = $450,000; tax = 30% × $450,000 = $135,000; net income = $450,000 − $135,000 = $315,000.',
      ],
      answer:
        'Times interest earned is 4.0 — operating income of $600,000 covers $150,000 of interest four times over.',
      watchOut:
        'Using net income as the numerator: $315,000 ÷ $150,000 = 2.1, which is a baited wrong answer. Interest is paid out of pre-interest, pre-tax earnings, so it must not be subtracted before measuring coverage of itself. Using pre-tax income ($450,000 ÷ $150,000 = 3.0) is the same mistake in a milder form.',
    },
    {
      title: 'Three margins from one income statement',
      setup:
        'Using the same statement: net sales $5,000,000, COGS $3,000,000, operating expenses $1,400,000, interest $150,000, tax rate 30%, giving net income of $315,000. Compute gross, operating, and net margin.',
      steps: [
        'Step 1 — gross profit = $5,000,000 − $3,000,000 = $2,000,000. Gross margin = $2,000,000 ÷ $5,000,000 = 0.40 = 40%.',
        'Step 2 — operating income = $2,000,000 − $1,400,000 = $600,000. Operating margin = $600,000 ÷ $5,000,000 = 0.12 = 12%.',
        'Step 3 — net income = $315,000 (from pre-tax $450,000 less $135,000 of tax). Net margin = $315,000 ÷ $5,000,000 = 0.063 = 6.3%.',
        'Step 4 — read the ladder. Every dollar of sales keeps 40 cents after production cost, 12 cents after running the business, and 6.3 cents after lenders and the government.',
        'Step 5 — diagnose where margin is lost. The 40% to 12% drop is the $1,400,000 of operating expenses — 28 percentage points, the largest single leak. The 12% to 6.3% drop is interest plus tax.',
        'Step 6 — note what each margin isolates. Gross margin is about pricing power and production cost. Operating margin adds overhead efficiency. Net margin adds the financing and tax structure, which is why net margin alone cannot tell you whether the underlying business is good.',
      ],
      answer:
        'Gross margin 40%, operating margin 12%, net margin 6.3%.',
      watchOut:
        'Dividing by cost of goods sold rather than net sales. Every margin uses SALES as the denominator; $2,000,000 ÷ $3,000,000 = 67% is not a gross margin. The other frequent slip is subtracting interest before computing operating margin — interest is a financing cost, not an operating one.',
    },
    {
      title: 'Return on equity, and decomposing what actually drives it',
      setup:
        'Acme has net income of $315,000, preferred dividends of $15,000, common equity of $1,000,000, preferred stock of $200,000, total assets of $3,000,000, and net sales of $5,000,000. Compute ROE, compare it with ROA, and decompose the result.',
      steps: [
        'Step 1 — earnings available to common: $315,000 − $15,000 = $300,000. Preferred dividends must come out first.',
        'Step 2 — ROE on common equity = $300,000 ÷ $1,000,000 = 0.30 = 30.0%.',
        'Step 3 — ROA = net income ÷ total assets = $315,000 ÷ $3,000,000 = 0.105 = 10.5%.',
        "Step 4 — flag the gap. ROE is nearly three times ROA. That difference is leverage, not operating skill: the asset base earns 10.5%, and borrowing at a lower cost pushes the owners' return up to 30%.",
        'Step 5 — decompose with DuPont, using net income over TOTAL shareholder equity of $200,000 + $1,000,000 = $1,200,000 so the three factors reconcile. Net margin = $315,000 ÷ $5,000,000 = 6.3%. Asset turnover = $5,000,000 ÷ $3,000,000 = 1.667. Equity multiplier = $3,000,000 ÷ $1,200,000 = 2.5.',
        'Step 6 — multiply the three: 0.063 × 1.667 × 2.5 = 0.2625 = 26.25%.',
        'Step 7 — verify directly: $315,000 ÷ $1,200,000 = 26.25%. The decomposition reconciles, so the factors are right.',
        'Step 8 — conclude. A 2.5 times equity multiplier means leverage is doing the heaviest lifting. Strip it out and the business earns a 6.3% margin on 1.67 turns of assets — respectable, but nothing like 30%.',
      ],
      answer:
        'ROE on common equity is 30.0% against an ROA of only 10.5%. DuPont shows the return comes from a 6.3% net margin, 1.667 times asset turnover, and a 2.5 times equity multiplier — leverage is the dominant driver.',
      watchOut:
        'Skipping the preferred dividend subtraction and reporting $315,000 ÷ $1,000,000 = 31.5% as ROE. The judgment error is worse than the arithmetic one, though: crediting management for a 30% ROE when ROA is 10.5% and the equity multiplier is 2.5 mistakes borrowed money for operating skill. Always read ROE next to ROA.',
    },
    {
      title: 'P/E and earnings yield as reciprocals',
      setup:
        'Acme has earnings available to common of $300,000 and 100,000 common shares outstanding. The stock trades at $45.00 and pays an annual dividend of $1.20 per share. Compute EPS, P/E, earnings yield, dividend yield, and the payout ratio.',
      steps: [
        'Step 1 — EPS = earnings available to common ÷ common shares = $300,000 ÷ 100,000 = $3.00.',
        'Step 2 — P/E = market price ÷ EPS = $45.00 ÷ $3.00 = 15.0. Investors pay $15 for each $1 of annual earnings.',
        'Step 3 — earnings yield = EPS ÷ market price = $3.00 ÷ $45.00 = 0.0667 = 6.67%.',
        'Step 4 — confirm the reciprocal relationship: 1 ÷ 15.0 = 0.0667. The two numbers are the same fact stated upside down, which makes each a cross-check on the other.',
        'Step 5 — see the effect of a price move. If the stock rises to $60.00 on unchanged earnings: P/E = $60.00 ÷ $3.00 = 20.0, and earnings yield = $3.00 ÷ $60.00 = 5.00%. A higher P/E always means a lower earnings yield.',
        'Step 6 — separate the dividend measures. Dividend yield = $1.20 ÷ $45.00 = 2.67% (a percentage of PRICE). Payout ratio = $1.20 ÷ $3.00 = 40% (a percentage of EARNINGS). Same $1.20, two entirely different denominators.',
      ],
      answer:
        'EPS $3.00; P/E 15.0; earnings yield 6.67%, exactly 1 ÷ 15. Dividend yield is 2.67% and the payout ratio is 40%.',
      watchOut:
        'Computing earnings yield from the DIVIDEND rather than earnings, which returns the 2.67% dividend yield instead of 6.67%. Earnings yield uses EPS; dividend yield uses dividends per share. And earnings yield divides by price while the payout ratio divides by EPS — swapping those denominators is the standard trap on this pair.',
    },
    {
      title: 'The Gordon constant-growth model and its sensitivity to the growth rate',
      setup:
        'Acme just paid an annual dividend of $1.20 per share. An analyst expects dividends to grow 5% per year forever and uses a required rate of return of 9%. Value the stock, then test what happens if the growth estimate is off by one percentage point in either direction.',
      steps: [
        "Step 1 — the model uses NEXT year's dividend, so first grow the dividend just paid: D1 = $1.20 × (1 + 0.05) = $1.26.",
        'Step 2 — compute the spread in the denominator: required return − growth = 0.09 − 0.05 = 0.04.',
        'Step 3 — substitute into V = D1 ÷ (r − g): V = $1.26 ÷ 0.04 = $31.50.',
        'Step 4 — test g = 6%. D1 = $1.20 × 1.06 = $1.272; denominator = 0.09 − 0.06 = 0.03; V = $1.272 ÷ 0.03 = $42.40.',
        'Step 5 — test g = 4%. D1 = $1.20 × 1.04 = $1.248; denominator = 0.09 − 0.04 = 0.05; V = $1.248 ÷ 0.05 = $24.96.',
        'Step 6 — measure the sensitivity. One point of extra growth raises the value from $31.50 to $42.40, up 34.6%. One point less drops it to $24.96, down 20.8%. A single percentage point in an unobservable forever-assumption swings the answer by a third.',
        'Step 7 — note the limits. As g approaches r the denominator approaches zero and the value explodes toward infinity; if g is greater than or equal to r the model gives a negative or meaningless price and simply cannot be used.',
      ],
      answer:
        'The stock is worth $31.50. Changing the growth assumption to 6% raises that to $42.40; lowering it to 4% cuts it to $24.96 — a range of more than $17 on a $31.50 estimate.',
      watchOut:
        'Putting the dividend just PAID in the numerator instead of growing it one year: $1.20 ÷ 0.04 = $30.00, understating the value by $1.50. The model needs D1, the expected NEXT dividend. If a question hands you D1 directly, do not grow it again — read carefully which dividend was given.',
    },
  ],
};
