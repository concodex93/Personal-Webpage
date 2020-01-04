const getAllReservedKeywords = () => {
  const reservedKeywords = {
    magenta: [
      'class',
      'const',
      'delete',
      'export',
      'extends',
      'in',
      'instanceof',
      'new',
      'typeof',
      'var',
      'void',
      'throw'
    ],
    cyan: [
      'break',
      'case',
      'catch',
      'continue',
      'default',
      'do',
      'else',
      'export',
      'finally',
      'for',
      'if',
      'import',
      'return',
      'switch',
      'try',
      'while',
      'with',
      'yield'
    ],
    indigo: ['function', 'log'],
    red: ['this', 'super'],
    yellow: ['debugger', 'console']
  };
  return reservedKeywords;
};

export default getAllReservedKeywords;
