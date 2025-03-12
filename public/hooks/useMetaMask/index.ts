import { useState, useEffect } from "react";
import { BrowserProvider, JsonRpcSigner, formatEther, parseEther } from "ethers";

interface MetaMaskState {
    account: string | null;
    balance: string | null;
    connectWallet: () => Promise<void>;
    sendTransaction: (to: string, amount: string) => Promise<void>;
    signer: JsonRpcSigner | null;
}

const useMetaMask = (): MetaMaskState => {
    const [account, setAccount] = useState<string | null>(null);
    const [balance, setBalance] = useState<string | null>(null);
    const [provider, setProvider] = useState<BrowserProvider | null>(null);
    const [signer, setSigner] = useState<JsonRpcSigner | null>(null);

    // 初始化 provider，并恢复 sessionStorage 中的 account
    useEffect(() => {
        if (typeof window !== "undefined" && window.ethereum) {
            const newProvider = new BrowserProvider(window.ethereum);
            setProvider(newProvider);

            // 读取 sessionStorage 中的账户
            const savedAccount = sessionStorage.getItem("walletAddress");
            if (savedAccount) {
                setAccount(savedAccount);
                fetchBalance(savedAccount, newProvider);
            }
        } else {
            console.log("MetaMask 未安装");
        }
    }, []);

    // 连接 MetaMask
    const connectWallet = async () => {
        if (!provider) {
            alert("请安装 MetaMask！");
            return;
        }
        try {
            const accounts: string[] = await window.ethereum.request({ method: "eth_requestAccounts" });
            const newSigner = await provider.getSigner();
            setAccount(accounts[0]);
            setSigner(newSigner);

            // 存储到 sessionStorage
            sessionStorage.setItem("walletAddress", accounts[0]);

            // 获取余额
            fetchBalance(accounts[0], provider);
        } catch (error) {
            console.error("连接钱包失败:", error);
        }
    };

    // 获取账户余额
    const fetchBalance = async (walletAddress: string, provider: BrowserProvider) => {
        try {
            const balance = await provider.getBalance(walletAddress);
            setBalance(formatEther(balance)); // 转换为 ETH 格式
        } catch (error) {
            console.error("获取余额失败:", error);
        }
    };

    // 发送 MATIC 交易
    const sendTransaction = async (to: string, amount: string) => {
        if (!signer) {
            alert("请先连接钱包！");
            return;
        }

        try {
            const tx = await signer.sendTransaction({
                to,
                value: parseEther(amount),
            });
            console.log("交易发送成功:", tx);
            alert(`交易成功！交易哈希: ${tx.hash}`);
        } catch (error) {
            console.error("交易失败:", error);
        }
    };

    // 监听账户切换
    useEffect(() => {
        if (typeof window !== "undefined" && window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts: string[]) => {
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                    sessionStorage.setItem("walletAddress", accounts[0]);
                    fetchBalance(accounts[0], provider!);
                } else {
                    sessionStorage.removeItem("walletAddress");
                    setAccount(null);
                    setBalance(null);
                }
            });
        }
    }, [provider]);

    return { account, balance, connectWallet, sendTransaction, signer };
};

export default useMetaMask;
