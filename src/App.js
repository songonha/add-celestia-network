import React from "react";
import AddNetworkKeplr from "./components/AddNetworkKeplr";
import "./styles.css";

export const MAINNET_PARAMS = {
  chainId: "celestia",
  chainName: "Celestia",
  rpc: "https://rpc.lunaroasis.net/",
  rest: "https://api.lunaroasis.net/",
};

export const MOCHA_PARAMS = {
  chainId: "mocha-4",
  chainName: "Mocha testnet",
  rpc: "https://rpc-mocha.pops.one/",
  rest: "https://api-mocha.pops.one/",
};

export const ARABICA_PARAMS = {
  chainId: "arabica-11",
  chainName: "Arabica devnet",
  rpc: "https://rpc.celestia-arabica-11.com/",
  rest: "https://api.celestia-arabica-11.com",
};

export default function App() {
  return (
    <div className="App">
      <h1>Celestia Network Integration</h1>
      <AddNetworkKeplr params={MAINNET_PARAMS} />
      <AddNetworkKeplr params={MOCHA_PARAMS} />
      <AddNetworkKeplr params={ARABICA_PARAMS} />
    </div>
  );
}
