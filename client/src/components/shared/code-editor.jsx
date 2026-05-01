import Editor from '@monaco-editor/react';

const DEFAULT_LANGUAGE = 'javascript'

export const CodeEditor = ({
    language,
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
            defaultLanguage={DEFAULT_LANGUAGE}
            language={language ?? DEFAULT_LANGUAGE}
            onChange={handleChange}
            value={value || ''}
        />
    );
};