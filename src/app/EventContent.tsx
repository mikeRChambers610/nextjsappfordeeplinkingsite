// src/app/EventContent.tsx
import React from 'react';
import apiStyles from '../styles/apiContent.module.css';

// Define an interface for the component's props
interface EventContentProps {
  htmlContent: string;  // Explicitly define the type of htmlContent as string
}

const EventContent: React.FC<EventContentProps> = ({ htmlContent }) => {
    return (
        <div className={apiStyles.apiContainer} dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
};

export default EventContent;
