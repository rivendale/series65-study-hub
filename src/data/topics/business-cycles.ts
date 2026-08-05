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

The deeper reason is suitability. A recommendation is not right or wrong in the abstract; it is right or wrong for a client at a moment in time.

## Why economies cycle at all

Cycles are not arbitrary. Three self-reinforcing mechanisms keep producing them, which is why economies overshoot in both directions rather than settling at a comfortable middle.

**Inventories overshoot.** Firms cannot observe demand directly; they infer it from orders. When orders slow, warehouses fill before anyone notices, so production is cut harder than final demand actually fell. When the backlog clears, firms restock faster than demand recovered. The inventory-to-sales ratio is the fingerprint of this mechanism.

**Capital spending is lumpy.** A factory or a fleet is bought once and used for years. Firms all read the same optimistic signals at once, all commit at once, then all stop at once because capacity has been installed for a decade.

**Credit amplifies.** Lending standards loosen when collateral values rise and tighten when they fall, so credit is most available exactly when it is least needed.

## The four phases of the business cycle

The business cycle is the recurring pattern of growth and decline in real economic output. It is not a fixed-length calendar; phases vary in length and intensity.

### 1. Expansion (recovery)

Real **GDP is rising**, unemployment is falling, corporate profits and consumer spending grow, and inventories are drawn down and then rebuilt. Business confidence and capital spending increase. Interest rates typically drift upward as credit demand rises and the Fed leans against inflation.

The employment signature is distinctive: hours worked rise before headcount does, because a manager unsure the recovery is real adds overtime before adding people. Inflation is **subdued early and creeping late** — with idle labor and plant at first, extra demand produces extra output rather than higher prices.

### 2. Peak

The high point. Growth has topped out. Classic peak symptoms: **rising inflation**, very low unemployment, wage pressure, stretched capacity, and speculative behavior in asset markets. The peak is only identifiable in hindsight.

The tell is that additional demand can no longer be met with additional output: backlogs lengthen, delivery times stretch, and firms raise prices instead of volumes. The central bank is usually already tightening, which sets up the next phase.

### 3. Contraction (recession)

Real GDP falls. Consumer spending and business investment decline, layoffs mount, inventories pile up unsold, and corporate earnings shrink. Central banks usually cut rates. The commonly cited **technical definition of a recession is two consecutive quarters of declining real GDP**. Note the exam nuance: in the United States the official arbiter (a private research group, not the government) uses a broader judgment based on depth, diffusion, and duration across output, income, employment, and sales — but the two-quarter rule is what most exam questions test.

The broader definition exists because the two-quarter rule can mislead in both directions. Two negative quarters caused entirely by a strike or a hurricane, with employment and income still rising, is not a recession in any meaningful sense. A period of shallow but universal decline — every sector, every region, employment and income both falling — is one, even if a single quarter squeaks out a positive print. Depth, **diffusion**, and duration is the checklist.

### 4. Trough

The bottom. Decline stops, excess inventory is cleared, and the conditions for recovery are in place. Unemployment is usually still high at the trough because hiring lags the turn.

This is the most misread phase. At the trough nearly every headline still looks terrible — unemployment near its worst, profits at their lowest. What has changed is the **rate of change**: things are getting worse more slowly, or have stopped getting worse. Stock markets have historically bottomed before the economy did, which is exactly why stock prices are a leading indicator and why waiting for confirmation is expensive.

### Depression

A prolonged, severe contraction. The rule of thumb tested is a decline lasting **at least six consecutive quarters (18 months)** accompanied by a very large drop in real GDP and a spike in unemployment. The distinction from a recession is not a different mechanism but a difference of degree that becomes a difference in kind: in a depression, the normal self-correcting forces (falling rates, cleared inventories, cheap labor) fail to restart growth, usually because credit is impaired or prices are falling.

### Scenario: naming the phase from a data release

An adviser reviews a batch of releases. Real GDP grew 0.4% in the most recent quarter, down from 2.9% two quarters earlier. The unemployment rate is 3.6%, near a multi-decade low. Average hourly earnings are up 5.1% year over year. Capacity utilization is 82%. Core CPI has accelerated from 2.4% to 4.1% over four quarters. Building permits have fallen in three consecutive months.

Read it in order. Growth is positive but decelerating sharply — not a contraction. Unemployment near a cycle low with 5.1% wage growth and 82% utilization is a tight-capacity story. Accelerating core inflation confirms that added demand is now producing prices, not output. And permits, a leading indicator, have already rolled over. This is a **peak**, with leading indicators pointing toward contraction. The suitability implication: shorten bond duration rather than extend it, tilt equities defensive, and treat the low unemployment rate as a warning rather than a comfort.

## Gross domestic product

**GDP** is the total value of all final goods and services produced within a country in a period. Its four components:

- **Consumption** — household spending, the largest component in the U.S.
- **Investment** — business capital spending, inventory change, residential construction
- **Government spending** — federal, state, and local purchases (transfer payments are excluded)
- **Net exports** — exports minus imports

Two exclusions carry the logic, and both are about avoiding double counting. **Transfer payments** — Social Security, unemployment benefits — are excluded because no good or service is produced when money moves from one pocket to another; the spending is counted later, in consumption, when the recipient buys something. **Imports are subtracted** because an imported machine already appeared inside investment and an imported television already appeared inside consumption; the subtraction removes what was not produced domestically. Net exports are a bookkeeping correction, not a penalty for buying foreign goods. For the same reason **only final goods count**: the steel sold to an automaker is already inside the price of the car.

**Real GDP** is adjusted for inflation; **nominal GDP** is not. Growth comparisons across years must use real GDP. Also distinguish **GDP** (produced inside the borders) from **GNP** (produced by a country's residents and firms wherever located).

### The deflator

The bridge between the two is the **GDP deflator**, an index set to 100 in a base year:

**Real GDP = nominal GDP ÷ (deflator ÷ 100)**

The deflator differs from CPI in two ways. It covers **everything produced domestically**, including business equipment and government services, not just a consumer basket. And because it covers domestic production it **excludes imports**, while CPI, which tracks what consumers actually buy, includes them. A jump in imported energy prices therefore lifts CPI immediately but reaches the deflator only indirectly.

A headline reporting record nominal GDP growth can therefore describe an economy producing exactly the same volume of goods at higher prices. The first worked example carries that case through to zero real growth on 14.29% nominal growth.

## Economic indicators

The single most testable classification on this topic.

| Type | What it tells you | Examples |
| --- | --- | --- |
| **Leading** | Changes *before* the economy turns; used to forecast | Building permits and housing starts, new orders for durable goods, initial unemployment claims, stock prices (S&P 500), money supply (M2), consumer expectations, average weekly manufacturing hours, manufacturers' new orders |
| **Coincident** | Changes *with* the economy; confirms the current phase | Real GDP, industrial production, nonfarm payroll employment, personal income less transfer payments, manufacturing and trade sales |
| **Lagging** | Changes *after* the turn; confirms a trend already underway | Average duration of unemployment, corporate profits, prime rate, business loans outstanding, ratio of inventories to sales, labor cost per unit of output, consumer credit relative to income |

Two memory hooks worth carrying into the exam: **stock prices are leading, corporate profits are lagging** (the market anticipates earnings), and **initial claims are leading while duration of unemployment is lagging**.

### Classifying an indicator you have never seen

Memorizing the list works until the exam names something that is not on it. Then reason from the mechanism by asking one question: **where does this statistic sit relative to the act of production?**

- **Before production** — a decision, commitment, order, permit, expectation, or a price set in a forward-looking market. Output follows later, so this is **leading**. A building permit is a promise to build months from now; a new order is a promise to produce; a stock price is a bet on earnings not yet reported; an initial claim is the first observable moment of a layoff.
- **The production itself** — goods actually made, hours actually worked, income actually earned, sales actually rung up. This is **coincident**. Industrial production and nonfarm payrolls are output measured as it happens.
- **After production** — a consequence, a settled result, or an accumulated total knowable only once the activity finished. This is **lagging**. Corporate profits report a quarter already over; duration of unemployment can only lengthen after people have been jobless a while; consumer credit outstanding is an accumulated stock.

Apply it to unfamiliar cases. *Heavy truck orders* — an order, so leading. *Help-wanted postings* — an intent to hire, so leading. *Commercial and industrial loans outstanding* — a balance that grows after firms have already expanded, so lagging. *Unit labor cost* — computed from wages and productivity already realized, so lagging.

Notice the trap this framework exposes: **employment appears in all three categories** depending on exactly which employment statistic is named. Initial claims lead, payrolls coincide, and average duration of unemployment lags. Read the wording, not the topic.

## Types of unemployment

- **Frictional** — normal, short-term churn: people between jobs or entering the workforce. Exists even in a healthy economy.
- **Structural** — a mismatch between worker skills or location and available jobs, usually from technological or permanent industry change. The most persistent type.
- **Cyclical** — caused by a downturn in the business cycle. This is the type policy makers try to fix with stimulus.
- **Seasonal** — predictable, calendar-driven (holiday retail, agriculture, resort work).

### What full employment actually means

**Full employment is not zero unemployment.** It is the level at which cyclical unemployment has been eliminated, leaving only frictional and structural joblessness — often called the natural rate. There will always be people between jobs and people whose skills no longer match available work, and no amount of demand stimulus removes them.

This defines the boundary of what policy can accomplish. Stimulus works on cyclical unemployment because the jobs are missing, not the workers. It does not work on structural unemployment, where the demand exists but the matching skills do not; that requires retraining, relocation, or time. Pushing demand past full employment does not create jobs, it creates **inflation** — the mechanical link between the peak phase and rising prices.

## Price indexes

- **CPI (Consumer Price Index)** measures the price change of a basket of consumer goods and services. It is the headline inflation gauge and the basis for cost-of-living adjustments and for converting nominal figures to real ones.
- **PPI (Producer Price Index)** measures prices received by domestic producers at the wholesale level. Because input costs pass through to retail, PPI is often seen as an early warning for CPI.
- **Core** versions of each strip out food and energy, which are volatile.

Core exists for signal extraction, not denial. A frost or an oil disruption moves headline inflation for a month and then reverses; policy that chased it would tighten and loosen for no reason. Core is the better estimate of the persistent trend and the worse estimate of what a household actually experiences, since households do buy food and fuel. Quote headline to a client planning a budget; watch core when anticipating central bank behavior.

## Stagflation and why the standard playbook fails

**Stagflation** is stagnant or falling output and high unemployment occurring together with high inflation. It matters on this exam because it breaks the ordinary relationship the rest of the topic depends on.

Normally inflation and unemployment trade off. Weak demand means high unemployment and falling inflation, so stimulus treats both. Strong demand means low unemployment and rising inflation, so restraint treats both. One lever, both problems.

Stagflation originates on the **supply side**: a shock raises the cost of producing everything at once — energy, a broad input disruption, a collapse in productivity. Output falls *because* costs rose, so prices and unemployment rise together and the levers now point in opposite directions. Easing to fix unemployment adds demand to an economy that cannot produce more, worsening inflation. Tightening to fix inflation deepens the output decline. No demand-side policy fixes both, which is why the historical resolution has been to accept a recession to break inflation, or to wait for supply to recover.

## Business cycle effects on asset classes

- **Recession / trough:** interest rates fall, so **existing bond prices rise**. Long-duration high-quality bonds and Treasuries do relatively well. Defensive stocks hold up best.
- **Expansion:** corporate earnings grow; **equities generally outperform bonds**. Cyclical and growth names lead.
- **Peak / rising inflation:** rate increases hurt bonds; real assets, commodities, and inflation-protected securities are favored. Long-maturity bonds are the most exposed.

Say this honestly to a client: these are **tendencies observed across past cycles, not rules**. Asset prices respond to surprise relative to expectations, not to the level of activity, so a recession anticipated a year in advance may already be in prices and the "recession trade" earns nothing. The exam tests the textbook tendency; a real portfolio should treat it as a prior, not a forecast.

### Sector rotation

- **Defensive (non-cyclical)** sectors — consumer staples, utilities, health care, tobacco — hold demand through downturns. Favored in contraction.
- **Cyclical** sectors — autos, durable goods, heavy machinery, airlines, luxury retail, construction — swing with the cycle. Favored in early expansion.
- **Counter-cyclical** businesses can improve when the economy sours (discount retail, some repair services).

The retention point: cyclical means **discretionary and postponable** purchases. If a consumer can wait another year to buy it, the industry is cyclical.

Test the rule at its edges. Health care is defensive because nobody postpones chemotherapy — but elective cosmetic procedures in the same sector behave cyclically. Utilities are defensive because households keep the lights on in any economy — but utilities are heavily indebted, so a sharp rise in rates can hurt them precisely when their defensive reputation is supposed to help. Sector labels describe demand elasticity; they do not override balance-sheet sensitivity to rates.

### Scenario: the client who wants to wait for the all-clear

A client holding 70% cash says she will re-enter equities "once the data confirm the recovery." The current readings: unemployment 8.4% and still rising, corporate profits down 22% year over year, average duration of unemployment at 27 weeks and lengthening. Against that, initial jobless claims have fallen for four straight months, building permits are up 11% from their low, and the S&P 500 is 18% above its low.

Sort the six statistics by category. Unemployment level, profits, and duration of unemployment are all **lagging** — they are supposed to look worst at and after the trough, so they cannot confirm anything about the future. Claims, permits, and stock prices are all **leading**, and all three have already turned. The evidence says a trough has probably passed. The data she is waiting on are precisely the data that will not improve until the recovery is well underway, by which time the leading indicators that turned first will have priced much of it. Her stated rule guarantees she buys late.

## The limits of forecasting

**Indicators are revised.** Initial GDP and payroll estimates are frequently restated, sometimes enough to change the sign, so a decision made on a first print may rest on a number that no longer exists.

**Leading indicators give false signals.** They are probabilistic, and the lead time between signal and turn has ranged from a few months to well over a year. A signal right about direction but a year early is, inside a portfolio, indistinguishable from a wrong one.

**Turning points are dated in hindsight.** The official designation of a peak or trough typically arrives many months after the fact. No one rings a bell.

The conclusion is not paralysis but humility about position sizing: use the cycle to set a tilt inside a policy allocation, not to justify an all-or-nothing bet.`,
  pitfalls: [
    "Do not confuse a recession with a depression — the tested rule of thumb is two consecutive quarters of declining real GDP for a recession versus roughly six consecutive quarters for a depression.",
    'Stock prices are a LEADING indicator but corporate profits are a LAGGING indicator; exam questions deliberately pair these to see if you memorized the list or just guessed.',
    "Initial unemployment claims lead the cycle, but the average DURATION of unemployment lags it. Read the exact wording of the indicator before answering.",
    'Government transfer payments (Social Security, unemployment benefits) are NOT counted in the government spending component of GDP because no good or service is produced.',
    'Only real GDP is valid for comparing growth across periods; a question describing rising nominal GDP with higher inflation may actually describe a shrinking economy.',
    "Unemployment stays high at the trough and often into early expansion — a question stating that unemployment is still rising does not automatically mean the economy is still contracting.",
    "Full employment is not zero unemployment; it is the level at which cyclical unemployment is gone and only frictional and structural joblessness remain.",
    "Imports are subtracted in GDP to remove goods already counted inside consumption or investment, not as a penalty on trade. Adding imports instead of subtracting them roughly doubles the error.",
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
      term: 'GDP deflator',
      definition:
        "A price index covering all domestically produced output, used to convert nominal GDP into real GDP. Unlike CPI it excludes imports and is not limited to a consumer basket.",
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
      term: 'Full employment',
      definition:
        "The level of employment at which cyclical unemployment has been eliminated and only frictional and structural unemployment remain; pushing demand beyond it produces inflation rather than jobs.",
    },
    {
      term: 'Consumer Price Index (CPI)',
      definition:
        'A measure of the average price change of a basket of consumer goods and services; the standard inflation gauge and the basis for cost-of-living adjustments.',
    },
    {
      term: 'Stagflation',
      definition:
        "Stagnant output and high unemployment occurring alongside high inflation, usually from a supply shock; it defeats demand-side policy because easing worsens inflation and tightening worsens unemployment.",
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
      dont: 'CPI, which measures retail prices paid by consumers and includes imports',
      with: 'PPI, which measures wholesale prices received by producers and often moves first',
    },
    {
      dont: 'The GDP deflator, which prices all domestic output and excludes imports',
      with: 'CPI, which prices a fixed consumer basket and does include imported goods',
    },
  ],
  workedExamples: [
    {
      title: 'Real GDP from nominal GDP and the deflator',
      setup:
        "Nominal GDP was $21.0 trillion in Year 1 with a GDP deflator of 105, and $24.0 trillion in Year 2 with a deflator of 120 (base year = 100). Did the economy actually grow?",
      steps: [
        "Write the relationship: Real GDP = nominal GDP / (deflator / 100). The deflator is an index, so divide it by 100 before using it.",
        "Year 1: deflator 105 / 100 = 1.05. Real GDP = $21.0 trillion / 1.05 = $20.0 trillion.",
        "Year 2: deflator 120 / 100 = 1.20. Real GDP = $24.0 trillion / 1.20 = $20.0 trillion.",
        "Nominal growth = ($24.0 − $21.0) / $21.0 = $3.0 / $21.0 = 0.142857 = 14.29%.",
        "Real growth = ($20.0 − $20.0) / $20.0 = 0 / 20.0 = 0.00%.",
        "Cross-check against the price level: the deflator itself rose 120 / 105 − 1 = 0.142857 = 14.29%. Prices rose exactly as fast as nominal output, so quantity was unchanged.",
      ],
      answer:
        "Real GDP was $20.0 trillion in both years — real growth of 0.00%, despite nominal growth of 14.29%. The entire nominal increase was price, not output.",
      watchOut:
        "Reading the 14.29% nominal figure as growth reverses the investment conclusion. It describes an economy with zero real growth and 14.29% inflation, which argues for shortening duration and favoring real assets, not for a pro-cyclical equity tilt. Also do not divide by 105 instead of 1.05; that yields $0.2 trillion, an answer two orders of magnitude wrong.",
    },
    {
      title: 'Percentage change in CPI between two readings',
      setup:
        "CPI stood at 250.0 two years ago, 262.5 one year ago, and 270.375 today. Compute each year's inflation rate and the two-year cumulative change, then say whether the most recent year shows inflation, disinflation, or deflation.",
      steps: [
        "Inflation rate = (new index − old index) / old index. Always divide by the EARLIER reading.",
        "Year 1: (262.5 − 250.0) / 250.0 = 12.5 / 250.0 = 0.0500 = 5.00%.",
        "Year 2: (270.375 − 262.5) / 262.5 = 7.875 / 262.5 = 0.0300 = 3.00%.",
        "Two-year cumulative: (270.375 − 250.0) / 250.0 = 20.375 / 250.0 = 0.0815 = 8.15%.",
        "Confirm by compounding rather than adding: 1.05 × 1.03 = 1.0815, i.e. 8.15%. Adding 5% + 3% = 8% misses the 0.15 percentage point cross term.",
        "Classify the second year: the rate of increase fell from 5.00% to 3.00%, but the index itself rose from 262.5 to 270.375. Prices are still going up, just more slowly.",
      ],
      answer:
        "Inflation was 5.00% then 3.00%, for a cumulative 8.15% rise in the price level. The second year is disinflation, not deflation.",
      watchOut:
        "Calling a drop from 5% to 3% deflation is the classic error. Deflation requires the index itself to fall — a reading below 262.5. A second common slip is dividing by the newer index: 12.5 / 262.5 = 4.76%, which understates the first year's inflation by roughly a quarter of a percentage point.",
    },
    {
      title: 'Building GDP from its components',
      setup:
        "For one year an economy reports: consumption $16.8 trillion; gross private investment $4.2 trillion (including inventory change); government purchases of goods and services $4.4 trillion; government transfer payments $3.1 trillion; exports $3.0 trillion; imports $3.9 trillion. Compute GDP.",
      steps: [
        "Write the identity: GDP = C + I + G + Net Exports, where Net Exports = exports − imports.",
        "Decide what G includes. G is purchases of goods and services only. The $3.1 trillion of transfer payments is excluded — no output is produced when money changes hands, and the recipient's later spending is already inside C. So G = $4.4 trillion.",
        "Net exports = $3.0 trillion − $3.9 trillion = −$0.9 trillion. Imports are subtracted because those goods already sit inside C and I but were not produced domestically.",
        "Add: $16.8 + $4.2 = $21.0 trillion.",
        "$21.0 + $4.4 = $25.4 trillion.",
        "$25.4 + (−$0.9) = $24.5 trillion.",
      ],
      answer:
        "GDP is $24.5 trillion. The economy also runs a $0.9 trillion deficit in goods and services trade, which in the balance of payments is matched by a net inflow of foreign capital.",
      watchOut:
        "Two errors, each with a signature wrong number. Including the $3.1 trillion of transfer payments in G produces $27.6 trillion. Adding imports instead of subtracting them produces $32.3 trillion — an error of $7.8 trillion, twice the import figure, because you both failed to remove it and added it again.",
    },
    {
      title: 'Two-year real growth from nominal growth and inflation',
      setup:
        "Nominal GDP grew 7.12% in Year 1 and 4.55% in Year 2. Inflation was 4.00% in Year 1 and 2.00% in Year 2. What was the cumulative REAL growth over the two years?",
      steps: [
        "Use the exact relationship, not subtraction: 1 + real = (1 + nominal) / (1 + inflation).",
        "Year 1 real: 1.0712 / 1.04 = 1.0300, so real growth was 3.00%.",
        "Year 2 real: 1.0455 / 1.02 = 1.0250, so real growth was 2.50%.",
        "Chain the two years multiplicatively — growth rates compound, they do not add: 1.0300 × 1.0250 = 1.05575.",
        "Cumulative real growth = 1.05575 − 1 = 0.05575 = 5.575%.",
        "Cross-check from the top down. Cumulative nominal = 1.0712 × 1.0455 = 1.1199396, i.e. 11.994%. Cumulative inflation = 1.04 × 1.02 = 1.0608, i.e. 6.08%. Then 1.1199396 / 1.0608 = 1.05575 — the same 5.575%.",
      ],
      answer:
        "Cumulative real growth over the two years is 5.575%, against cumulative nominal growth of 11.994% and cumulative inflation of 6.08%.",
      watchOut:
        "Subtracting first gives per-year real growth of 7.12 − 4.00 = 3.12% and 4.55 − 2.00 = 2.55%; compounding those gives 5.750%, overstating real growth by 0.175 percentage points, and simply adding them gives 5.67%. The subtraction shortcut overstates real growth whenever nominal growth exceeds inflation, and the overstatement widens as inflation rises.",
    },
  ],
};
