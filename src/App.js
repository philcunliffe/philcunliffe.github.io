import './App.css';
import "@cloudscape-design/global-styles/index.css";
import Input from "@cloudscape-design/components";
import React, { useState } from 'react';

function App() {
  const [numMembers, setNumMembers] = useState(30);
  const [montlyFee, setMonthlyFee] = useState(55);
  const [averageHourlyRentalFee, setAverageHourlyRentalFee] = useState(25);
  const [openHoursPerDay, setOpenHoursPerDay] = useState(30);
  const [memberHoursBookedPerMonth, setMemberHoursBookedPerMonth] = useState(30);

  return (
    <SpaceBetween size="m">
      <Header variant="h1">Hello World!</Header>

      <Container>
        <SpaceBetween size="s">
          <span>Start editing to see some magic happen</span>
          <Input
            value={value}
            onChange={(event) => setValue(event.detail.value)}
          />
          <Button variant="primary">Click me</Button>
        </SpaceBetween>
      </Container>
    </SpaceBetween>
  );
}

export default App;
