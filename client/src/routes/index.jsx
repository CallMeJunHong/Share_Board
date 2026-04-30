import { Button } from '@/components/ui/button.jsx';
import { createFileRoute } from '@tanstack/react-router';
import { CreateBoardModal } from '@/components/shared/create-board-modal.jsx';
import { useState } from 'react';


export const Route = createFileRoute('/')({
  component: Index,
});


function Index() {

    const [isCreateModalOpen, setCreateModalOpen] = useState(false);

    const toggleCreateModal = () => {
        setCreateModalOpen((prevState) => !prevState);
    }

    return (
        <>
            <Button onClick={toggleCreateModal}>Create Room</Button>

            <CreateBoardModal isOpen={isCreateModalOpen} onClose={toggleCreateModal} />
        </>
    );

}
