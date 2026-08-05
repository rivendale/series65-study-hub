import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'monetary-fiscal-policy',
  title: 'Monetary and Fiscal Policy',
  weight: '~3%',
  order: 2,
  summary:
    'Monetary policy is the central bank acting on money and credit; fiscal policy is Congress acting on taxes and spending. Expect questions that name a tool, ask who controls it, and ask what happens to rates, the money supply, and the currency.',
  body: `## Two levers, two owners

The single most common trap on this topic is attribution. **Monetary policy belongs to the Federal Reserve** (an independent central bank). **Fiscal policy belongs to Congress and the President** (taxation and government spending). If a question describes a change in the tax code or an infrastructure spending bill, it is fiscal, no matter how much it looks like economic stimulus.

The separation is deliberate. Monetary policy is delegated to unelected officials with long terms because the politically attractive choice — cheap money now — produces inflation later, after the next election. Fiscal policy stays with elected officials because taxing and spending decide who bears costs and who receives benefits, a question of legitimacy rather than technique. That division explains why the Fed can move in a day and Congress takes a year.

## The Federal Reserve

### Structure

The Fed is made up of a **Board of Governors** (seven members, appointed by the President and confirmed by the Senate, serving staggered 14-year terms) and **12 regional Federal Reserve Banks**. The **Federal Open Market Committee (FOMC)** — the 7 governors plus 5 of the 12 regional bank presidents, with the New York president always voting — sets the target for the federal funds rate and directs open market operations.

The long staggered terms are the insulation mechanism: no single President can replace the Board within one term. New York votes permanently because its Reserve Bank operates the trading desk that executes open market operations; the other four seats rotate among the remaining eleven.

### Mandate

The Fed operates under a **dual mandate**: maximum sustainable employment and stable prices. It also supervises banks and works to keep the payment system sound. Those two goals can conflict, which is exactly what makes policy decisions interesting: fighting inflation usually means slowing growth and accepting more unemployment.

The conflict is not symmetric. Price stability is the goal the Fed can actually deliver over the long run, because inflation is ultimately monetary. Maximum employment is bounded by the labor force, its skills, and productivity — real factors a central bank cannot manufacture. Because full employment already excludes frictional and structural joblessness, stimulus pushed past that point produces inflation rather than jobs.

## The tools of monetary policy

### 1. Reserve requirements

The fraction of deposits a bank must hold rather than lend. **Lowering** the requirement frees money to lend and is **expansionary**; **raising** it is contractionary. This is the **most powerful and most blunt** tool, which is why it is used rarely — a small change ripples through every bank at once.

One currency note: since 2020 the Fed has set reserve requirement ratios at **zero**, so the tool is dormant in practice and the Fed steers rates through administered rates instead. The exam still tests the classic mechanics, so learn both the textbook relationship and the fact that it is not the operating lever today.

### 2. The discount rate

The rate the Fed charges banks that borrow directly from it at the discount window. Cutting it is expansionary; raising it is contractionary. Its practical importance today is mostly **signaling**: it tells markets which direction the Fed leans. Note that the discount rate is **set by the Fed**, while the **federal funds rate** is what banks charge each other overnight and is a market rate the Fed *targets* rather than dictates.

The discount rate normally sits **above** the fed funds target, which is intentional. If borrowing from the Fed were the cheapest option, banks would stop lending to each other and the interbank market would disappear. Placing the window above the market makes it a backstop rather than a first stop.

### 3. Open market operations

The Fed buying or selling **U.S. government securities** in the secondary market through the FOMC. This is the **most frequently used** tool because it is precise and reversible.

- Fed **buys** securities → pays dealers → **reserves and money supply increase** → rates fall → **easy money**
- Fed **sells** securities → drains cash from the system → **money supply decreases** → rates rise → **tight money**

The direction confuses people because "buying" feels like taking. Track the cash instead of the paper: when the Fed buys, cash leaves the Fed and enters the banking system. Cash in, money supply up, rates down. That rule never fails.

### 4. Interest on reserve balances

The Fed pays interest on the reserves banks hold with it. That rate sets a floor under short-term rates: a bank will not lend to another bank for less than it can earn risk-free at the Fed. Raising it pulls market rates up; lowering it lets them fall. In the modern framework this, together with open market operations, does most of the work.

A companion **overnight reverse repurchase facility** extends the same floor to money market funds and other lenders that cannot hold reserves at the Fed. Together these administered rates form a floor system in which market rates settle near the rate the Fed pays, without the Fed buying or selling anything.

## The transmission mechanism

A tool is only useful if the effect reaches the real economy. The chain runs in five links, and knowing it lets you answer questions the memorized tool list does not cover.

1. **Reserves to the overnight rate.** More reserves, or a lower administered rate, pushes the fed funds rate down toward the target.
2. **The overnight rate to other short rates.** Prime, broker call, commercial paper, and floating-rate loans are priced off the overnight rate and follow within days.
3. **Short rates to long rates and credit conditions.** Long yields follow the expected *path* of future short rates, not one meeting's move. Meanwhile banks widen or tighten lending standards, which decides whether cheaper credit is actually available.
4. **Credit to spending.** Cheaper borrowing pulls forward interest-sensitive purchases — housing, autos, capital equipment — and higher asset prices make households feel wealthier.
5. **Spending to output and inflation.** With slack, extra spending becomes extra output. Without slack, it becomes higher prices.

Two caveats. The chain works with **long and variable lags**, conventionally several quarters to two years from action to peak effect, so policy that looks correct today may be wrong by the time it lands. And link 3 can break: if banks will not lend or borrowers will not borrow, added reserves pile up and do nothing — the reason easing is described as "pushing on a string."

### Scenario: tracing an open market purchase to the shop floor

The desk buys $8 million of Treasuries from a bank, lifting that bank's excess reserves from $10 million to $18 million and its share of system lending capacity by $80 million. (The third worked example carries that arithmetic through.) The point here is what happens next.

Awash in reserves the bank lends into the fed funds market at a lower rate; commercial paper, broker call and prime follow within days; a manufacturer that shelved a $6 million production line when financing cost 7% approves it at 5.5%; equipment is ordered, hours are added, and hiring follows a quarter or two later. That is links 1 through 5 of the transmission chain, and it took the better part of a year.

Now find where it stalls. If the manufacturer sees no demand for the output, it will not borrow at 5.5% or at 3%, and the $18 million of excess reserves simply sits at the Fed earning the administered rate. The Fed can create the capacity to lend; it cannot create the willingness to borrow.

## Who sets which rate

| Rate | Set by | Typical position |
| --- | --- | --- |
| **Federal funds rate** | The market, targeted by the FOMC | Lowest of the tested rates |
| **Discount rate** | The Federal Reserve, administratively | Just above the fed funds target |
| **Broker call rate** | Banks, on margin-collateralized loans to broker-dealers | Slightly above fed funds |
| **Prime rate** | Individual commercial banks, moving together | Highest; historically about three points above the fed funds target |

The prime rate is a **lagging** indicator for the same reason it is set by banks rather than the Fed: banks adjust it after they observe funding costs and credit conditions change.

## Easy money versus tight money

| | Easy (expansionary) | Tight (contractionary) |
| --- | --- | --- |
| Fed action | Buys securities, cuts discount rate, lowers reserve requirement | Sells securities, raises discount rate, raises reserve requirement |
| Money supply | Increases | Decreases |
| Interest rates | Fall | Rise |
| Bond prices | Rise | Fall |
| Economy | Stimulated, borrowing and spending up | Slowed, borrowing and spending down |
| Risk | Inflation | Recession, unemployment |
| U.S. dollar | Tends to weaken | Tends to strengthen |

Trace each column rather than memorizing it. **Bond prices** move because a bond is a fixed stream of payments: if newly issued bonds pay more, an old bond must fall in price until its yield matches, and the longer its duration the further it falls. **Equity valuations** move through the discount rate applied to future earnings, so easing lifts multiples and hurts them on the way back, with the largest effect on growth companies whose cash flows sit furthest in the future. **The dollar** moves because capital chases yield: higher U.S. rates attract foreign buyers who must first buy dollars, bidding the currency up.

## The money supply

- **M1** — the most liquid: currency in circulation, demand deposits, other checkable deposits, and savings deposits (savings balances were folded into M1 in 2020).
- **M2** — M1 plus small-denomination time deposits and retail money market fund shares.

The broader the aggregate, the less liquid the components.

Why aggregates matter at all is captured by the **equation of exchange**: money supply × velocity = price level × real output, written **MV = PQ**. Velocity is how often a dollar is spent in a year. If velocity and real output were stable, money growth would pass one-for-one into inflation — the strict monetarist claim. In practice velocity moves, sometimes sharply, which is why money growth and inflation can diverge for years and why central banks stopped targeting the aggregates directly. Carry the identity anyway: it names the four quantities that must reconcile.

## The multiplier effect

Because banks lend out most of what they receive, one dollar of new reserves supports several dollars of deposits. The simple **deposit multiplier is 1 divided by the reserve requirement** — a 10% requirement implies a multiplier of 10. In practice the realized multiplier is smaller because banks hold excess reserves and people hold cash. The exam point is directional: a lower reserve requirement means a larger multiplier and more money creation.

Name the leaks, because a question can ask why observed expansion fell short:

- **Cash drain.** Money held as currency outside a bank cannot be re-lent.
- **Voluntary excess reserves.** A cautious bank holds more than required, which raises the effective reserve ratio and shrinks the multiplier.
- **Weak loan demand.** The multiplier assumes every dollar available is borrowed. In a downturn creditworthy borrowers do not want the money.
- **Capital and liquidity constraints.** A bank short of equity capital cannot expand its balance sheet even with reserves to spare.

The theoretical multiplier is therefore a ceiling, not a forecast.

## Fiscal policy

Fiscal policy works through **taxation** and **government spending**.

- **Expansionary fiscal policy:** cut taxes, increase spending. Boosts demand, tends to increase the deficit.
- **Contractionary fiscal policy:** raise taxes, cut spending. Cools demand.

Distinguish **discretionary** fiscal policy — a new law, deliberately passed — from **automatic stabilizers**, which work without any vote. A progressive income tax collects less when incomes fall; unemployment insurance pays out more when layoffs rise. Both cushion a downturn immediately, with no recognition or legislative lag, which is why economists value them: they are the part of fiscal policy that arrives on time.

Spending and tax changes are not equivalent in force. A dollar of direct government purchase enters demand as a full dollar. A dollar of tax cut enters only to the extent households spend rather than save it, so its first-round effect is smaller — the Keynesian argument for spending over tax cuts when the goal is speed.

### Policy lags

Three lags apply to both levers, and they fall differently.

- **Recognition lag** — the delay before anyone knows the economy has turned, since data arrive late and get revised. Similar for both.
- **Implementation lag** — short for monetary policy, where a committee acts at a scheduled meeting; long for fiscal policy, which needs legislation and then appropriation.
- **Impact lag** — long for monetary policy; often shorter for fiscal policy, since a check spent is demand immediately.

The consequence is that fiscal stimulus frequently arrives after the recession it was meant to fight and monetary tightening frequently bites after inflation has already peaked. Both can be **procyclical by accident**.

### Schools of thought

- **Keynesian** — demand-side. In a downturn, private demand is insufficient, so government should spend and cut taxes to fill the gap; the resulting deficit is acceptable and temporary. Emphasizes the spending multiplier and argues that wages and prices are too sticky for the economy to self-correct quickly.
- **Supply-side** — output-side. Lower marginal tax rates and lighter regulation increase the incentive to work, save, and invest, expanding productive capacity and eventually broadening the tax base. The contested claim is how much revenue the larger base recovers.
- **Monetarist** — money-supply-side. Inflation is fundamentally a monetary phenomenon (read MV = PQ), and steady, predictable growth in the money supply beats discretionary fine-tuning, which arrives with long and variable lags and can destabilize rather than smooth.

### Scenario: one tax cut, three diagnoses

Congress passes a $400 billion cut in marginal income tax rates. Ask each school what happens.

The **Keynesian** looks at demand. Households receive $400 billion; if they spend 75 cents of each dollar, the first round adds $300 billion of demand and later rounds add more — but only if there is slack. At full employment the same stimulus mostly raises prices.

The **supply-sider** looks at incentives. Lower marginal rates raise the after-tax reward for the next hour worked and the next dollar invested, so labor supply and capital formation rise and productive capacity expands. The gain is structural and slow, and larger the higher the starting rates were.

The **monetarist** looks at the financing. The cut changes who holds claims, not how much money exists. If the Fed does not expand the money supply, the deficit is funded by borrowing from the public, which raises rates and displaces private borrowing, leaving nominal spending largely unchanged. If the Fed accommodates by buying the new debt, the money supply rises and the result is inflation.

Same policy, three predictions. The exam tests whose lens is being described, not who is right.

### Deficits and debt

A **budget deficit** is a single-period shortfall of revenue against spending; the **national debt** is the accumulated total of past deficits. Eliminating the deficit does not repay the debt; it only stops the debt from growing.

Sustained deficits can push interest rates up and **crowd out** private borrowing. The mechanism is competition in one market for savings: the Treasury must borrow, it is the most creditworthy borrower there is, and the added demand for loanable funds raises the price of borrowing for everyone else. Marginal corporate projects that penciled out at the old rate get shelved.

Draw the boundary. Crowding out is strongest **at full employment**, when savings are fully employed and the government can only take resources from someone else. It is weakest in a deep recession with idle capacity, when government borrowing may put unused savings to work rather than displace anything. That is why the same deficit is defensible in one phase and damaging in another, and why "deficits raise rates" is a tendency rather than an identity.

## International accounts and currency

- **Balance of payments** records all transactions between a country and the rest of the world: the **current account** (mainly trade in goods and services, plus income and transfers) and the **capital and financial account** (investment flows).
- A **trade deficit** means imports exceed exports. The offset is a financial account surplus — foreign capital flowing in.

The offset is an accounting identity, not a coincidence. Dollars sent abroad to buy imports must come back, and the only two things they can buy are U.S. goods (exports) or U.S. assets (financial inflows). If they do not buy goods, they buy Treasuries, equities, and real estate. A country running a persistent current account deficit is, by construction, selling claims on itself.

### Exchange rate determination

Four forces do most of the work, and they can pull against each other.

- **Interest rate differentials.** Capital chases yield, so the currency with the higher real rate tends to appreciate. This is the fastest-acting force and the one the exam tests.
- **Inflation differentials.** Over long horizons, purchasing power parity says the currency with the higher inflation depreciates, because its money buys less.
- **Growth and trade flows.** Strong relative growth pulls in imports, which sells the domestic currency; strong exports do the reverse.
- **Safe-haven demand.** In a crisis, capital moves toward perceived safety regardless of yield, which can strengthen a currency while its own economy weakens.

Notice the tension: high nominal rates driven by high inflation are not the same as high real rates, and only the latter reliably attracts capital.

### Why the currency matters

- A **weak dollar** makes U.S. exports cheaper abroad and imports more expensive, which tends to **help U.S. exporters** and hurt domestic buyers of foreign goods. It also raises the dollar value of an unhedged foreign investment for a U.S. investor.
- A **strong dollar** does the reverse: cheaper imports, harder conditions for exporters, and a drag on the returns a U.S. investor earns on foreign holdings.

Rates drive the currency: **higher U.S. interest rates attract foreign capital seeking yield, which strengthens the dollar**. That is the chain the exam wants — tight money, higher rates, stronger dollar, weaker exports.

### Scenario: one strong dollar, three portfolios

The dollar appreciates 10% against a basket of currencies over a year. Three clients hold different things.

The first owns a U.S. aerospace manufacturer selling half its output abroad. Its products just became 10% more expensive to foreign buyers, or it holds price and absorbs the hit in margin. Either way foreign revenue translates back into fewer dollars. This client is hurt.

The second owns a U.S. retailer importing most of its inventory. Its cost of goods just fell in dollar terms, so it can widen margins or cut prices to take share. This client benefits.

The third owns an unhedged international equity fund. Even if the foreign stocks rose in local currency, translating them into a stronger dollar subtracts from the return — and the subtraction can exceed the gain. As the fourth worked example shows, an 8% local gain paired with an 8% currency decline produces a **loss**, not a wash. Currency-hedged share classes remove this exposure at the cost of the hedge and of any gain a weakening dollar would have delivered.

The conclusion worth saying to clients: a strong home currency is not automatically good news for a portfolio. It depends entirely on where the cash flows are earned.`,
  pitfalls: [
    'The Federal Reserve does NOT set fiscal policy — it cannot change tax rates or authorize spending. Any question about taxes or the federal budget is asking about Congress.',
    'The discount rate is set by the Fed; the federal funds rate is a market rate between banks that the Fed only targets. Do not treat them as the same lever.',
    'When the Fed BUYS securities it INCREASES the money supply and rates fall. Many candidates reverse this because buying feels like taking something away. Track the cash, not the paper.',
    'Reserve requirement changes are the most powerful tool but the least used; open market operations are the most frequently used. A question asking for the most common tool wants open market operations.',
    'A budget deficit is a one-period gap, while the national debt is the cumulative total. Eliminating the deficit does not reduce the debt, it only stops it from growing.',
    'A weak dollar helps U.S. exporters and raises the dollar value of unhedged foreign holdings — a strong dollar is not automatically the better outcome for an investor.',
    'The simple deposit multiplier is a ceiling, not a forecast. Cash drain, voluntary excess reserves, weak loan demand, and bank capital constraints all shrink the realized expansion.',
    'Automatic stabilizers (progressive taxes, unemployment insurance) are fiscal policy even though no new law is passed; discretionary fiscal policy is the part that requires legislation.',
  ],
  keyTerms: [
    {
      term: 'Federal Open Market Committee (FOMC)',
      definition:
        'The Fed body that directs open market operations and sets the federal funds rate target; composed of the seven governors plus five regional Reserve Bank presidents, with New York always voting.',
    },
    {
      term: 'Open market operations',
      definition:
        'Fed purchases and sales of U.S. government securities in the secondary market — the most frequently used monetary tool. Buying adds reserves and eases; selling drains reserves and tightens.',
    },
    {
      term: 'Discount rate',
      definition:
        'The rate the Federal Reserve charges member banks that borrow directly at the discount window; set by the Fed, normally above the fed funds target so the window is a backstop rather than a first stop.',
    },
    {
      term: 'Federal funds rate',
      definition:
        'The rate banks charge one another for overnight loans of reserves; a market rate that the FOMC targets rather than dictates.',
    },
    {
      term: 'Reserve requirement',
      definition:
        'The percentage of deposits a bank must hold rather than lend. Lowering it is expansionary; it is the most powerful and least frequently used tool, and U.S. ratios have been set at zero since 2020.',
    },
    {
      term: 'Interest on reserve balances',
      definition:
        "The rate the Fed pays on reserves banks hold with it. Because a bank will not lend below what it earns risk-free at the Fed, this rate puts a floor under short-term market rates.",
    },
    {
      term: 'M1 and M2',
      definition:
        'Money supply aggregates. M1 covers the most liquid balances (currency, checkable and savings deposits); M2 adds small time deposits and retail money market fund shares.',
    },
    {
      term: 'Equation of exchange',
      definition:
        'The monetarist identity MV = PQ: money supply times velocity equals the price level times real output. It names the four quantities that must reconcile when the money supply changes.',
    },
    {
      term: 'Multiplier effect',
      definition:
        'The expansion of deposits created when banks lend out reserves; the simple deposit multiplier equals 1 divided by the reserve requirement, and is a ceiling rather than a forecast.',
    },
    {
      term: 'Automatic stabilizers',
      definition:
        'Features of the tax and transfer system, such as progressive income taxes and unemployment insurance, that expand or contract the deficit with the cycle without any new legislation.',
    },
    {
      term: 'Crowding out',
      definition:
        'The displacement of private borrowing when government borrowing raises the interest rate in the market for loanable funds; strongest at full employment and weakest with idle capacity.',
    },
    {
      term: 'Balance of payments',
      definition:
        'The record of all economic transactions between a country and the rest of the world, split into the current account and the capital and financial account, which must offset each other.',
    },
  ],
  confusions: [
    {
      dont: 'Monetary policy — the Federal Reserve, money supply, and interest rates',
      with: 'Fiscal policy — Congress and the President, taxation and government spending',
    },
    {
      dont: 'The discount rate, charged by the Fed to banks and set administratively',
      with: 'The federal funds rate, charged between banks and merely targeted by the Fed',
    },
    {
      dont: 'A budget deficit, the shortfall in a single fiscal year',
      with: 'The national debt, the accumulated total of all past deficits',
    },
    {
      dont: 'Keynesian policy, which stimulates demand through spending and tax cuts',
      with: 'Supply-side policy, which lowers marginal rates to expand productive capacity',
    },
    {
      dont: 'Discretionary fiscal policy, which requires a new law and arrives with a long implementation lag',
      with: 'Automatic stabilizers, which respond to the cycle immediately with no vote at all',
    },
    {
      dont: 'A weak dollar, which helps exporters and lifts unhedged foreign returns',
      with: 'A strong dollar, which cheapens imports and drags on foreign returns',
    },
  ],
  formulas: [
    {
      name: 'Simple deposit (money) multiplier',
      formula: 'Multiplier = 1 / reserve requirement',
      note: 'A 10% reserve requirement implies a multiplier of 10. Actual money creation is smaller because banks hold excess reserves and the public holds cash.',
    },
    {
      name: 'Maximum deposit expansion',
      formula: 'Maximum new deposits = excess reserves × multiplier',
      note: 'Use excess reserves, not total reserves. Total deposits supported by a new injection equals the injection itself times the multiplier.',
    },
    {
      name: 'Equation of exchange',
      formula: 'M × V = P × Q',
      note: 'Money supply times velocity equals price level times real output. If V and Q are stable, money growth passes straight into inflation.',
    },
    {
      name: 'Return on an unhedged foreign holding',
      formula: '(1 + total return) = (1 + local return) × (1 + currency return)',
      note: 'Currency return is the change in the value of the foreign currency in dollars. Multiply the two factors; adding them omits the cross term.',
    },
  ],
  workedExamples: [
    {
      title: 'The money multiplier and maximum deposit expansion',
      setup:
        "The reserve requirement is 12.5%. A customer deposits $10 million of newly created reserves into a commercial bank. What is the multiplier, how much can the banking system lend, and what are total deposits at the end of the process?",
      steps: [
        "Multiplier = 1 / reserve requirement = 1 / 0.125 = 8.",
        "Split the initial deposit. Required reserves = 12.5% × $10,000,000 = $1,250,000. Excess reserves = $10,000,000 − $1,250,000 = $8,750,000.",
        "Maximum new loans = excess reserves × multiplier = $8,750,000 × 8 = $70,000,000.",
        "Total deposits in the system = the original deposit plus the loans it supports = $10,000,000 + $70,000,000 = $80,000,000.",
        "Cross-check the shortcut: total deposits also equal the initial deposit × multiplier = $10,000,000 × 8 = $80,000,000. The two routes must agree.",
        "Now add a leak. Suppose banks voluntarily hold an extra 2.5% of deposits, so the effective reserve ratio is 12.5% + 2.5% = 15%. Multiplier = 1 / 0.15 = 6.67, and expansion = $10,000,000 × 6.67 = $66.7 million.",
      ],
      answer:
        "The multiplier is 8. The system can create $70 million of new loans, producing $80 million of total deposits. With 2.5% of voluntary excess reserves the realized figure falls to roughly $66.7 million.",
      watchOut:
        "Multiplying total reserves rather than excess reserves gives $10,000,000 × 8 = $80,000,000 of new LOANS, overstating lending by exactly the $10 million original deposit. The initial deposit is not itself newly created lending.",
    },
    {
      title: 'Working backwards to an implied reserve ratio',
      setup:
        "An analyst observes that $4 million of new reserves injected into the banking system ultimately produced $25 million of new deposits. The statutory reserve requirement is 10%. What effective reserve ratio does the observed expansion imply, and how large is the gap from theory?",
      steps: [
        "Compute the observed multiplier: total deposits / reserves injected = $25,000,000 / $4,000,000 = 6.25.",
        "Invert the multiplier formula. If multiplier = 1 / reserve ratio, then reserve ratio = 1 / multiplier = 1 / 6.25 = 0.16 = 16%.",
        "Compute what theory predicted at the statutory 10%: multiplier = 1 / 0.10 = 10, so expansion = $4,000,000 × 10 = $40,000,000.",
        "Measure the shortfall: $40,000,000 − $25,000,000 = $15,000,000 of expansion that never happened.",
        "Attribute it. The effective ratio exceeded the statutory ratio by 16% − 10% = 6 percentage points, representing cash the public held outside banks plus reserves banks chose not to lend.",
      ],
      answer:
        "The implied effective reserve ratio is 16%, six percentage points above the 10% statutory requirement. Leakage cost the system $15 million of the $40 million theoretical expansion.",
      watchOut:
        "Dividing reserves by deposits ($4 / $25 = 0.16) happens to give the right ratio here, but only because it is the same arithmetic inverted. Dividing the wrong way round — $25 / $4 read as a percentage — produces a nonsensical 625% reserve ratio. Always identify the multiplier first, then invert it.",
    },
    {
      title: 'An open market purchase and excess reserves',
      setup:
        "A bank holds $500 million in deposits and $60 million in reserves against a 10% reserve requirement. The Fed buys $8 million of Treasury securities from this bank. How do excess reserves and system lending capacity change? Then compare the case where the Fed buys the same $8 million from a nonbank dealer who deposits the proceeds at the bank.",
      steps: [
        "Before: required reserves = 10% × $500,000,000 = $50,000,000. Excess = $60,000,000 − $50,000,000 = $10,000,000. Lending capacity = $10,000,000 × (1 / 0.10) = $100,000,000.",
        "Case 1, purchase from the bank: the bank swaps $8 million of securities for $8 million of reserves. Reserves rise to $68,000,000. Deposits are unchanged at $500 million, so required reserves stay at $50,000,000.",
        "Excess reserves = $68,000,000 − $50,000,000 = $18,000,000. Lending capacity = $18,000,000 × 10 = $180,000,000.",
        "Change in capacity = $180,000,000 − $100,000,000 = $80,000,000, which is simply the $8 million purchase × the multiplier of 10.",
        "Case 2, purchase from a nonbank dealer: reserves still rise to $68,000,000, but deposits rise too, to $508,000,000. Required reserves = 10% × $508,000,000 = $50,800,000.",
        "Excess reserves = $68,000,000 − $50,800,000 = $17,200,000. Further lending capacity = $17,200,000 × 10 = $172,000,000, plus the $8,000,000 deposit already created = $180,000,000 of total new deposits.",
      ],
      answer:
        "Excess reserves rise from $10 million to $18 million and lending capacity rises by $80 million. Buying from a nonbank dealer produces a smaller excess-reserve figure ($17.2 million) but the identical $180 million of total new deposits — the difference is only where the first $8 million is recorded.",
      watchOut:
        "In Case 2 it is easy to forget that deposits rose as well as reserves and to keep using $50 million of required reserves. That leaves excess at $18 million and total expansion at $188 million, overstating the result by $8 million — the initial deposit double-counted.",
    },
    {
      title: 'Return on a foreign holding once the currency moves',
      setup:
        "A U.S. investor buys a European equity fund for EUR 100,000 when the euro is worth $1.25. One year later the position is worth EUR 108,000 and the euro is worth $1.15. What is the investor's dollar return?",
      steps: [
        "Dollar cost at purchase: EUR 100,000 × $1.25 = $125,000.",
        "Dollar value at sale: EUR 108,000 × $1.15 = $124,200.",
        "Dollar return = ($124,200 − $125,000) / $125,000 = −$800 / $125,000 = −0.0064 = −0.64%.",
        "Decompose it. Local return = 108,000 / 100,000 − 1 = +8.00%. Currency return = 1.15 / 1.25 − 1 = −0.08 = −8.00%.",
        "Combine multiplicatively: (1 + 0.08) × (1 − 0.08) = 1.08 × 0.92 = 0.9936, so the total return is 0.9936 − 1 = −0.64%. This matches step 3 exactly.",
        "Sanity-check the other direction: had the euro instead risen to $1.30, the position would be worth 108,000 × $1.30 = $140,400, a return of $140,400 / $125,000 − 1 = +12.32%.",
      ],
      answer:
        "The dollar return is −0.64%. The investor was right about European equities and still lost money, because the 8% currency loss more than consumed the 8% local gain.",
      watchOut:
        "Adding +8% and −8% to conclude the investor broke even is the standard error; it ignores the cross term of 0.08 × 0.08 = 0.0064, which is exactly the 0.64% loss. Percentage gains and losses of equal size never cancel.",
    },
  ],
};
