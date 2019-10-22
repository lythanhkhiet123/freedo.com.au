import React from 'react';
import Test2 from './Test2';
import Items from './Items';

class Test3 extends React.Component {
    constructor() {
        super();
        var fruits = [{ src: './slide_2.jpg', title: 'Card Title', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_4.jpg', title: 'Card Title 2', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_2.jpg', title: 'Card Title 3', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_4.jpg', title: 'Card Title 4', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_4.jpg', title: 'Card Title 5', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_2.jpg', title: 'Card Title 6', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_4.jpg', title: 'Card Title 7', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_4.jpg', title: 'Card Title 8', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_2.jpg', title: 'Card Title 9', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_4.jpg', title: 'Card Title 10', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_4.jpg', title: 'Card Title 11', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_2.jpg', title: 'Card Title 12', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_4.jpg', title: 'Card Title 13', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_4.jpg', title: 'Card Title 14', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_2.jpg', title: 'Card Title 15', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_4.jpg', title: 'Card Title 16', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_4.jpg', title: 'Card Title 17', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_4.jpg', title: 'Card Title 18', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_2.jpg', title: 'Card Title 19', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_4.jpg', title: 'Card Title 20', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_4.jpg', title: 'Card Title 21', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_2.jpg', title: 'Card Title 22', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_4.jpg', title: 'Card Title 23', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_2.jpg', title: 'Card Title 24', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
            { src: './slide_4.jpg', title: 'Card Title 25', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },


        ];

        // an example array of 150 items to be paged
        var exampleItems = [...Array(150).keys()].map(i => ({ id: (i + 1), name: 'Item ' + (i + 1) }));

        this.state = {
            fruits: fruits,
            pageOfItems: []
        };

        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        return (

                <div className="container">
                    <div className="text-center">
                        <h1>React - Pagination Example with logic like Google</h1>
                        <div className='listItems'>
                        {this.state.pageOfItems.map(item =>
                            
                                <Items src={item.src} title={item.title} text={item.text} />
                           
                        )}
                            </div>
                        <Test2 items={this.state.fruits} onChangePage={this.onChangePage} />
                    </div>
                </div>

        );
    }
}

export default Test3;