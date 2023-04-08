import { genUUID } from "./genUUID";

type GenerateFrontmatterInput = {
  id?: string;
  title?: string;
  desc?: string;
  createdDate?: Date;
};

export function generateFrontmatter(input?: GenerateFrontmatterInput) {
  const created = input?.createdDate?.valueOf() ?? new Date().valueOf();

  const content = `<pre><code>---
id: ${input?.id ?? genUUID()}
title: ${input?.title ?? ""}
desc: ${input?.desc ?? ""}
updated: ${created}
created: ${created}
---</code></pre>`;

  return content;
}
