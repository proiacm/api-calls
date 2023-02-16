import React, { useEffect, useState } from "react";
import { connectWebSocketClient } from '@stacks/blockchain-api-client';
import { userSession } from "./ConnectWallet";

const Calls = () => {

const [ftMetadata, setFtMetadata] = useState([]);
const [recentTxs, setRecentTxs] = useState([]);
const [myNfts, setMyNfts] = useState([]);
const [mempoolEventID, setMempoolEventID] = useState();
const [showHiddenButton, setShowHiddenButton] = useState(false);

// useEffect fixes hydration issue
useEffect(() => {
    if (userSession.isUserSignedIn()) {
        setShowHiddenButton(true);
    }
}, [userSession]);

// https://docs.hiro.so/api
// https://hirosystems.github.io/stacks-blockchain-api/client/

// HINT: uncomment console logs to see the data we're working with

// EXAMPLE 1: get NFT holdings for current user using wallet connect and fetch() (note: user must be logged in to see button and results)
const fetchNftHoldings = async () => {
    // store logged in user's address in a variable
    const userAddress = `${userSession.loadUserData().profile.stxAddress.mainnet}`;
    // wait for response from API (note: this endpoint has a required query parameter of principal)
    await fetch(
        `https://stacks-node-api.mainnet.stacks.co/extended/v1/tokens/nft/holdings?principal=${userAddress}`
    )
        // convert response to JSON
        .then((response) => response.json())
        // set state with the results
        .then((data) => {
        // console.log(data)
        setMyNfts(data.results);
        });

}

// EXAMPLE 2: get FT metadata from Stacks API using fetch()
const fetchFtMetadata = async () => {
    // wait for response from API
    await fetch(
        "https://stacks-node-api.mainnet.stacks.co/extended/v1/tokens/ft/metadata"
    )
        // convert response to JSON
        .then((response) => response.json())
        // set state with the first 5 results
        .then((data) => {
        // console.log(data)
        setFtMetadata(data.results.slice(0, 5));
        });
};

// EXAMPLE 3: get recently mined transactions from Stacks API using fetch()
// note: results took ~15 mins to grab new data on click
const fetchRecentTxs = async () => {
    // wait for response from API (note: this endpoint utilizes optional query parameter of limit=5)
    await fetch(
        "https://stacks-node-api.mainnet.stacks.co/extended/v1/tx?limit=5"
    )
        // convert response to JSON
        .then((response) => response.json())
        // set state with the results
        .then((data) => {
        // console.log(data)
        setRecentTxs(data.results);
        });
};

// EXAMPLE 4: subscribe to mempool events using websocket: sent every time a new transaction is submitted to the mempool
const watchMempool = async () => {
    // console.log("Subscribing to mempool events...")

    // connect to websocket
    const client = await connectWebSocketClient('wss://stacks-node-api.mainnet.stacks.co/');

    // subscribe to mempool events and set state to each new event ID (note: this will display a new event ID every time a new transaction is submitted to the mempool)
    client.subscribeMempool(event => {
        // console.log(event)
        setMempoolEventID(event.tx_id);
    });
}

// There are two ways we can map an array to display multiple results on a page...
// FIRST: we can set a variable to hold the mapped results which will be displayed and pass it to the return statement
const ftMetaResults = ftMetadata.map((e, i)  => {
    // console.log(e)
    return (
        <div key={i}>
            <p>
                <li className="text-sm">{e.name}</li>
            </p>
        </div>
    )
});

// SECOND: we can map the array directly in the return statement, see below
  return (
    <div className="flex flex-col">
        {showHiddenButton && 
            <div className="p-5">
                <button type="button" className="text-white bg-gray-700 hover:bg-gray-800 rounded-lg text-sm px-3 py-2.5 mr-2 mb-2"
                onClick={() => fetchNftHoldings()}
                >
                    Show my NFTs
                </button>
                {myNfts.map((e, i) => 
                    <div key={i}>
                        <p>
                            <li className="text-sm">{e.asset_identifier.split(":")[2]}</li>
                        </p>
                    </div>
                )}
            </div>
        }

        <div className="p-5">
            <button type="button" className="text-white bg-gray-700 hover:bg-gray-800 rounded-lg text-sm px-3 py-2.5 mr-2 mb-2"
            onClick={() => fetchFtMetadata()}
            >
                FT Metadata
            </button>
            {ftMetaResults}
        </div>

        <div className="p-5">
            <button type="button" className="text-white bg-gray-700 hover:bg-gray-800 rounded-lg text-sm px-3 py-2.5 mr-2 mb-2"
            onClick={() => fetchRecentTxs()}
            >
                Recent Transactions
            </button>
            {recentTxs.map((e, i) => 
                <div key={i}>
                    <p>
                        <li><a className="text-sm underline text-blue-500" href={`https://explorer.stacks.co/txid/${e.tx_id}?chain=mainnet`} target="_blank" rel="noreferrer">{e.tx_id}</a></li>
                    </p>
                </div>
            )}
        </div>

        <div className="p-5">
            <button type="button" className="text-white bg-gray-700 hover:bg-gray-800 rounded-lg text-sm px-3 py-2.5 mr-2 mb-2"
            onClick={() => watchMempool()}
            >
                Subscribe to Mempool Events
            </button>
            <p>
                <a className="text-sm underline text-blue-500" href={`https://explorer.stacks.co/txid/${mempoolEventID}?chain=mainnet`} target="_blank" rel="noreferrer">{mempoolEventID}</a>
            </p>
        </div>
    </div>
  );
};

export default Calls;