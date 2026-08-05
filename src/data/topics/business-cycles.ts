import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'business-cycles',
  title: 'Business Cycles and Economic Indicators',
  weight: '~3%',
  order: 1,
  summary:
    "The economy moves through four repeating phases, and the exam expects you to name the phase from a description, classify an indicator as leading, coincident, or lagging, and know which asset classes and sectors tend to do well in each phase.",
  body: `## Why this topic matters

An investment adviser is judged partly on whether recommendations fit the economic environment. The Series 65 does not ask you to forecast the economy, but it does ask you to **read the signals**: given a set of facts, which phase are we in, which indicator category does this statistic belong to, and what would a prudent adviser expect to happen to bonds, stocks, and specific sectors?

## The four phases of the business cycle

The business cycle is the recurring pattern of growth and decline in real economic output. It is not a fixed-length calendar; phases vary in length and intensity.

### 1. Expansion (recovery)

Real **GDP is rising**, unemployment is falling, corporate profits and consumer spending grow, and inventories are drawn down and then rebuilt. Business confidence and capital spending increase. Interest rates typically drift upward as credit demand rises and the Fed leans against inflation.

### 2. Peak

The high point. Growth has topped out. Classic peak symptoms: **rising inflation**, very low unemployment, wage pressure, stretched capacity, and speculative behavior in asset markets. The peak is only identifiable in hindsight.

### 3. Contraction (recession)

Real GDP falls. Consumer spending and business investment decline, layoffs mount, inventories pile up unsold, and corporate earnings shrink. Central banks usually cut rates. The commonly cited **technical definition of a recession is two consecutive quarters of declining real GDP**. Note the exam nuance: in the United States the official arbiter (a private research group, not the government) uses a broader judgment based on depth, diffusion, and duration across output, income, employment, and sales — but the two-quarter rule is what most exam questions test.

### 4. Trough

The bottom. Decline stops, excess inventory is cleared, and the conditions for recovery are in place. Unemployment is usually still high at the trough because hiring lags the turn.

### Depression

A prolonged, severe contraction. The rule of thumb tested is a decline lasting **at least six consecutive quarters (18 months)** accompanied by a very large drop in real GDP and a spike in unemployment.

## Gross domestic product

**GDP** is the total value of all final goods and services produced within a country in a period. Its four components:

- **Consumption** — household spending, the largest component in the U.S.
- **Investment** — business capital spending, inventory change, residential construction
- **Government spending** — federal, state, and local purchases (transfer payments are excluded)
- **Net exports** — exports minus imports

**Real GDP** is adjusted for inflation; **nominal GDP** is not. Growth comparisons across years must use real GDP. Also distinguish **GDP** (produced inside the borders) from **GNP** (produced by a country's residents and firms wherever located).

## Economic indicators

The single most testable classification on this topic.

| Type | What it tells you | Examples |
| --- | --- | --- |
| **Leading** | Changes *before* the economy turns; used to forecast | Building permits and housing starts, new orders for durable goods, initial unemployment claims, stock prices (S&P 500), money supply (M2), consumer expectations, average weekly manufacturing hours, manufacturers' new orders |
| **Coincident** | Changes *with* the economy; confirms the current phase | Real GDP, industrial production, nonfarm payroll employment, personal income less transfer payments, manufacturing and trade sales |
| **Lagging** | Changes *after* the turn; confirms a trend already underway | Average duration of unemployment, corporate profits, prime rate, business loans outstanding, ratio of inventories to sales, labor cost per unit of output, consumer credit relative to income |

Two memory hooks worth carrying into the exam: **stock prices are leading, corporate profits are lagging** (the market anticipates earnings), and **initial claims are leading while duration of unemployment is lagging**.

## Types of unemployment

- **Frictional** — normal, short-term churn: people between jobs or entering the workforce. Exists even in a healthy economy.
- **Structural** — a mismatch between worker skills or location and available jobs, usually from technological or permanent industry change. The most persistent type.
- **Cyclical** — caused by a downturn in the business cycle. This is the type policy makers try to fix with stimulus.
- **Seasonal** — predictable, calendar-driven (holiday retail, agriculture, resort work).

## Price indexes

- **CPI (Consumer Price Index)** measures the price change of a basket of consumer goods and services. It is the headline inflation gauge and the basis for cost-of-living adjustments and for converting nominal figures to real ones.
- **PPI (Producer Price Index)** measures prices received by domestic producers at the wholesale level. Because input costs pass through to retail, PPI is often seen as an early warning for CPI.
- **Core** versions of each strip out food and energy, which are volatile.

## Business cycle effects on asset classes

- **Recession / trough:** interest rates fall, so **existing bond prices rise**. Long-duration high-quality bonds and Treasuries do relatively well. Defensive stocks hold up best.
- **Expansion:** corporate earnings grow; **equities generally outperform bonds**. Cyclical and growth names lead.
- **Peak / rising inflation:** rate increases hurt bonds; real assets, commodities, and inflation-protected securities are favored. Long-maturity bonds are the most exposed.

### Sector rotation

- **Defensive (non-cyclical)** sectors — consumer staples, utilities, health care, tobacco — hold demand through downturns. Favored in contraction.
- **Cyclical** sectors — autos, durable goods, heavy machinery, airlines, luxury retail, construction — swing with the cycle. Favored in early expansion.
- **Counter-cyclical** businesses can improve when the economy sours (discount retail, some repair services).

The retention point: cyclical means **discretionary and postponable** purchases. If a consumer can wait another year to buy it, the industry is cyclical.`,
  pitfalls: [
    "Do not confuse a recession with a depression — the tested rule of thumb is two consecutive quarters of declining real GDP for a recession versus roughly six consecutive quarters for a depression.",
    'Stock prices are a LEADING indicator but corporate profits are a LAGGING indicator; exam questions deliberately pair these to see if you memorized the list or just guessed.',
    "Initial unemployment claims lead the cycle, but the average DURATION of unemployment lags it. Read the exact wording of the indicator before answering.",
    'Government transfer payments (Social Security, unemployment benefits) are NOT counted in the government spending component of GDP because no good or service is produced.',
    'Only real GDP is valid for comparing growth across periods; a question describing rising nominal GDP with higher inflation may actually describe a shrinking economy.',
    "Unemployment stays high at the trough and often into early expansion — a question stating that unemployment is still rising does not automatically mean the economy is still contracting.",
  ],
  keyTerms: [
    {
      term: 'Business cycle',
      definition:
        'The recurring pattern of expansion, peak, contraction, and trough in real economic output. Phases vary in length and are identified definitively only after the fact.',
    },
    {
      term: 'Gross domestic product (GDP)',
      definition:
        "The total market value of final goods and services produced within a country's borders in a given period; components are consumption, investment, government spending, and net exports.",
    },
    {
      term: 'Leading indicator',
      definition:
        'A statistic that tends to change before the overall economy does, used to anticipate turning points — for example building permits, new durable goods orders, initial jobless claims, and stock prices.',
    },
    {
      term: 'Coincident indicator',
      definition:
        'A statistic that moves in step with the economy and confirms the phase currently underway — for example industrial production, nonfarm payrolls, and personal income.',
    },
    {
      term: 'Lagging indicator',
      definition:
        'A statistic that changes after the economy has turned, confirming a trend — for example corporate profits, the prime rate, and the average duration of unemployment.',
    },
    {
      term: 'Structural unemployment',
      definition:
        'Joblessness caused by a mismatch between available skills or locations and available work, typically from technological or permanent industry change; the most persistent type.',
    },
    {
      term: 'Consumer Price Index (CPI)',
      definition:
        'A measure of the average price change of a basket of consumer goods and services; the standard inflation gauge and the basis for cost-of-living adjustments.',
    },
    {
      term: 'Sector rotation',
      definition:
        'Shifting portfolio emphasis among industry groups based on the expected phase of the business cycle — defensive sectors into a downturn, cyclical sectors into a recovery.',
    },
  ],
  confusions: [
    {
      dont: 'Leading indicators (building permits, initial claims, stock prices) — predict the turn',
      with: 'Lagging indicators (corporate profits, prime rate, duration of unemployment) — confirm the turn',
    },
    {
      dont: 'Real GDP, which is inflation-adjusted and used for growth comparisons',
      with: 'Nominal GDP, which is measured in current dollars and can rise purely on inflation',
    },
    {
      dont: 'Cyclical unemployment, caused by a downturn and reversible with stimulus',
      with: 'Structural unemployment, caused by a skills or location mismatch and not fixed by stimulus',
    },
    {
      dont: 'Defensive sectors such as utilities, staples, and health care',
      with: 'Cyclical sectors such as autos, machinery, airlines, and construction',
    },
    {
      dont: 'CPI, which measures retail prices paid by consumers',
      with: 'PPI, which measures wholesale prices received by producers and often moves first',
    },
  ],
};
