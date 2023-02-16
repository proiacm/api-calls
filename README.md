## Created for Stacks Clarity Camp to demo how to make various API calls from the client :phone:

Run locally:

```
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Stacks API docs :notebook:
- [https://docs.hiro.so/api](https://docs.hiro.so/api)
- [https://hirosystems.github.io/stacks-blockchain-api/client/](https://hirosystems.github.io/stacks-blockchain-api/client/)

## Further details for each example :mag:

All requests are submitted `onClick` of corresponding button.

Example 1:

Requires user login via `ConnectWallet` using the [Hiro Wallet](https://wallet.hiro.so/) browser extension. The button is set to display conditionally depending on whether a user is logged in.

Makes a `fetch()` request to Non-Fungible Token holdings API endpoint and retrieves the list of nonfungible tokens owned by the given principal. `principal` is a required query parameter for this endpoint which is passed via string interpolation.

Results array is then set with `useState` for display on the page.

Example 2:

Makes a `fetch()` request to fungible tokens metadata list endpoint and retrieves list of fungible tokens on Stacks with their metadata.

Results array is then set with `useState` for display on the page. This endpoint has an optional `limit` query parameter, however we are grabbing all results and demonstrating how to limit the array elements displayed using `slice`.

Example 3:

Makes a `fetch()` request to get recent transactions endpoint and retrieves list of recently mined transactions. This endpoint has an optional `limit` query parameter, here we set a limit of 5 via the query directly.

Results array is then set with `useState` for display on the page.

Example 4:

Uses `websocket` to subscribe to mempool updates. This is sent every time a new transaction is submitted.

We then grab the `event ID` from the results and set with `useState` for display on the page. This will auto update to display a new `event ID` each time a new tx is submitted and read by the subscription.
