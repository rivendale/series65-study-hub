import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'etfs-closed-end',
  title: 'ETFs, Closed-End Funds, and UITs',
  weight: '~3%',
  order: 12,
  summary:
    "Open-end mutual funds are only one way to package a pooled portfolio. The exam expects you to distinguish exchange-traded funds, closed-end funds, and unit investment trusts by how shares are created, how they are priced and traded, whether anyone actively manages the portfolio, and which structural risks — premium/discount, credit risk, compounding decay — attach to each.",
  body: `## The four packages

All four structures below are **investment companies or trusts holding a pooled portfolio**, and all four give a small investor diversification and professional selection. They differ on four axes the exam returns to constantly: **how shares come into existence, how the price is set, who manages the portfolio, and what it costs**.

## Open-end funds — the baseline

An open-end mutual fund issues an **unlimited number of redeemable shares**. You buy from the fund and redeem back to the fund, always at the **next computed net asset value** (forward pricing), calculated at least once each business day after the close. There is no secondary market and no intraday price. Because the fund must stand ready to redeem in cash, it holds a liquidity buffer, and heavy redemptions can force sales that generate **capital gains distributions to remaining shareholders** — an investor can owe tax on gains in a year the fund lost money.

## Exchange-traded funds

An **ETF** is a pooled portfolio whose shares trade on an exchange throughout the day like a stock. Most are registered as open-end investment companies; a few older ones are structured as UITs.

### Creation and redemption

Retail investors do not create ETF shares. Large institutions called **authorized participants (APs)** transact directly with the fund in large blocks called **creation units** (commonly 25,000 to 100,000 shares). The AP delivers a basket of the underlying securities to the fund and receives a creation unit, or delivers a creation unit and receives the basket back. This is an **in-kind exchange**, not a cash purchase.

That single design choice — securities in, securities out, no cash — is the source of almost everything distinctive about ETFs. It produces the arbitrage that pins the price to NAV, and it produces the tax efficiency. Both flow from the same plumbing.

### Why ETFs trade near NAV

The creation/redemption mechanism is an **arbitrage channel**. If the ETF trades above the value of its basket, an AP buys the underlying securities, creates shares, and sells them into the market for a profit — which pushes the price down. If it trades below, the AP buys cheap shares, redeems them for the more valuable basket, and the buying pressure pushes the price up. Competition among APs keeps the market price **close to but not exactly equal to NAV**.

Notice what makes this different from an open-end fund. No one promises to redeem ETF shares at NAV and no rule requires the market price to equal it. The price converges because **it is profitable for someone to make it converge** — an economic force, not a legal right. It holds while the trade pays, and only while the trade pays.

### Closing a premium: an authorized participant does the arithmetic

An equity ETF's underlying basket is worth **$100.00 per share** at midday — the intraday indicative value. Heavy retail buying has pushed the ETF's market price to **$100.40**. The creation unit is **50,000 shares**.

The AP assembles a basket of the underlying stocks worth 50,000 × $100.00 = **$5,000,000** and delivers it to the fund in exchange for one creation unit of 50,000 ETF shares. It then sells those shares into the market at $100.40: 50,000 × $100.40 = **$5,020,000**. Gross profit before trading costs and commissions is 50,000 × $0.40 = **$20,000**.

Now watch the price effect. Buying the underlying stocks nudges their prices **up**, which raises NAV. Selling 50,000 new ETF shares into the market pushes the ETF price **down**. The two ends of the trade move toward each other, and the AP keeps repeating until the remaining gap no longer covers its costs. That residual gap — a few basis points on a liquid domestic equity ETF — is the real width of the arbitrage band, not zero.

### Where the mechanism breaks down

The arbitrage works only when the AP can actually transact in the basket at a known price and when NAV itself is meaningful. Three situations break one or both:

- **Illiquid underlying holdings.** In a high-yield or emerging-market bond ETF, many bonds may not have traded all day. The published NAV rests on **stale or matrix-priced marks**, so a "discount" may simply mean the ETF price is the fresher number. In a stressed week the ETF can be the market's only live price discovery for bonds nobody is quoting.
- **Non-overlapping hours.** An ETF holding Japanese equities prices its NAV off closing prices in Tokyo. If the U.S. market rallies during the New York session, the ETF will trade at an apparent **premium** to a NAV that is hours out of date — an artifact, not an opportunity.
- **Genuine stress.** When APs face their own balance-sheet limits, cannot hedge, or step back from a disorderly market, creations and redemptions slow and **real** premiums or discounts open up. Bond ETFs have traded at discounts of several percent during acute market stress.

The exam point is the qualifier: ETFs trade **close to** NAV, kept there by a profit motive that can weaken. Never write that an ETF trades **at** NAV.

### Trading characteristics and the cost of the spread

Because ETFs trade like stocks, investors can use **limit orders, stop orders, margin, and short sales**, and can trade any time the market is open. That flexibility comes with a **bid-ask spread and, at some firms, a commission** on each trade — costs a no-load mutual fund does not impose.

The spread is a genuine cost, not a quotation artifact. An investor buys at the **ask** and sells at the **bid**, so a round trip costs the **full spread**, not half of it. On a heavily traded index ETF that may be a penny on a $50 share — two basis points, negligible. On a thin sector or single-country ETF it may be twenty or thirty basis points, and one round trip can exceed a year of the expense ratio.

That flips the standard cost comparison for a specific client type. Someone investing a **lump sum for a decade** should weight the expense ratio heavily and can ignore a single spread. Someone **contributing $300 a month** crosses a spread twelve times a year and may do better in a no-load open-end fund with a slightly higher expense ratio and no transaction cost at all. Use **limit orders**, and avoid the opening and closing minutes, when spreads are widest and the basket is not yet fully priced.

### Tax efficiency

In-kind redemption lets the fund hand appreciated securities to the AP rather than selling them, so ETFs generally **realize and distribute far fewer capital gains** than comparable mutual funds. The mechanism deserves a sentence of its own: when a mutual fund faces net redemptions it must **sell** securities to raise cash, realizing gains that are then distributed to the shareholders who stayed — an investor can owe capital gains tax in a year the fund lost money. An ETF facing net redemptions instead **delivers** its lowest-basis shares to the AP in kind. No sale, no realized gain, and the fund's remaining basis is quietly stepped up.

The investor still owes tax on dividends and on her own gain when she sells. **Tax efficiency is a structural advantage, not a tax exemption**, and it is worth nothing at all inside an IRA — a point exam questions test by placing the ETF in a retirement account.

### Varieties

- **Index ETFs** — track a published benchmark. Lowest cost, minimal turnover, and performance that differs from the index only by expenses and **tracking error** arising from sampling, cash drag, and rebalancing.
- **Actively managed ETFs** — a manager selects holdings, with a higher expense ratio and higher turnover. Their existence undercuts the shorthand that "ETF means index fund"; the structure and the strategy are separate questions.
- **Leveraged and inverse ETFs** — use derivatives to deliver a multiple (2x, 3x) or the opposite of an index's **daily** return.

### Why leveraged and inverse funds decay

This is the single most testable suitability point in the topic, and it is worth understanding rather than memorizing. The fund promises a multiple of the **daily** return, which means it must **rebalance its exposure every single day** to restore the stated leverage against the new, changed asset base.

The consequence is mechanical. After a gain, the fund must **add** exposure at the higher level; after a loss, it must **cut** exposure at the lower level. Buying high and selling low, forced, every day. In a trending market that works in the holder's favor and can beat the stated multiple. In a **choppy** market it bleeds — a phenomenon called **compounding decay** or **volatility drag** — and the bleed grows with the square of daily volatility and with the leverage factor, so a 3x fund decays far faster than a 2x.

The result is the exam's favorite fact: **a leveraged fund can lose money over a stretch in which the index finished flat**, and an inverse fund can lose money in a period when the index fell. These are **short-term trading tools, generally unsuitable as buy-and-hold positions**. Recommending one for a long-term account, or leaving one unmonitored in a client portfolio, is a classic violation. The prospectus itself says the objective applies to a single day; a recommendation that ignores that language is a recommendation made without a reasonable basis.

## Commodity and Currency ETFs: The Tax Quirks

Not every exchange-traded product is a registered investment company, and the wrapper drives the tax treatment. This is where a question can look easy and be wrong.

- **Physically backed precious metals trusts** are typically **grantor trusts** holding bullion. The investor is treated as owning a share of the metal, and long-term gains are taxed as **collectibles**, at a higher maximum long-term rate than ordinary long-term capital gains.
- **Futures-based commodity funds** are often organized as **limited partnerships**, not funds. They issue a **Schedule K-1** rather than a Form 1099, positions are generally **marked to market at year end** so gains are taxable without a sale, and Section 1256 contracts are taxed on the **60/40 rule** — 60% long-term and 40% short-term regardless of how long the position was held.
- **Futures-based funds also suffer roll cost.** A fund holding front-month futures must sell the expiring contract and buy the next one. When the forward curve is in **contango** (later contracts priced higher), each roll sells low and buys high, and the fund can lag spot commodity prices badly over time. In **backwardation** the roll adds return. This is why a crude oil fund's multi-year chart can diverge sharply from the price of crude.
- **Currency products** may hold foreign-currency deposits in a grantor trust; the interest is **ordinary income**, and currency gains are generally **ordinary income** rather than capital gain.

The takeaway for a fact pattern: if the product tracks gold, oil, or a currency, **do not assume mutual fund taxation**. Ask what the wrapper is.

## Exchange-traded notes

An **ETN** looks like an ETF on a screen but is legally an **unsecured debt obligation of the issuing bank** that promises the return of an index at maturity. It holds no portfolio. The investor therefore takes the **credit risk of the issuer** on top of market risk — if the bank fails, the note can go to nearly zero even if the tracked index is fine. Do not describe an ETN as a fund.

## Closed-end funds

A **closed-end fund** raises capital once through an **IPO of a fixed number of shares**, then closes. After that, shares trade **investor-to-investor on an exchange or OTC**; the fund does not redeem them.

Key consequences:

- Price is set by **supply and demand**, so shares routinely trade at a **premium or a discount to NAV** — discounts of 5% to 15% are common. Buying at a discount is not automatically a bargain, and the discount can widen.
- Because the manager never faces redemptions, the fund can hold **illiquid assets** (municipal bonds, emerging market debt, private loans) that an open-end fund could not.
- Closed-end funds may **issue senior securities and borrow**, using **leverage** to boost yield.
- Distributions sometimes include **return of capital**, which is not income and reduces cost basis.

### Why the discount persists

Compare the two convergence stories directly. An **open-end fund** cannot trade below NAV because the shareholder can always redeem at NAV instead. An **ETF** does not have that right at the retail level, but the AP's redemption right substitutes for it, and profit-seeking closes the gap. A **closed-end fund has neither**. No investor can redeem, no institution can arbitrage, and therefore **nothing at all forces the price to NAV**. A discount can persist for years and can widen further.

The only things that close a closed-end discount are corporate actions: a **tender offer** at or near NAV, a conversion to open-end form, a liquidation, or activist pressure that threatens one of these. That is why a discount is best read as information about **demand for the wrapper**, not as a mispricing waiting to be collected.

The most testable consequence is the **IPO trap**. A closed-end fund's initial public offering is priced at, say, **$20.00 per share**, out of which underwriting compensation of about **4.50%** is paid. The buyer therefore owns roughly $20.00 × 0.955 = **$19.10 of portfolio assets** on day one, before the fund has invested anything. Shares commonly drift to a discount within months, so the IPO buyer is paying a premium to NAV by construction. **The rule: never buy a closed-end fund at its IPO; buy it in the secondary market**, where the load has already been absorbed into someone else's basis.

### Leverage and the distribution puzzle

A closed-end fund typically leverages by borrowing at **short-term** rates or issuing **preferred shares** and investing the proceeds in **longer-dated** assets, capturing the spread and passing it to common shareholders as a higher distribution. Registered closed-end funds are subject to **asset coverage requirements** under the 1940 Act — broadly 300% coverage for debt and 200% for preferred stock — which cap how far this can go and can force **deleveraging at the worst possible moment** if NAV falls enough to breach them.

Leverage cuts both ways and its costs are not symmetric with its benefits. It magnifies NAV moves in both directions, and when short-term rates rise, the fund's borrowing cost rises immediately while the yield on its long-dated assets is fixed — so the spread compresses, the distribution gets cut, and the price often falls further than NAV as income-seeking holders sell.

Finally, read distributions carefully. A closed-end fund quoting an eye-catching **distribution rate** may be paying part of it out of **return of capital** — the investor's own money handed back, which reduces cost basis rather than representing earnings. Section 19(a) notices disclose the composition. Two further traps: the advertised distribution rate is usually computed on **market price**, not NAV, so a deep discount mechanically inflates it, and a fund that consistently distributes more than it earns will see its NAV erode over time even in a decent market.

## Unit investment trusts

A **UIT** holds a **fixed, unmanaged portfolio** assembled at inception and held essentially unchanged until a stated **termination (maturity) date**, when assets are sold and proceeds distributed.

- **No board of directors, no investment adviser, no active management** — securities are not traded to chase returns. This means **low ongoing management expense** but no ability to react.
- Units are **redeemable**: the sponsor typically maintains a secondary market and will redeem units at NAV, so a UIT is not stuck at a discount the way a closed-end fund can be.
- Common forms are fixed municipal or corporate bond trusts and defined equity portfolios.
- The Series 65 phrase to recognize: a UIT is **"a fixed portfolio of securities held to a specified termination date, supervised but not managed."**

## Side-by-side comparison

| Feature | Open-end fund | Closed-end fund | ETF | UIT |
| --- | --- | --- | --- | --- |
| Share count | Unlimited, continuously issued | **Fixed** after the IPO | Varies via creation units | Fixed number of units |
| How you buy | From the fund | On an exchange from another investor | On an exchange | From the sponsor |
| Pricing | **Next computed NAV** (forward pricing) | Market supply and demand — **premium or discount** | Market price, kept **near NAV** by AP arbitrage | NAV-based |
| Intraday trading | No | Yes | Yes | Generally no |
| Management | Active or index, ongoing | Active, ongoing | Usually index, some active | **None — fixed portfolio** |
| Leverage permitted | Very limited | **Commonly used** | Only in leveraged products | No |
| Typical cost | Expense ratio, possible sales load and 12b-1 | Expense ratio plus commission | **Low expense ratio** plus commission and spread | Sales charge, low ongoing cost |
| Termination | Perpetual | Perpetual | Perpetual | **Stated maturity date** |

Read the table down four decision axes and the choices resolve quickly.

**Pricing.** Only the open-end fund is guaranteed to price at NAV, and the price of that guarantee is that you cannot know the number when you place the order. The ETF gives an executable intraday price usually within a few basis points of fair value. The closed-end fund gives an executable price with no anchor to NAV at all.

**Liquidity.** Open-end liquidity is a **legal right** — redemption within seven days at NAV. ETF liquidity is **market liquidity**, as deep as the underlying basket and no deeper, which is why a thinly traded ETF holding large-cap stocks still trades well while a heavily traded ETF holding illiquid bonds can gap. Closed-end liquidity is secondary market only, and in a small fund a large order moves the price.

**Cost.** Compare **total** cost, not the headline. The open-end fund may carry a load and a 12b-1 fee but no spread; the ETF usually has the lowest expense ratio but adds a spread every transaction; the closed-end fund adds commission and spread on top of the highest expense ratio of the three, because leverage and the underlying strategies cost more to run.

**Tax.** In a **taxable** account the ETF's in-kind mechanism is a real and durable advantage. In a **tax-deferred** account it is worth nothing and the analysis collapses back to cost and liquidity — the switch a well-written question flips in the last sentence of the stem.

## Suitability framing

When a question gives you a client profile, sort on the structural facts: an investor who needs **intraday execution or tax efficiency in a taxable account** points to an ETF; one making **small automatic monthly contributions** points to a no-load open-end fund; one seeking **higher income and willing to accept leverage and discount risk** points to a closed-end fund; one who wants a **fixed bond portfolio with a known maturity and no manager discretion** points to a UIT. Leveraged and inverse products point at nobody with a long horizon.`,
  pitfalls: [
    'Do not say ETF shares always trade at NAV — arbitrage by authorized participants keeps the price close to NAV, but premiums and discounts do appear, especially in illiquid or foreign holdings and in stressed markets.',
    "Leveraged and inverse ETFs reset daily, so their compounding over multiple periods will not equal the stated multiple of the index's cumulative return; recommending one as a long-term holding is a suitability failure, not just a poor idea.",
    'An ETN is an unsecured bank note, not a portfolio of securities — it carries issuer credit risk, and a question describing an exchange-traded product with no underlying holdings is describing an ETN.',
    "A closed-end fund trading at a discount to NAV is not automatically undervalued; the discount reflects supply and demand and can persist or widen indefinitely, and there is no redemption right to force convergence.",
    "A UIT is supervised but not managed — there is no adviser trading the portfolio and no board of directors, so calling it 'professionally managed' in the active sense is wrong.",
    "ETFs are cheaper on expense ratio but not always cheaper overall; commissions and bid-ask spreads on frequent small purchases can exceed the savings versus a no-load mutual fund.",
    "Only ETF authorized participants deal in creation units directly with the fund — a retail investor can never redeem ETF shares back to the fund at NAV.",
    "A closed-end fund IPO is priced above the assets it will hold, because underwriting compensation comes out of the offering price. A $20.00 IPO share backed by a 4.50% load holds about $19.10 of portfolio on day one, so buy closed-end funds in the secondary market rather than at the offering.",
    "Not every exchange-traded product is taxed like a fund. Physically backed metals trusts generate collectibles gains, and futures-based commodity partnerships issue a Schedule K-1, mark to market at year end, and apply the 60/40 split regardless of holding period.",
    "A closed-end fund's advertised distribution rate is normally computed on market price rather than NAV, so a deep discount inflates it, and part of the payout may be return of capital rather than earnings.",
  ],
  keyTerms: [
    {
      term: 'Authorized participant (AP)',
      definition:
        "A large institutional firm permitted to exchange baskets of the underlying securities with an ETF for creation units and vice versa; the AP's arbitrage activity is what keeps the ETF's market price near its net asset value.",
    },
    {
      term: 'Creation unit',
      definition:
        'The large block of ETF shares — often 25,000 to 100,000 — in which shares are issued to or redeemed from an authorized participant, typically through an in-kind exchange of securities rather than cash.',
    },
    {
      term: 'Premium / discount to NAV',
      definition:
        "The amount by which a fund's market price exceeds or falls below its net asset value per share; a defining and persistent feature of closed-end funds and a transient one for ETFs.",
    },
    {
      term: 'Forward pricing',
      definition:
        'The rule that open-end mutual fund purchases and redemptions are executed at the next net asset value computed after the order is received, not at a price already published.',
    },
    {
      term: 'Leveraged / inverse ETF',
      definition:
        "An ETF using derivatives to deliver a multiple of, or the opposite of, an index's daily return; because the exposure resets each day, holding-period results diverge from the stated multiple, making these short-term trading tools.",
    },
    {
      term: 'Compounding decay (volatility drag)',
      definition:
        "The erosion of a leveraged or inverse product's value over multiple volatile sessions caused by daily rebalancing, which can produce a loss even when the tracked index ends the period unchanged.",
    },
    {
      term: 'Exchange-traded note (ETN)',
      definition:
        "An unsecured, unsubordinated debt security of a bank that pays the return of a reference index at maturity; it holds no assets, so the investor bears the issuer's credit risk in addition to index risk.",
    },
    {
      term: 'Return of capital',
      definition:
        "A distribution that represents the investor's own principal rather than fund earnings; it is not taxable when paid but reduces cost basis, and a fund that pays it persistently will see its NAV erode.",
    },
    {
      term: 'Contango',
      definition:
        'A futures curve in which later-dated contracts are priced above nearer ones, so a fund that rolls expiring futures forward repeatedly sells low and buys high and lags the spot price of the commodity over time.',
    },
    {
      term: 'Unit investment trust (UIT)',
      definition:
        'An investment company that holds a fixed portfolio of securities, has no board of directors or investment adviser, issues redeemable units, and terminates on a stated date when holdings are liquidated.',
    },
  ],
  confusions: [
    {
      dont: 'ETF — a pooled portfolio of actual securities whose shares are created and redeemed in kind',
      with: "ETN — an unsecured note of a bank with no portfolio behind it, exposing the holder to the issuer's credit risk",
    },
    {
      dont: 'Closed-end fund — fixed share count, priced by supply and demand at a premium or discount',
      with: 'Open-end fund — unlimited redeemable shares, always priced at the next computed NAV',
    },
    {
      dont: 'UIT — fixed portfolio, no manager, stated termination date',
      with: 'Managed open-end fund — portfolio traded continuously by an adviser with no maturity',
    },
    {
      dont: "A leveraged ETF's stated 2x or 3x objective, which applies to a single day",
      with: 'The multiple an investor would receive over a month or a year, which daily reset and compounding make unpredictable',
    },
    {
      dont: 'Tax efficiency from in-kind redemption, which reduces capital gains distributions',
      with: 'Tax exemption — the investor still owes tax on dividends and on gains realized at sale',
    },
  ],
  workedExamples: [
    {
      title: 'Premium and discount on a closed-end fund, in both directions',
      setup:
        "Closed-end Fund X reports a net asset value of $22.50 per share; its shares last traded at $19.80. Closed-end Fund Y trades at $25.20 and is quoted at a 5% premium to NAV. Find Fund X's discount and Fund Y's NAV. Then suppose Fund X's portfolio gains 6% and its discount narrows to 6% — what does the shareholder earn?",
      steps: [
        "Write the definition. A premium or discount is always measured AGAINST NAV, because NAV is the value of what you own: Premium or Discount % = (Market Price − NAV) / NAV.",
        "Fund X, numerator first: $19.80 − $22.50 = −$2.70 per share.",
        "Divide by NAV: −$2.70 / $22.50 = −0.12.",
        "Fund Y runs the same relationship backward. Price = NAV × (1 + premium), so NAV = Price / (1 + premium) = $25.20 / 1.05.",
        "Divide: 25.20 / 1.05 = $24.00. Check it forward: $24.00 × 1.05 = $25.20, matching the quoted price.",
        "Now the return question. New NAV = $22.50 × 1.06 = $23.85.",
        "New price at a 6% discount = $23.85 × 0.94 = $22.419.",
        "Shareholder return = ($22.419 − $19.80) / $19.80 = $2.619 / $19.80 = 0.13227.",
      ],
      answer:
        "Fund X trades at a 12% discount; Fund Y's NAV is $24.00. If Fund X's NAV rises 6% while the discount narrows from 12% to 6%, the shareholder earns 13.23% — more than double the portfolio's return, because the discount closing is itself a source of return.",
      watchOut:
        "Dividing the $2.70 gap by the market price instead of NAV: 2.70 / 19.80 = 13.64%, which overstates the discount. The lever also runs the other way, and that is the part candidates forget: if the discount had simply held at 12%, the price would be $23.85 × 0.88 = $20.988 and the return exactly 6.00%, and had the discount WIDENED to 18% the price would be $19.557 and the shareholder would have LOST money in a year the portfolio gained 6%.",
    },
    {
      title: 'Two days in a 2x leveraged ETF',
      setup:
        "An index stands at 1,000. It rises 10% on day one and falls 10% on day two. A client puts $10,000 into a 2x leveraged ETF on that index, which is designed to deliver twice the index's DAILY return. Compare the result with twice the index's return over the two days.",
      steps: [
        "Track the index. Day one: 1,000 × 1.10 = 1,100. Day two: 1,100 × 0.90 = 990.",
        "Index return over the period: (990 / 1,000) − 1 = −1.00%.",
        "State the naive expectation a client would form: twice the period return = 2 × (−1.00%) = −2.00%, which on $10,000 would leave $9,800.",
        "Now run the fund the way it actually works, one day at a time. Day one the fund returns 2 × 10% = +20%: $10,000 × 1.20 = $12,000.",
        "Day two the fund returns 2 × (−10%) = −20%, applied to the NEW base of $12,000, not to the original $10,000: $12,000 × 0.80 = $9,600.",
        "Actual fund return: ($9,600 / $10,000) − 1 = −4.00%.",
        "Measure the gap: −4.00% actual versus −2.00% expected = 2 percentage points, or $200, after only two sessions.",
      ],
      answer:
        "The index lost 1.00% and the 2x fund lost 4.00%, not 2.00%. The client is $200 short of what the stated multiple implied — after two days. Over weeks of choppy trading the gap compounds, and a 2x fund can post a loss over a stretch in which the index finished exactly flat.",
      watchOut:
        "Applying day two's −20% to the original $10,000 rather than to the day-two opening value of $12,000. That subtracts $2,000 from $12,000, gives $10,000, and reports a 0% result — hiding the entire effect. The daily reset IS the mechanism: each day's multiple applies to that day's starting value, which is why the objective in the prospectus is stated for a single day.",
    },
    {
      title: 'The same two days in a -1x inverse fund',
      setup:
        "Using the identical index path — up 10% on day one, down 10% on day two — a different client puts $10,000 into a -1x inverse ETF, designed to deliver the opposite of the index's DAILY return. What does she earn?",
      steps: [
        "The index path is unchanged: 1,000 to 1,100 to 990, a period return of −1.00%.",
        "State the naive expectation: the opposite of −1.00% is +1.00%, which on $10,000 would leave $10,100.",
        "Run the fund one day at a time. Day one the index rises 10%, so the fund returns −10%: $10,000 × 0.90 = $9,000.",
        "Day two the index falls 10%, so the fund returns +10%, applied to the new base of $9,000: $9,000 × 1.10 = $9,900.",
        "Actual fund return: ($9,900 / $10,000) − 1 = −1.00%.",
        "Compare: −1.00% actual against +1.00% expected, a 2 percentage point gap, or $200.",
      ],
      answer:
        "The inverse fund lost 1.00% — exactly what the index lost — in a period the client expected to profit from. Set this beside the previous example and the real lesson appears: over the same two days the 2x fund lost $400 and the -1x fund lost $100. Volatility drag punishes leveraged and inverse products alike, because both rebalance daily; being short does not exempt a fund from the arithmetic.",
      watchOut:
        "Reasoning that an inverse fund must gain whenever the index falls over the holding period. Here the index fell 1.00% and the fund still lost 1.00%, an error of $200 against the expected $10,100. The gap widens roughly with the square of daily volatility, so the more the index thrashes on its way to a given endpoint, the worse the inverse holder does.",
    },
    {
      title: 'The round-trip cost of a bid-ask spread',
      setup:
        "An ETF is quoted 49.96 bid / 50.04 ask. A client buys 2,000 shares and later sells the same 2,000 shares at the same quote. The fund's expense ratio is 0.06%. What does the round trip cost in spread, and how does that compare with a year of fund expenses?",
      steps: [
        "Identify the spread and the midpoint. Spread = ask − bid = $50.04 − $49.96 = $0.08 per share. Midpoint, the fair value estimate, = $50.00.",
        "Buy at the ASK, never the midpoint: 2,000 × $50.04 = $100,080. The client paid $0.04 per share above fair value, or $80.",
        "Sell at the BID: 2,000 × $49.96 = $99,920. Another $0.04 per share below fair value, another $80.",
        "Round-trip cost = $100,080 − $99,920 = $160. Equivalently, the client crossed the FULL spread once: 2,000 × $0.08 = $160.",
        "Express it as a percentage of the roughly $100,000 position: $160 / $100,000 = 0.16% — which is just the spread as a percentage of the midpoint, $0.08 / $50.00 = 0.16%.",
        "Price a year of the expense ratio for comparison: 0.06% × $100,000 = $60.",
        "Divide: $160 / $60 = 2.67.",
      ],
      answer:
        "The round trip costs $160, or 0.16% of the position — about 2.7 years of the fund's expense ratio consumed by a single buy and a single sell, before any commission.",
      watchOut:
        "Counting only half the spread, $80, on the theory that you pay it once. You cross it twice: once entering at the ask and once exiting at the bid. Note the boundary too — this is a PER-TRADE cost, so it is nearly irrelevant to a buy-and-hold investor and punishing to a client who contributes monthly, who would cross the spread twelve times a year and might be better served by a no-load open-end fund with no spread at all.",
    },
    {
      title: 'Fifty-one basis points of expense over twenty years',
      setup:
        "Two funds track the same index and earn 7.50% a year gross. An ETF charges an expense ratio of 0.04%; an index mutual fund charges 0.55%. A client invests $250,000 for 20 years and reinvests everything. What is the ending dollar difference?",
      steps: [
        "Convert gross return to net return by subtracting the expense ratio, which is deducted from fund assets every year. ETF: 7.50% − 0.04% = 7.46%. Mutual fund: 7.50% − 0.55% = 6.95%.",
        "Compound the ETF over 20 years: 1.0746 raised to the 20th power = 4.21635.",
        "Multiply: $250,000 × 4.21635 = $1,054,088.",
        "Compound the mutual fund: 1.0695 raised to the 20th power = 3.83368.",
        "Multiply: $250,000 × 3.83368 = $958,420.",
        "Subtract: $1,054,088 − $958,420 = $95,668.",
        "Scale it against the original stake: $95,668 / $250,000 = 38.3%.",
      ],
      answer:
        "The cheaper fund ends about $95,668 ahead — roughly 38% of the original investment — from a fee gap of only 51 basis points a year. That is the arithmetic behind the rule that expense ratio is the first number to compare between two funds tracking the same benchmark.",
      watchOut:
        "Estimating the damage as 0.51% × 20 years = 10.2% of the balance, about $25,500. The true figure is nearly four times that, because every dollar taken as a fee is also a dollar that never compounds again. Two boundaries before declaring the ETF the winner: the comparison is only valid if both funds truly track the SAME index, and the ETF's bid-ask spread and any commission are outside the expense ratio and must be added back.",
    },
  ],
};
