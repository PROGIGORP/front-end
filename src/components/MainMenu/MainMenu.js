import React, { useState, useEffect } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class MainMenuItem {
    constructor(text, link) {
        this.text = text;
        this.link = link;
    }
}

function MainMenu({ items }) {
    const [itemList, setItemList] = useState(items);
    
    const createNavLink = (item) => {
        return (
            <Link key={item.text} to={item.link} className='nav-link'>{item.text}</Link>
        );
    }
    
    return (
        <Container>
            <Nav variant='tabs'>
                {itemList.map(createNavLink)}
            </Nav>
        </Container>
    );

}

export default MainMenu;
