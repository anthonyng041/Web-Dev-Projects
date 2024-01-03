import React from "react";
import contacts from "../contacts";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar imgURL={props.imgURL} />
      </div>
      <div className="bottom">
        <Detail info={props.phone} />
        <Detail info={props.email} />
      </div>
    </div>
  );
}

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      <Card
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
