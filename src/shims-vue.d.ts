/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}
declare module '*.jpeg' {
  const content: any;
  export default content;
}
declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.gif' {
  const content: any;
  export default content;
}

declare module '*.json' {
  const content: any;
  export default content;
}

declare module '*.md' {
  const content: any;
  export default content;
}

interface Window {
  app: Vue;
}
