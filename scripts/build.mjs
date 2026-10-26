import { cpSync } from 'fs';

cpSync('js', 'www/js', { recursive: true, force: true });
cpSync('assets', 'www/assets', { recursive: true, force: true });

for (const file of ['index.html', 'styles.css', 'admin.html', 'admin.css', 'admin.js', 'sample-data.js']) {
  cpSync(file, `www/${file}`, { force: true });
}

console.log('✓ www/ updated');
