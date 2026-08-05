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

## The Federal Reserve

### Structure

The Fed is made up of a **Board of Governors** (seven members, appointed by the President and confirmed by the Senate, serving staggered 14-year terms) and **12 regional Federal Reserve Banks**. The **Federal Open Market Committee (FOMC)** — the 7 governors plus 5 of the 12 regional bank presidents, with the New York president always voting — sets the target for the federal funds rate and directs open market operations.

### Mandate

The Fed operates under a **dual mandate**: maximum sustainable employment and stable prices. It also supervises banks and works to keep the payment system sound. Those two goals can conflict, which is exactly what makes policy decisions interesting: fighting inflation usually means slowing growth and accepting more unemployment.

## The tools of monetary policy

### 1. Reserve requirements

The fraction of deposits a bank must hold rather than lend. **Lowering** the requirement frees money to lend and is **expansionary**; **raising** it is contractionary. This is the **most powerful and most blunt** tool, which is why it is used rarely — a small change ripples through every bank at once.

### 2. The discount rate

The rate the Fed charges banks that borrow directly from it at the discount window. Cutting it is expansionary; raising it is contractionary. Its practical importance today is mostly **signaling**: it tells markets which direction the Fed leans. Note that the discount rate is **set by the Fed**, while the **federal funds rate** is what banks charge each other overnight and is a market rate the Fed *targets* rather than dictates.

### 3. Open market operations

The Fed buying or selling **U.S. government securities** in the secondary market through the FOMC. This is the **most frequently used** tool because it is precise and reversible.

- Fed **buys** securities → pays dealers → **reserves and money supply increase** → rates fall → **easy money**
- Fed **sells** securities → drains cash from the system → **money supply decreases** → rates rise → **tight money**

### 4. Interest on reserve balances

The Fed pays interest on the reserves banks hold with it. That rate sets a floor under short-term rates: a bank will not lend to another bank for less than it can earn risk-free at the Fed. Raising it pulls market rates up; lowering it lets them fall. In the modern framework this, together with open market operations, does most of the work.

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

## The money supply

- **M1** — the most liquid: currency in circulation, demand deposits, other checkable deposits, and savings deposits (savings balances were folded into M1 in 2020).
- **M2** — M1 plus small-denomination time deposits and retail money market fund shares.

The broader the aggregate, the less liquid the components.

## The multiplier effect

Because banks lend out most of what they receive, one dollar of new reserves supports several dollars of deposits. The simple **deposit multiplier is 1 divided by the reserve requirement** — a 10% requirement implies a multiplier of 10. In practice the realized multiplier is smaller because banks hold excess reserves and people hold cash. The exam point is directional: a lower reserve requirement means a larger multiplier and more money creation.

## Fiscal policy

Fiscal policy works through **taxation** and **government spending**.

- **Expansionary fiscal policy:** cut taxes, increase spending. Boosts demand, tends to increase the deficit.
- **Contractionary fiscal policy:** raise taxes, cut spending. Cools demand.

### Schools of thought

- **Keynesian** — demand-side. In a downturn, private demand is insufficient, so government should spend and cut taxes to fill the gap; the resulting deficit is acceptable and temporary. Emphasizes the spending multiplier.
- **Supply-side** — output-side. Lower marginal tax rates and lighter regulation increase the incentive to work, save, and invest, expanding productive capacity and eventually broadening the tax base.
- **Monetarist** — money-supply-side. Associated with the view that inflation is fundamentally a monetary phenomenon and that steady, predictable growth in the money supply beats discretionary fine-tuning, which arrives with long and variable lags.

### Deficits and debt

A **budget deficit** is a single-period shortfall of revenue against spending; the **national debt** is the accumulated total of past deficits. Sustained deficits can push interest rates up and **crowd out** private borrowing, though during a deep recession that effect is muted.

## International accounts and currency

- **Balance of payments** records all transactions between a country and the rest of the world: the **current account** (mainly trade in goods and services, plus income and transfers) and the **capital and financial account** (investment flows).
- A **trade deficit** means imports exceed exports. The offset is a financial account surplus — foreign capital flowing in.

### Why the currency matters

- A **weak dollar** makes U.S. exports cheaper abroad and imports more expensive, which tends to **help U.S. exporters** and hurt domestic buyers of foreign goods. It also raises the dollar value of an unhedged foreign investment for a U.S. investor.
- A **strong dollar** does the reverse: cheaper imports, harder conditions for exporters, and a drag on the returns a U.S. investor earns on foreign holdings.

Rates drive the currency: **higher U.S. interest rates attract foreign capital seeking yield, which strengthens the dollar**. That is the chain the exam wants — tight money, higher rates, stronger dollar, weaker exports.`,
  pitfalls: [
    'The Federal Reserve does NOT set fiscal policy — it cannot change tax rates or authorize spending. Any question about taxes or the federal budget is asking about Congress.',
    'The discount rate is set by the Fed; the federal funds rate is a market rate between banks that the Fed only targets. Do not treat them as the same lever.',
    'When the Fed BUYS securities it INCREASES the money supply and rates fall. Many candidates reverse this because buying feels like taking something away.',
    'Reserve requirement changes are the most powerful tool but the least used; open market operations are the most frequently used. A question asking for the most common tool wants open market operations.',
    'A budget deficit is a one-period gap, while the national debt is the cumulative total. Eliminating the deficit does not reduce the debt, it only stops it from growing.',
    'A weak dollar helps U.S. exporters and raises the dollar value of unhedged foreign holdings — a strong dollar is not automatically the better outcome for an investor.',
  ],
  keyTerms: [
    {
      term: 'Federal Open Market Committee (FOMC)',
      definition:
        'The Fed body that directs open market operations and sets the federal funds rate target; composed of the seven governors plus five regional Reserve Bank presidents.',
    },
    {
      term: 'Open market operations',
      definition:
        'Fed purchases and sales of U.S. government securities in the secondary market — the most frequently used monetary tool. Buying adds reserves and eases; selling drains reserves and tightens.',
    },
    {
      term: 'Discount rate',
      definition:
        'The rate the Federal Reserve charges member banks that borrow directly at the discount window; set by the Fed and used largely as a policy signal.',
    },
    {
      term: 'Federal funds rate',
      definition:
        'The rate banks charge one another for overnight loans of reserves; a market rate that the FOMC targets rather than dictates.',
    },
    {
      term: 'Reserve requirement',
      definition:
        'The percentage of deposits a bank must hold rather than lend. Lowering it is expansionary; it is the most powerful and least frequently used tool.',
    },
    {
      term: 'M1 and M2',
      definition:
        'Money supply aggregates. M1 covers the most liquid balances (currency, checkable and savings deposits); M2 adds small time deposits and retail money market fund shares.',
    },
    {
      term: 'Multiplier effect',
      definition:
        'The expansion of deposits created when banks lend out reserves; the simple deposit multiplier equals 1 divided by the reserve requirement.',
    },
    {
      term: 'Balance of payments',
      definition:
        'The record of all economic transactions between a country and the rest of the world, split into the current account and the capital and financial account.',
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
  ],
};
