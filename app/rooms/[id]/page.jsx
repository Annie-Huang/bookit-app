import React from 'react';

const RoomPage = ({ params }) => {
  const { id } = params;
  return <div>Room {id}</div>;
};

export default RoomPage;
