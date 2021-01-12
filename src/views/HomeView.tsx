import React from 'react';

import Layout from '../components/layouts/Layout';
import CategoriesList from '../components/CategoriesList';

const HomeView: React.FC = () => {

  return (
    <Layout>
      <CategoriesList />
    </Layout>
  )
}

export default HomeView;
