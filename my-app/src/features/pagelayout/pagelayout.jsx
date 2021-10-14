import React from 'react'
import { NavigationBar } from '../navigationbar/navigation';
import { MainPanel } from '../main/mainpanel'
import { Footer } from '../footer/footer';

export const PageLayout = () => <div>
    <NavigationBar />
    <MainPanel />
    <Footer />
</div>