# React + TypeScript + Vite


### How did you handle state updates when the text changed?

Used useState in the parent component to store the text value.
Passed a callback (onTextChange) to the TextInput component.
On every input change, the state gets updated immediately.
This triggers re-render and updates all dependent components.

What considerations did you make when calculating reading time?
Used an average reading speed of 200 words per minute.
Calculated reading time based on current word count.
Handled empty input to avoid divide-by-zero or incorrect values.
Rounded the output for better readability in UI.

### How did you ensure the UI remained responsive during rapid text input?


Kept calculations lightweight and simple (no heavy processing).
Used React re-render efficiently without unnecessary state duplication.
Avoided storing derived data separately unless needed.
Ensured updates happen synchronously with minimal delay.

### What challenges did you face when implementing the statistics calculations?

Handling edge cases like empty input and extra spaces in text.
Making sure word count logic doesn’t break with multiple spaces/newlines. Deciding between useMemo vs useState for derived data. Ensuring calculations update correctly without causing extra re-renders.
