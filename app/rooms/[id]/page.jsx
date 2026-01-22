import rooms from '@/data/rooms.json';
import Heading from '@/components/Heading';

const RoomPage = ({ params }) => {
  const { id } = params;
  // console.log(rooms);
  const room = rooms.find((room) => room.id === id); // I got confused why it does not need the room.$id in here??

  if (!room) {
    return <Heading title='Room Not Found' />;
  }

  return <div>Room {id}</div>;
};

export default RoomPage;
