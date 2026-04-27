import React, {useMemo } from 'react';
import type { CharacterCounterProps } from '../../types/index';

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
    text,
    minWords,
    maxWords,
    targetReadingTime
}) => {
    const stats = useMemo(() => {
        const characterCount = text.length;
        const wordsArray = text.trim().split(/\s+/).filter(Boolean);
        const wordCount = wordsArray.length;

        const readingTime = wordCount / 200;
        return {
            characterCount,
            wordCount,
            readingTime
        };
    
}, [text]);

const isBelowMin = minWords !== undefined && stats.wordCount < minWords;
 const isAboveMax = maxWords !== undefined && stats.wordCount > maxWords;

  return (
    <div className="mt-4 p-4 border rounded-lg bg-gray-50">
      <p className="text-sm">
        <strong>Characters:</strong> {stats.characterCount}
      </p>

      <p className="text-sm">
        <strong>Words:</strong> {stats.wordCount}
      </p>

      {targetReadingTime !== undefined && (
        <p className="text-sm">
          <strong>Reading Time:</strong> {stats.readingTime.toFixed(2)} mins
        </p>
      )}

      {isBelowMin && (
        <p className="text-red-500 text-sm mt-2">
          Minimum word limit not reached ({minWords})
        </p>
      )}

      {isAboveMax && (
        <p className="text-red-500 text-sm mt-2">
          Maximum word limit exceeded ({maxWords})
        </p>
      )}
    </div>
  );
};