const compose = (...funcs: Function[]) => (comp: React.ComponentType<any>) => {
  return funcs.reduceRight(
    (wrapped, f) => f(wrapped), comp);
};

export default compose;
