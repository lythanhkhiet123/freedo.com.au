import React from "react";
import { render } from "react-dom";
import Pagination from "react-paginating";
import Items from './Items';
import { Card, Button } from 'react-bootstrap';
import '../cssfiles/ItemsContainer.css';

const fruits = [
 
    ["./slide_2.jpg", "./slide_2.jpg", "./slide_2.jpg", "./slide_2.jpg","./slide_2.jpg"],
    ["orange4", "orange5", "orange6"],
    ["coconut", "blueberry"],
    ["payaya", "peach"],
    ["pear", "plum"]
];
const limit = 2;
const pageCount = 5;
const total = fruits.length * limit;

class Test extends React.Component {
    constructor() {
      super();
        this.state = {
            currentPage: 1
        };
    }

    handlePageChange = (page, e) => {
        this.setState({
            currentPage: page
        });
    };

    render() {
        const { currentPage } = this.state;
        return (
            <div>
                <ul>
                    <div className='listItems'>
                        {fruits[currentPage - 1].map(item => (

                            

                            <Items src={item} title='Card Title' text=' Some quick example text to build on the card title and make up the bulk of the cards content.'/>
                        
                    ))}
                    </div>
                </ul>
                            <ul>
                                {fruits[currentPage - 1].map(item => <li key={item}>{item}</li>)}
                            </ul>
                <Pagination
                    total={total}
                    limit={limit}
                    pageCount={pageCount}
                    currentPage={currentPage}
                >
                    {({ pages,
                        currentPage,
                        hasNextPage,
                        hasPreviousPage,
                        previousPage,
                        nextPage,
                        totalPages,
                        getPageItemProps }) => (
                            <div>
                                <button
                                    {...getPageItemProps({
                                        pageValue: 1,
                                        onPageChange: this.handlePageChange
                                    }) }
                                >
                                    first
              </button>

                                {hasPreviousPage && (
                                    <button
                                        {...getPageItemProps({
                                            pageValue: previousPage,
                                            onPageChange: this.handlePageChange
                                        }) }
                                    >
                                        {"<"}
                                    </button>
                                )}

                                {pages.map(page => {
                                    let activePage = null;
                                    if (currentPage === page) {
                                        activePage = { backgroundColor: "#fdce09" };
                                    }
                                    return (
                                        <button
                                            {...getPageItemProps({
                                                pageValue: page,
                                                key: page,
                                                style: activePage,
                                                onPageChange: this.handlePageChange
                                            }) }
                                        >
                                            {page}
                                        </button>
                                    );
                                })}

                                {hasNextPage && (
                                    <button
                                        {...getPageItemProps({
                                            pageValue: nextPage,
                                            onPageChange: this.handlePageChange
                                        }) }
                                    >
                                        {">"}
                                    </button>
                                )}

                                <button
                                    {...getPageItemProps({
                                        pageValue: totalPages,
                                        onPageChange: this.handlePageChange
                                    }) }
                                >
                                    last
              </button>
                            </div>
                        )}
                </Pagination>
            </div>
        );
    }
}

export default Test;