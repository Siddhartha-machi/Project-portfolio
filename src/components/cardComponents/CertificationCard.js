import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function CertificationCard(props) {
    return (
        <Card  variant={"filled"}>
        <CardHeader>
          <Heading size='md'>Title : {props.data.title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>Duration : {props.data.duration}</Text>
          <Text>Platform : {props.data.platform}</Text>
        </CardBody>
      </Card>
    );
}

export default CertificationCard;