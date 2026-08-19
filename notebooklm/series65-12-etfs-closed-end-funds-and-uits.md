# ETFs, Closed-End Funds, and UITs

This is one topic from the Series 65 exam, the Uniform Investment Adviser Law
Examination. It is worth about 3 percent of the exam.

## Why this topic matters

Open-end mutual funds are only one way to package a pooled portfolio. The exam expects you to distinguish exchange-traded funds, closed-end funds, and unit investment trusts by how shares are created, how they are priced and traded, whether anyone actively manages the portfolio, and which structural risks — premium/discount, credit risk, compounding decay — attach to each.

## The four packages

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

- Feature: Share count. Open-end fund: Unlimited, continuously issued. Closed-end fund: Fixed after the IPO. ETF: Varies via creation units. UIT: Fixed number of units.
- Feature: How you buy. Open-end fund: From the fund. Closed-end fund: On an exchange from another investor. ETF: On an exchange. UIT: From the sponsor.
- Feature: Pricing. Open-end fund: Next computed NAV (forward pricing). Closed-end fund: Market supply and demand — premium or discount. ETF: Market price, kept near NAV by AP arbitrage. UIT: NAV-based.
- Feature: Intraday trading. Open-end fund: No. Closed-end fund: Yes. ETF: Yes. UIT: Generally no.
- Feature: Management. Open-end fund: Active or index, ongoing. Closed-end fund: Active, ongoing. ETF: Usually index, some active. UIT: None — fixed portfolio.
- Feature: Leverage permitted. Open-end fund: Very limited. Closed-end fund: Commonly used. ETF: Only in leveraged products. UIT: No.
- Feature: Typical cost. Open-end fund: Expense ratio, possible sales load and 12b-1. Closed-end fund: Expense ratio plus commission. ETF: Low expense ratio plus commission and spread. UIT: Sales charge, low ongoing cost.
- Feature: Termination. Open-end fund: Perpetual. Closed-end fund: Perpetual. ETF: Perpetual. UIT: Stated maturity date.


Read the table down four decision axes and the choices resolve quickly.

**Pricing.** Only the open-end fund is guaranteed to price at NAV, and the price of that guarantee is that you cannot know the number when you place the order. The ETF gives an executable intraday price usually within a few basis points of fair value. The closed-end fund gives an executable price with no anchor to NAV at all.

**Liquidity.** Open-end liquidity is a **legal right** — redemption within seven days at NAV. ETF liquidity is **market liquidity**, as deep as the underlying basket and no deeper, which is why a thinly traded ETF holding large-cap stocks still trades well while a heavily traded ETF holding illiquid bonds can gap. Closed-end liquidity is secondary market only, and in a small fund a large order moves the price.

**Cost.** Compare **total** cost, not the headline. The open-end fund may carry a load and a 12b-1 fee but no spread; the ETF usually has the lowest expense ratio but adds a spread every transaction; the closed-end fund adds commission and spread on top of the highest expense ratio of the three, because leverage and the underlying strategies cost more to run.

**Tax.** In a **taxable** account the ETF's in-kind mechanism is a real and durable advantage. In a **tax-deferred** account it is worth nothing and the analysis collapses back to cost and liquidity — the switch a well-written question flips in the last sentence of the stem.

## Suitability framing

When a question gives you a client profile, sort on the structural facts: an investor who needs **intraday execution or tax efficiency in a taxable account** points to an ETF; one making **small automatic monthly contributions** points to a no-load open-end fund; one seeking **higher income and willing to accept leverage and discount risk** points to a closed-end fund; one who wants a **fixed bond portfolio with a known maturity and no manager discretion** points to a UIT. Leveraged and inverse products point at nobody with a long horizon.

## The questions this topic is tested with

**What mechanism keeps the market price of an exchange-traded fund closely aligned with the value of its underlying portfolio?**

Authorized participants can exchange a creation unit of ETF shares for the underlying basket of securities and vice versa. When the ETF trades above NAV they create and sell shares, and when it trades below NAV they buy and redeem, and that arbitrage keeps price and NAV tightly linked.

**Which of the following statements about exchange-traded funds is NOT true?**

Forward pricing at the next computed NAV applies to open-end mutual funds, not to ETFs. An ETF order entered mid-session executes at the prevailing market price, which is the defining difference in how the two vehicles trade.

**A client in a high tax bracket holds an S&P 500 index mutual fund in a taxable account and complains about receiving capital gain distributions in years when she made no sales. Why would a comparable index ETF likely reduce this problem?**

A mutual fund meeting cash redemptions may have to sell appreciated holdings, realizing gains that are distributed to all remaining shareholders. The ETF in-kind redemption process lets the fund hand off appreciated shares without a taxable sale, which is the principal source of ETF tax efficiency. ETF dividends and any realized gains are still taxable to the holder.

**A 3x daily leveraged ETF tracks a broad index. On day one the index rises 10%, and on day two it falls 10%. Ignoring fees, what is the approximate two-day return of the index and of the leveraged ETF?**

Index: 1.10 × 0.90 = 0.99, a −1% two-day return. ETF at 3x daily: 1.30 × 0.70 = 0.91, a −9% return, far worse than 3 × (−1%) = −3%. This compounding decay from the daily reset is why leveraged and inverse ETFs are designed as short-term trading tools and are generally unsuitable as long-term holdings.

**An adviser is comparing a commodity index ETF with a commodity index ETN. Which risk is present in the ETN but essentially absent in the ETF?**

An ETN is a senior unsecured note whose return is linked to an index; it holds no portfolio of assets, so if the issuer defaults the holder is a general creditor. An ETF owns the underlying assets, so the investor is not exposed to sponsor credit risk. Both carry market risk, and ETNs do trade on an exchange.

**A closed-end fund has a net asset value of $22.50 per share and its shares trade on the NYSE at $19.35. The shares are trading at:**

Discount = (NAV − market price) ÷ NAV = ($22.50 − $19.35) ÷ $22.50 = $3.15 ÷ $22.50 = 14%. Dividing by the market price instead of NAV yields the 16.3% distractor. Unlike open-end funds, closed-end funds trade at whatever price the secondary market sets and frequently trade at a discount.
