// in src/admin/App.jsx
import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { PostList, PostCreate, PostEdit, PostShow } from './posts';
import { StudentList, StudentCreate, StudentEdit, StudentShow } from './students';
//import { UserList } from './posts';

import dataProvider from '../api/dataProvider';

const { data } = dataProvider.getList(
      'students',
      { 
          pagination: { start: 1, perPage: 10 },
          sort: { field: 'created_at', order: 'DESC' }
      }
  );
console.log("getList：",data)

// dataProvider.getOne('students', { id: 1 }).then(response => console.log("getOne:",response));

const dataProvider2 = jsonServerProvider('https://my-json-server.typicode.com/t8840/jsonserver');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="students" list={StudentList} create={StudentCreate} edit={StudentEdit} show={StudentShow} />
    <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} show={PostShow} />
{/*     <Resource name="comments" list={ListGuesser} />  */}
  </Admin>
// const App = () => (
//   <div>
//     <NFTList walletAddress={walletAddress} />
//   </div>
);

export default App;