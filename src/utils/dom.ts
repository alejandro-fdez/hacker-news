export const cx = (...classNames: any[]) => {
  const classes = [];
  for (let i = 0; i < classNames.length; i++) {
    const currentClass = classNames[i];
    if (!currentClass) continue;

    if (typeof currentClass === 'string' || typeof currentClass === 'number') {
      classes.push(currentClass);
    } else if (Array.isArray(currentClass)) {
      const groupedClasses = currentClass
        .filter(Boolean)
        .map((className) => className)
        .join(' ');
      classes.push(groupedClasses);
    } else if (typeof currentClass === 'object') {
      for (const key in currentClass) {
        // Ensure it does not loop through whole prototype chain
        if (Object.prototype.hasOwnProperty.call(currentClass, key)) {
          if (currentClass[key]) {
            classes.push(key);
          }
        }
      }
    }
  }

  return classes.join(' ');
};
