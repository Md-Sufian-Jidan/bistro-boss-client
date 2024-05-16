import { useMemo, useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import FoodCart from '../../../Components/FoodCart/FoodCart';

const Order = () => {
    const { menu } = useMenu();
    const dessert = menu?.filter(item => item?.category === 'dessert');
    const soups = menu?.filter(item => item?.category === 'soup');
    const salads = menu?.filter(item => item?.category === 'salad');
    const pizzas = menu?.filter(item => item?.category === 'pizza');
    const offered = menu?.filter(item => item?.category === 'offered');
    const [tabIndex, setTabIndex] = useState();
    return (
        <div>
            <Cover img={orderCover} title="Order Food" />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="flex items-center justify-center gap-5 my-5">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                        {
                            salads?.map(item => <FoodCart key={item?._id} item={item}></FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;