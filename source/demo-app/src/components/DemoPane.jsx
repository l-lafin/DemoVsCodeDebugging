import React from 'react';
import useAxios from 'axios-hooks';
import { Box } from '@material-ui/core';
import { BusyIndicator } from './BusyIndicator';
import { SelectHero } from './SelectHero';

export const DemoPane = () => {
  const [{ data, loading }] = useAxios('https://localhost:5001/api/heros');

  // wait until the data is retrieved
  if (loading) {
    return <BusyIndicator />;
  }

  return (
    <Box>
      <SelectHero label={'Marvel heros'} options={data} />
    </Box>
  );
};
