## 1. Update tech stack data

- [x] 1.1 In `src/data/techStack.ts`, add `'AI'` to the `TechItem` category union: `'Frontend' | 'Backend' | 'Database' | 'Tools' | 'AI'`
- [x] 1.2 Add import `SiGithubcopilot` to the `react-icons/si` import block
- [x] 1.3 Append to `techStack` array:
  ```ts
  { name: 'GitHub Copilot', icon: SiGithubcopilot, color: '#000000', category: 'AI' },
  { name: 'OpenCode',       icon: MdCode,          color: '#6366f1', category: 'AI' },
  { name: 'OpenSpec',       icon: MdCode,          color: '#f97316', category: 'AI' },
  ```

## 2. Verify

- [x] 2.1 Run `npm run build` — confirm 0 TypeScript errors
