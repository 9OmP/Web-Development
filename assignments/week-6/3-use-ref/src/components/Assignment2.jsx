import React, { useState, useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const renderCount = useRef(1); // Initialize the render count

    const [, forceRender] = useState(0); // Force re-render by changing state

    const handleReRender = () => {
        forceRender(Math.random()); // This will cause the component to re-render
        renderCount.current += 1;   // Increment render count after each re-render
    };

    return (
        <div>
            <p>This component has rendered {renderCount.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
}
