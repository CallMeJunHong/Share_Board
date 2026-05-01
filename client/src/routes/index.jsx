import { Button } from '@/components/ui/button.jsx';
import { createFileRoute } from '@tanstack/react-router';
import { CreateBoardModal } from '@/components/shared/create-board-modal.jsx';
import { useState } from 'react';
import { getAllBoards } from '../common/services';
import { Link } from '@tanstack/react-router';


export const Route = createFileRoute('/')({
  component: Index,
  loader: async() => getAllBoards(),
});


function Index() {

    const allBoards = Route.useLoaderData();

    const [isCreateModalOpen, setCreateModalOpen] = useState(false);

    const toggleCreateModal = () => {
        setCreateModalOpen((prevState) => !prevState);
    }

    console.log(allBoards);

    return (
        <>
            <Button 
                className="bg-black text-white py-2 px-5 rounded shadow-md"
                onClick={toggleCreateModal}>Create Room</Button>
            <CreateBoardModal isOpen={isCreateModalOpen} onClose={toggleCreateModal} />

            <div className='grid gap-5 my-10'>
                {(allBoards || []).map((board) => (
                    <div key={board._id} className='p-3 border shadow rounded flex items-center justify-between flex-wrap'>
                        <h2 className='text-2xl'>{board.roomName}</h2>
                        <Link 
                            className="bg-black text-white py-2 px-5 rounded shadow-md" 
                            to="/board/$id" 
                            params={{id: board.roomId}}>Join Room</Link>
                    </div>
                ))}
            </div>
        </>
    );

}
