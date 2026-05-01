import Editor from '@monaco-editor/react';

export const CodeEditor = ({
    value,
    height = '60vh',
    onChange
}) => {

    const handleChange = (value) => {
        if(onChange) {
            onChange(value);
        }
    };
    
    return (
        <Editor
            theme='vs-dark'
            height={height}
            onChange={handleChange}
            value={value || ''}
        />
    );
};