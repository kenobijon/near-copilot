import {
    setupWalletSelector,
    type WalletSelector,
} from "@near-wallet-selector/core";
import { setupModal } from "@near-wallet-selector/modal-ui";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";
import { setupMeteorWallet } from "@near-wallet-selector/meteor-wallet";

export const setupSelector = () => {
    return setupWalletSelector({
        network: "mainnet",
        modules: [
            setupNearWallet({
                successUrl: `${window.location.protocol}//${window.location.host}/loggedin`,
            }),
            setupMyNearWallet({
                successUrl: `${window.location.protocol}//${window.location.host}/loggedin`,
            }),
            // setupHereWallet(),
            // setupMeteorWallet(),
        ],
    });
};

export const setupModalSelector = (selector: WalletSelector) => {
    return setupModal(selector, {
        contractId: process.env.NEXT_PUBLIC_CONTRACT_ACCOUNT_ID ?? "social.near",
    });
};
// Add error handling for unhandled promise rejection
window.addEventListener("unhandledrejection", (event) => {
    console.log("This is happening!!!!")
    console.error("Unhandled Promise Rejection:", event.reason);
});
