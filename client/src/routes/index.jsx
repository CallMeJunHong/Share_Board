import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

import socket from '@/lib/socket.js';

export const Route = createFileRoute('/')({
  component: Index,
});


function Index() {
    const [content, setContent] = useState('');

    useEffect(() => {
        socket.connect();

        socket.emit('join-room', 'test-123');


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
        placeholder='Enter text here.'
        value={content}
        onChange={handleChange}
        style={{ width: '100%', height: '100vh' }}
        />
    </>
    );

}
