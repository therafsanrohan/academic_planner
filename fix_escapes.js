const fs = require('fs');
const files = [
  'src/app/(dashboard)/admin/page.tsx',
  'src/app/(dashboard)/official-plan/page.tsx',
  'src/app/(dashboard)/prerequisites/page.tsx',
  'src/app/(dashboard)/electives/page.tsx',
  'src/app/(dashboard)/import/page.tsx',
  'src/app/(dashboard)/my-plan/page.tsx',
  'src/app/(dashboard)/dashboard/page.tsx',
  'src/app/(dashboard)/planner/page.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    if (content.includes('\\`') || content.includes('\\${')) {
      content = content.replace(/\\`/g, '`').replace(/\\\${/g, '${');
      changed = true;
    }
    if (changed) {
      fs.writeFileSync(file, content);
      console.log('Fixed', file);
    }
  }
});
