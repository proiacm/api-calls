import React, { useEffect, useState } from "react";

const Calls = () => {

const [ftMetadata, setFtMetadata] = useState([]);
const [recentTxs, setRecentTxs] = useState([]);

// https://docs.hiro.so/api
// HINT: uncomment console logs to see the data we're working with

// EXAMPLE 1: get FT metadata from Stacks API using fetch()
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

// EXAMPLE 2: get recent transactions from Stacks API using fetch()
// note: results took ~15 mins to update
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

// There are two ways we can map an array to display multiple results on a page...
// FIRST: we can set a variable to hold the mapped results which will be displayed and pass it to the return statement
const ftMetaResults = ftMetadata.map((e, i)  => {
    // console.log(e)
    return (
        <div key={i}>
            <p>
                <li>{e.name}</li>
            </p>
        </div>
    )
});

// SECOND: we can map the array directly in the return statement, see below
  return (
    <div>
        <h1>API Call Samples</h1>

        <div>
            <button onClick={() => fetchFtMetadata()}>FT Metadata</button>
            {ftMetaResults}
        </div>

        <div>
            <button onClick={() => fetchRecentTxs()}>Recent Transactions</button>
            {recentTxs.map((e, i) => 
                <div key={i}>
                    <p>
                        <li><a href={`https://explorer.stacks.co/txid/${e.tx_id}?chain=mainnet`} target="_blank" rel="noreferrer">{e.tx_id}</a></li>
                    </p>
                </div>
            )}
        </div>

    </div>
  );
};

export default Calls;