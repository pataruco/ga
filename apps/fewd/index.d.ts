declare module '*.svg' {
  // biome-ignore lint/suspicious/noExplicitAny: is a global module declaration
  const content: any;
  // biome-ignore lint/suspicious/noExplicitAny: is a global module declaration
  export const ReactComponent: any;
  export default content;
}
