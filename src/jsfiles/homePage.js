import React from 'react';
import Menu from './Menu';
import Test3 from '../listItems/Test3';
import Search from './Search';

function homePage() {


    return (

        <div style={{backgroundColor: 'rgb(229, 233, 233)'}}>
                <Search />
                <Menu />
                <br/>
                <Test3 />



        </div>
    );
}

export default homePage;
