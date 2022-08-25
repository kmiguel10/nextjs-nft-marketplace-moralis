import { ConnectButton } from "@web3uikit/web3"
import Link from "next/link"

export default function Header() {
    return (
        <nav>
            <Link href="/">NFT Marketplace</Link>
            <Link href="/sell-nft">Sell NFT</Link>
            <ConnectButton />
        </nav>
    )
}
