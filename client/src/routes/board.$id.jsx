import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react';
import socket from '@/lib/socket.js';

export const Route = createFileRoute('/board/$id')({
  component: Board,
})

function Board() {
    const [content, setContent] = useState('');

    useEffect(() => {
        socket.connect();

        socket.on('connect', () => {
            console.log('Connected:', socket.id);

            socket.emit('join-room', 'test-123');
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

    const handleChange = (event) => {
        const { value } = event.target;
        console.log(value);
        setContent(value);
        socket.emit('code-change', {roomId: 'test-123', content: value});
    };

    return (
    <>
    <h2>Share Board</h2>
        <textarea
        value={content}
        placeholder='Enter text here.'
        rows={30}
        cols={50}
        className='border p-4'
        onChange={handleChange}
        />
    </>
    );
}
