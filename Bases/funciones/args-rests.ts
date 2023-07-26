(() => {
  const fullName = (firstName: string, ...restArgs: string[]): string => {
    return `${firstName} ${restArgs.join(" ")}`;
  };

  const test = fullName("Clark", "ajskdas", "kent");
  console.log(test);
})();
