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
};
