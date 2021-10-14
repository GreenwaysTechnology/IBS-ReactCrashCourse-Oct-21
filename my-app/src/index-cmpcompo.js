import React from 'react';
import ReactDOM from 'react-dom';

const Page = () => <div>
    <PageLayout />
</div>

const PageLayout = () => <div>
    <NavigationBar />
    <MainPanel />
    <Footer />
</div>

const NavigationBar = () => <div>
    <h1>Redefining travel technology
        Engage, grow, adapt - mission-critical systems for travel
    </h1>
</div>
const Footer = () => <div>
    <p>copy right @ibs</p>
</div>
const MainPanel = () => <div>
    <p>
        Embracing modern technology tears down the barriers to innovation and enables greater collaboration across the value chain. Forward-looking customer-centric systems, designed on modern architectures drive profitable and efficient business growth. While cloud-based platforms provide the flexibility to quickly adapt to rapidly changing market and consumer behavior, and deliver more brand engagement opportunities.

        From airline passenger services, air cargo management, loyalty management, to flight and crew operations, leading airlines worldwide turn to IBS Software to power their success. Our modular and mission-critical airline solutions cut across airline needs, end-to-end, so our customers can enjoy full platform integration or specific components. And that makes IBS Software unique in the travel industry.
    </p>
</div>

const App = () => {
    return <div>
        <Page />
    </div>
}
ReactDOM.render(<App />, document.getElementById('root'))