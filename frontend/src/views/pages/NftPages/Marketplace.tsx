import React, {useEffect} from 'react';

import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';

import useDocumentTitle from '../../../components/useDocumentTitle';
import MenuCategoriesMarket from '../elements/MenuCategoriesMarket';
import Hero1 from "../../../components/hero/Hero1";
import {BigNumber, Transaction} from "ethers";
import PeonContract from "../../../peoncontract";

export default function Marketplace(props: {
    userAddress: string | null,
    onLogout: () => void,
    onLogin: () => void,
    balance: number,
    tokenBalance: number,
    peonLeftToMin: number,
    costToMint: number,
    mintedPeon: number,
    totalCapPeon: number,
    marketPeons: number[],
    userPeons: number[],
    userBids: number[],
    recentMinted: number[],
    reload: (tx: Transaction) => void,
    mintFee: BigNumber
    mint: () => void,
    assetToken: string,
    contract: PeonContract,
    isAdmin: boolean
}) {
    useDocumentTitle('PeonFam - Marketplace');
    return (
        <div>
            <Header userAddress={props.userAddress}
                    onLogout={props.onLogout}
                    onLogin={props.onLogin}
                    balance={props.balance}
                    tokenBalance={props.tokenBalance}
                    isAdmin={props.isAdmin}
            />
            <Hero1
                assetToken={props.assetToken}
                peonLeftToMin={props.peonLeftToMin}
                costToMint={props.costToMint}
                mintedPeon={props.mintedPeon}
                totalCapPeon={props.totalCapPeon}
                reload={props.reload}
                userAddress={props.userAddress}
                mintFee={props.mintFee}
                mint={props.mint}
            />
            <div className="d-flex justify-content-center">
                <MenuCategoriesMarket contract={props.contract} assetToken={props.assetToken} marketPeons={props.marketPeons} recentMinted={props.recentMinted}
                                      userBids={props.userBids} userPeons={props.userPeons}
                                      userAddress={props.userAddress} reload={props.reload}/>
            </div>
            <Footer/>
        </div>
    );
};
