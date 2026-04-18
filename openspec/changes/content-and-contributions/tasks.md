## 1. Rewrite company descriptions

- [x] 1.1 In `src/data/companies.ts`, update SparkFabrik description to: `'Building production-grade web applications on AWS serverless infrastructure. Working closely with backend and cloud teams to ship scalable features in a fast-moving consulting environment.'`
- [x] 1.2 Update Accenture Italy description to: `'Delivered frontend for a major European automotive client and Italian public administration systems — high-stakes products used by millions, built across large cross-functional teams.'`
- [x] 1.3 Update Next Adv description to: `'Worked as Front End Lead across React and Next.js products, handled Node/Express backend tasks, and delivered WordPress customisations for a diverse digital agency client portfolio.'`
- [x] 1.4 Update Fabless S.P.A. description to: `'Core member of an in-house dev team maintaining and extending proprietary business applications, covering both frontend and backend responsibilities.'`

## 2. Update OSProject type

- [x] 2.1 In `src/data/openSource.ts`, add `platform?: 'github' | 'gitlab'` to the `OSProject` type

## 3. Add contribution entries

- [x] 3.1 Add entry: `name: 'company-playbook'`, `description: 'Fixed a flex layout bug causing the page body to not fill the viewport height on SparkFabrik\'s engineering playbook website.'`, `url: 'https://github.com/sparkfabrik/company-playbook/pull/297'`, `language: 'CSS'`, `type: 'contribution'`
- [x] 3.2 Add entry: `name: 'plugin-rest-cache'`, `description: 'Fixed broken JSON objects in two documentation examples of the Strapi REST cache plugin, preventing misconfiguration for users following the setup guide.'`, `url: 'https://github.com/strapi-community/plugin-rest-cache/pull/56'`, `language: 'Docs'`, `type: 'contribution'`
- [x] 3.3 Add entry: `name: 'react-hook-form'`, `description: 'Refined the Italian README translation across the official docs of one of the most widely used React form libraries (44k+ ⭐), improving clarity and natural phrasing for Italian-speaking developers.'`, `url: 'https://github.com/react-hook-form/react-hook-form/pull/13321'`, `language: 'Docs'`, `type: 'contribution'`
- [x] 3.4 Add entry: `name: 'ryujinx'`, `description: 'Contributed the Italian language translation to Ryujinx, a popular open-source Nintendo Switch emulator, making it accessible to Italian-speaking users.'`, `url: 'https://git.ryujinx.app/ryubing/ryujinx/-/merge_requests/148'`, `language: 'i18n'`, `type: 'contribution'`, `platform: 'gitlab'`

## 4. Update OpenSourceSection icon

- [x] 4.1 In `src/components/OpenSourceSection.tsx`, add `import { SiGitlab } from 'react-icons/si'`
- [x] 4.2 Replace the hardcoded `<FaGithub>` link with: if `project.platform === 'gitlab'` render `<SiGitlab size={16} />`, else render `<FaGithub size={16} />`; update `aria-label` accordingly (`'on GitLab'` vs `'on GitHub'`)

## 5. Verify

- [x] 5.1 Run `npm run build` — confirm 0 TypeScript errors
