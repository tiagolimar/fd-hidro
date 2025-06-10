import React from 'react'
import Card from './../components/Card';
import CardContainer from '../components/CardContainer';

const Home = () => {
  return (
    <CardContainer>
      <Card className="flex justify-center items-center">
        <img width="50" height="50" src="https://img.icons8.com/ios/50/add--v1.png" alt="add--v1"/>
      </Card>

    </CardContainer>
  )
}

export default Home