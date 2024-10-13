import { http, createConfig } from 'wagmi'
import { mainnet, sepolia,arbitrumSepolia, arbitrum } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'
import { ArbTestnet } from './Chain';


const projectId = '6467c18267b081ccdb07148fff803e6f';
export const config = createConfig({
  // chains: [mainnet, sepolia,arbitrumSepolia, arbitrum],
  chains: [ArbTestnet],
  connectors: [
    // injected(),
    // coinbaseWallet(),
    walletConnect({ projectId}),
  ],
  transports: {
    // [mainnet.id]: http(),
    // [sepolia.id]: http(),
    // [arbitrumSepolia.id]:http(),
    // [arbitrum.id]:http(),
    [ArbTestnet.id]:http(),
  },
})



// declare module 'wagmi' {
//   interface Register {
//     config: typeof config
//   }
// }
