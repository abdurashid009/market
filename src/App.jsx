import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import InfoCard from './components/InfoCard';
import { users, infoCards } from './components/data';

const App = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredInfo = infoCards.filter((info) =>
    info.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar setSearchTerm={setSearchTerm} />
      <div className="p-10">
        <h1 className="text-3xl font-bold text-start mb-8">Products</h1>
        <div className="flex flex-wrap justify-center gap-20 mb-12">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              aksiya={user.aksiya}
              img={user.img}
              name={user.name}
              price={user.price}
              reting={user.reting}
            />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-20 mb-12">
          {filteredInfo.map((info) => (
            <InfoCard
              key={info.id}
              aksiya={info.aksiya}
              img={info.img}
              name={info.name}
              price={info.price}
              reting={info.reting}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
