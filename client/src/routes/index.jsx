import { Button } from '@/components/ui/button.jsx';
import { createFileRoute } from '@tanstack/react-router';
import { CreateBoardModal } from '@/components/shared/create-board-modal.jsx';
import { useState } from 'react';
import { getAllBoards } from '../common/services';


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
            <Button onClick={toggleCreateModal}>Create Room</Button>

            <CreateBoardModal isOpen={isCreateModalOpen} onClose={toggleCreateModal} />
        </>
    );

}
