import React from "react";
import styles from "./Keplr.module.css";

export default function AddNetworkKeplr({ params }) {
  async function add() {
    if (!window.keplr) {
      alert("Please install the Keplr extension");
    } else {
      if (window.keplr.experimentalSuggestChain) {
        try {
          await window.keplr.experimentalSuggestChain({
            chainId: params.chainId,
            chainName: params.chainName,
            rpc: params.rpc,
            rest: params.rest,
            bip44: {
              coinType: 118,
            },
            bech32Config: {
              bech32PrefixAccAddr: "celestia",
              bech32PrefixAccPub: "celestiapub",
              bech32PrefixValAddr: "celestiavaloper",
              bech32PrefixValPub: "celestiavaloperpub",
              bech32PrefixConsAddr: "celestiavalcons",
              bech32PrefixConsPub: "celestiavalconspub",
            },
            currencies: [
              {
                coinDenom: "TIA",
                coinMinimalDenom: "utia",
                coinDecimals: 6,
                coinGeckoId: "celestia",
              },
            ],
            feeCurrencies: [
              {
                coinDenom: "TIA",
                coinMinimalDenom: "utia",
                coinDecimals: 6,
                coinGeckoId: "celestia",
                gasPriceStep: {
                  low: 0.01,
                  average: 0.02,
                  high: 0.1,
                },
              },
            ],
            stakeCurrency: {
              coinDenom: "TIA",
              coinMinimalDenom: "utia",
              coinDecimals: 6,
              coinGeckoId: "celestia",
            },
          });
          alert(`${params.chainName} added successfully!`);
        } catch {
          alert("Failed to suggest the chain");
        }
      }
      const chainId = params.chainId;
      await window.keplr.enable(chainId);
    }
  }

  return (
    <div className={styles.center}>
      <button className={styles.keplrButton} onClick={add}>
        Add/switch To {params.chainName}
      </button>
    </div>
  );
}
