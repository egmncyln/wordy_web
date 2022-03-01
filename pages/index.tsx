import axios from 'axios';
import { NextPage } from 'next';
import React, { useEffect } from 'react';

const Index: NextPage = () => {
  useEffect(() => {
    axios
      .get('https://egmncyln-wordy-api.herokuapp.com/logout')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);
  return <div>Index</div>;
};

export default Index;
