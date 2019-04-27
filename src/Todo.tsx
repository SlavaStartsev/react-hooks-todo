import React from 'react';

interface ITodo {
  children: string;
  strikethrough?: boolean;
  onDelete?: () => void;
}

function Todo({
  children,
  onDelete,
  strikethrough = false,
}: ITodo): React.ReactElement {
  const [lineThrough, setLineThrough] = React.useState(strikethrough);
  const toggleLineThrough = () => setLineThrough(!lineThrough);
  return (
    <div>
      <span
        role="button"
        tabIndex={0}
        style={{
          cursor: 'pointer',
          textDecoration: lineThrough ? 'line-through' : 'none',
        }}
        onClick={toggleLineThrough}
        onKeyDown={(event: React.KeyboardEvent<HTMLSpanElement>) => {
          if (event.keyCode === 13) {
            toggleLineThrough();
          }
        }}
      >
        {children}
      </span>
      {onDelete && <button onClick={onDelete}>X</button>}
    </div>
  );
}

export default React.memo(Todo);
