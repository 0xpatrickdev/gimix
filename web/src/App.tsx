import { ToastContainer } from "react-toastify";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { NetworkDropdown } from "./components/NetworkDropdown";
import { WalletConnectButton } from "./components/WalletConnectButton";
import { Tabs } from "./components/Tabs";
import { Button } from "./components/Button";
// import { useNetwork } from "./hooks/useNetwork";
// import { useWallet } from "./hooks/useWallet";

const App = () => {
  // const { netName } = useNetwork();
  // const { walletAddress, stargateClient } = useWallet();

  return (
    <div className="flex flex-col min-h-screen">
      <Nav
        title="GiMiX"
        showLogo={false}
        rightContent={
          <>
            <div className="mr-6 relative">
              <NetworkDropdown />
            </div>
            <WalletConnectButton theme="white" />
          </>
        }
      />
      <main className="flex-grow mx-auto max-w-7xl min-w-full py-6 sm:px-6 lg:px-8">
        <Tabs
          tabs={[
            {
              title: "Propose Bounty",
              action: "propose",
              content: (
                <div className="flex flex-row justify-center mb-6 mt-4 ">
                  <Button
                    Icon={null}
                    text="Login with GitHub"
                    theme="dark"
                    layoutStyle="flex w-1/4"
                    onClick={() => (window.location.href = "/api/login/github")}
                  />
                </div>
              ),
            },
            {
              title: "Claim Bounty",
              action: "claim",
              content: (
                <div className="flex flex-row justify-center mb-6 mt-4 ">
                  <Button
                    Icon={null}
                    text="Login with GitHub"
                    theme="dark"
                    layoutStyle="flex w-1/4"
                    onClick={() => (window.location.href = "/api/login/github")}
                  />
                </div>
              ),
            },
          ]}
        />
      </main>
      <Footer />
      <ToastContainer
        autoClose={false}
        position="bottom-right"
        closeOnClick={false}
        closeButton={true}
        bodyClassName="text-sm font-medium text-gray-900"
      />
    </div>
  );
};

export default App;