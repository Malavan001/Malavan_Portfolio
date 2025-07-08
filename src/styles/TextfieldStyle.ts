export const TextfieldStyle = {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      background: 'linear-gradient(90deg, #a855f7, #3b82f6)', // gradient border
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
    '& .MuiInputBase-input::placeholder': {
      fontSize: '13px',
      fontWeight: 600,
      textAlign: 'left',
    },
  };
  