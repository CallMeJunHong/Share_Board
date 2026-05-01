import { getBoardById } from '@/common/services/index.js';
import { CodeEditor } from '@/components/shared/code-editor.jsx';
import socket from '@/lib/socket.js';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';

export const Route = createFileRoute('/board/$id')({
  component: Board,
  loader: async({ params }) => await getBoardById(params.id),
});

function Board() {
    const { id: roomId }= Route.useParams();
    const board = Route.useLoaderData();

    const [content, setContent] = useState('');

    useEffect(() => {
        socket.connect();

        socket.on('connect', () => {
            console.log('Connected:', socket.id);

            socket.emit('join-room', roomId);
        });

        socket.on('update-code', (newContent) => {
            setContent(newContent);
        });

        return () => {
            socket.off('connect');
            socket.off('update-code');
            socket.disconnect();
        };
    }, []);

    const handleChange = (value) => {
        console.log(value);
        setContent(value);
        socket.emit('code-change', {roomId, content: value});
    };


    return (
    <div className='grid gap-5'>
        <h2 className='text-2xl font-bold'>{board.roomName}</h2>
        <CodeEditor value={content} onChange={handleChange}  />
    </div>
    );
}
