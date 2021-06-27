const { emitWarning } = process;

process.emitWarning = (warning, ...args) => {
  if (
    args[0] === "ExperimentalWarning" &&
    warning === "The Node.js specifier resolution in ESM is experimental."
  ) {
    return;
  }

  emitWarning(warning, ...args);
};
