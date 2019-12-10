import React from 'react';
import Test2 from './Test2';
import Items from './Items';
import '../cssfiles/ItemsContainer.css';

class Test3 extends React.Component {
    constructor() {
        super();
        var fruits = [
            { id: 1, src: './images/1.png', title: '2.5 seater couch giveaway. Needs a clean but in good condition.', description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',text: 'Oakleigh Victoria' },
            { id: 2, src: './images/2.png', title: 'Card Title 2', description: '1 Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' ,text: 'Burwood Victoria.' },
            { id: 3, src: './images/3.jpg', title: 'Card Title 3', description: '2 Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', text: 'Melbourne CBD Victoria' },
            { id: 4, src: './images/2.jpg', title: 'Card Title 4', description: '3Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', text: 'Suburbs Victoria' },
            { id: 5,src: './images/1.jpg', title: 'Card Title 5', description: '4Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',text: 'Suburbs NSW' },
            { id: 6,src: './images/4.jpg', title: 'Card Title 6', description: '5Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',text: 'Suburbs NSW' },
            { id: 7,src: './images/5.jpg', title: 'Card Title 7', description: '6Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',text: 'Suburbs QLD' },
            { id: 8,src: './images/6.jpg', title: 'Card Title 8', description: '7Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',text: 'Suburbs TAS' },
            { id: 9,src: './images/2.png', title: 'Card Title 9', description: '8Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',text: 'Suburbs TAS' },
            { id: 10,src: './images/8.jpg', title: 'Card Title 10', description: '9Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',text: 'Suburbs SA' },
            { id: 11,src: './images/1.jpg', title: 'Card Title 11', description: '10Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',text: 'Suburbs SA' },
            { id: 12,src: './images/2.jpg', title: 'Card Title 12', description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',text: 'Suburbs WA' },
            { id: 13,src: './images/3.jpg', title: 'Card Title 13', description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',text: 'Suburbs WA' },
            { id: 14,src: './images/4.jpg', title: 'Card Title 14', description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',text: 'Suburbs Victoria' },
            { id: 15,src: './images/5.jpg', title: 'Card Title 15', description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',text: 'Suburbs Victoria' },
            { id: 16,src: './images/6.jpg', title: 'Card Title 16', description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',text: 'Suburbs Victoria' },
            { id: 17,src: './images/7.jpg', title: 'Card Title 17', description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',text: 'Suburbs Victoria' },
            { id: 18,src: './images/8.jpg', title: 'Card Title 18', description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',text: 'Suburbs Victoria' },
            { id: 19,src: './images/1.jpg', title: 'Card Title 19', description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',text: 'Suburbs Victoria' },
            { id: 20,src: './images/2.jpg', title: 'Card Title 20', description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',text: 'Suburbs Victoria' },
            { id: 21,src: './images/3.jpg', title: 'Card Title 21', description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',text: 'Suburbs Victoria' },
            { id: 22,src: './images/4.jpg', title: 'Card Title 22', description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',text: 'Suburbs Victoria' },
            { id: 23,src: './images/5.jpg', title: 'Card Title 23', description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',text: 'Suburbs Victoria' },
            { id: 24,src: './images/6.jpg', title: 'Card Title 24', description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',text: 'Suburbs Victoria' },
            { id: 25, src: './images/7.jpg', title: 'Card Title 25', description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',text: 'Suburbs Victoria' },


        ];

        // an example array of 150 items to be paged

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
                    <a href='https://tenor.com/view/slideshow-blinking-ilove-you-gif-11872694'>
                        <img src={require('./images/1.gif')} width='79%' height='100px' alt='1 ' />
                    </a>
                    <br/><br/>
                    <div className='listItems'>
                        
                        {this.state.pageOfItems.map(item =>

                            <Items id={item.id} description={item.description} src={item.src} title={item.title} text={item.text} />
                           
                        )}
                        
                        </div>

                        <Test2 items={this.state.fruits} onChangePage={this.onChangePage} />
                    </div>
            </div>
        );
    }
}

export default Test3;