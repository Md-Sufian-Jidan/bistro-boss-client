import { useMemo, useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import FoodCart from '../../../Components/FoodCart/FoodCart';
import OrderTab from '../OrderTab/OrderTab';

const Order = () => {
    const { menu } = useMenu();
    const dessert = menu?.filter(item => item?.category === 'dessert');
    const soups = menu?.filter(item => item?.category === 'soup');
    const salads = menu?.filter(item => item?.category === 'salad');
    const pizzas = menu?.filter(item => item?.category === 'pizza');
    const drinks = menu?.filter(item => item?.category === 'drinks');
    const [tabIndex, setTabIndex] = useState();
    return (
        <div>
            <Cover img={orderCover} title="Order Food" />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <div className="flex items-center justify-center gap-5 mt-5">
                        <Tab>Salads</Tab>
                        <Tab>Pizzas</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </div>
                </TabList>
                <TabPanel>
                    <OrderTab items={salads} />
                </TabPanel>
                <TabPanel><OrderTab items={pizzas} /></TabPanel>
                <TabPanel><OrderTab items={soups} /></TabPanel>
                <TabPanel><OrderTab items={dessert} /></TabPanel>
                <TabPanel><OrderTab items={drinks} /></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;