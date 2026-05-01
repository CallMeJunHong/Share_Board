import { getBoardById } from '@/common/services/index.js';
import { CodeEditor } from '@/components/shared/code-editor.jsx';
import { LanguageSelector } from '@/components/shared/language-selector.jsx';
import socket from '@/lib/socket.js';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/board/$id')({
  component: Board,
  loader: async({ params }) => await getBoardById(params.id),
});

function Board() {
    const { id: roomId }= Route.useParams();
    const board = Route.useLoaderData();

    const [content, setContent] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('javascript');

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

    const handleChange = (event) => {
        const { value } = event.target;
        console.log(value);
        setContent(value);
        socket.emit('code-change', {roomId, content: value});
    };


    const handleLanguageSelector = (language) => {
        setSelectedLanguage(language);
    }
    return (
    <>
        <h1>{board.name}</h1>

        <LanguageSelector 
            value={selectedLanguage}
            onChange={handleLanguageSelector}/>

        <CodeEditor language={selectedLanguage} value={content} onChange={handleChange}  />
    </>
    );
}
