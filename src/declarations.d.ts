declare module "remark-slide";
declare module "remark-slide/src/polyfills";
declare module "remark-slide/src/remark/components/styler/styler";

declare module "*.md" {
  const content: string;

  export default content;
}
