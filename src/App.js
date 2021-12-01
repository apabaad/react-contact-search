import logo from './logo.svg';
import './App.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useEffect, useState, useRef } from 'react';
import ContactTable from './components/ContactTable';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const searchBoxRef = useRef();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
      response.json().then((users) => {
        setContacts(users);
        setFilteredList(users);
      })
    );
  }, []);

  const handleOnChange = () => {
    const str = searchBoxRef.current.value;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(str.toLowerCase())
    );
    setFilteredList(filteredContacts);
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <div className="text-center py-2">
            <input ref={searchBoxRef} type="text" onChange={handleOnChange} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {filteredList.length ? (
            <ContactTable users={filteredList} />
          ) : (
            <h2>No Contact Found.</h2>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
