import React from "react";

function Display() {
  return <h1>hi</h1>;
}

export default Display;

/*import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const Photo = (props) => {
  console.log(props.photo);
  if (!props.photo) return <h3>Loading...</h3>;
  return (
    <div className="photo">
      <Card>
        <CardImg
          top
          width="100%"
          src={props.photo.hdurl}
          alt={props.photo.explanation}
        />
        <CardBody>
          <CardTitle>{props.photo.title}</CardTitle>
          <CardText>{props.photo.explanation} .</CardText>
          <CardText>{props.photo.date}</CardText>
          <CardText>{props.photo.copyright}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo";

const NasaPic = (props) => {
  const [photo, setPhoto] = useState();

  console.log(props);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?date=2020-07-29&api_key=5wqdQ5yxehGolrE0h0ZNEy8TERrumKxnJYewmz8J"
      )
      .then((response) => {
        console.log(response);
        setPhoto(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(photo);
  return (
    <div className="container">
      <Photo photo={photo} />
    </div>
  );
};

export default NasaPic;

export default Photo;*/
