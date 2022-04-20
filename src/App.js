import React from 'react';

// Carousel Component
import Carousel from './components/Carousel/Carousel';

// Quote component and plugins
import Quote from './components/Quote/Quote';

// Accordion component and plugins
import Accordion from './components/Accordion/Accordion';

function App() {
    return (
        <div className="App">
            <Carousel/>
            <Accordion />
            <Quote />
        </div>
    );
}

export default App;