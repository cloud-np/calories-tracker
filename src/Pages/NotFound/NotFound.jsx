import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import logoIcon from '../../img/logo-icon.png';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory();

    const handleClick = () => {
        // <Redirect to="/sign-up"/>
        history.push('/sign-up');
    }

    return (
        <Container className="text-white text-center d-flex justify-content-center mt-4">
            <Card style={{ width: '22em' }} bg="dark" className="card-dark">
                <Card.Header>
                    <Card.Img src={logoIcon} style={{ width: '100px' }} />
                    <h4 className="mt-2">Error 404</h4> 
                </Card.Header>
                <Card.Body>
                   <p>The page you requested was not found</p>
                </Card.Body>
                <Card.Footer>
                    
                   <Button variant="secondary" className="block" onClick={() => handleClick() }>Go Back</Button>
                </Card.Footer>
            </Card>
        </Container>
    );
}

export default NotFound;