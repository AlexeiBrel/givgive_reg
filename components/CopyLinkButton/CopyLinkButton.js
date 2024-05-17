import { useState } from 'react';
import cl from './CopyLinkButton.module.scss';

const CopyLinkButton = ({ url }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset copied status after 2 seconds
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    };

    return (
        <button className={cl.btn} onClick={copyToClipboard}>
            {copied ? 'Link copied!' : 'Copy link'}
        </button>
    );
};

export default CopyLinkButton;
