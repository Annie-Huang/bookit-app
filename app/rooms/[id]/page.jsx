import rooms from '@/data/rooms.json';
import Heading from '@/components/Heading';

const RoomPage = ({ params }) => {
  const { id } = params;
  const room = rooms.find((room) => room.$id === id);

  if (!room) {
    return <Heading title='Room Not Found' />;
  }

  return <div>Room {id}</div>;
};

export default RoomPage;
