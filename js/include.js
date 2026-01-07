/* Small client-side include helper.
   Finds elements with data-include and replaces them with the fetched HTML.
   Works on static hosting without a build step.
*/
async function loadIncludes(root = document) {
  const nodes = Array.from(root.querySelectorAll('[data-include]'));
  await Promise.all(nodes.map(async node => {
    const path = node.getAttribute('data-include');
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error(res.statusText);
      const html = await res.text();
      node.innerHTML = html;
      node.removeAttribute('data-include');
      // Load any nested includes inside the fetched fragment
      await loadIncludes(node);
    } catch (err) {
      console.error('Include failed for', path, err);
      node.innerHTML = `<!-- Include failed: ${path} -->`;
    }
  }));
}

document.addEventListener('DOMContentLoaded', () => loadIncludes());
