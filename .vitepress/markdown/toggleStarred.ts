import type { MarkdownRenderer } from "vitepress";

export function toggleStarredPlugin(md: MarkdownRenderer) {
  md.renderer.rules.list_item_open = (tokens, index, options, env, self) => {
    const contentToken = tokens[index + 2];
    if (contentToken && contentToken.content.startsWith("⭐")) {
      return `<li class="starred">`;
    }
    return self.renderToken(tokens, index, options);
  };
}
