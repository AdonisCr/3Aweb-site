import { readdirSync, statSync, renameSync, existsSync, mkdirSync } from 'fs';
import { join, extname, dirname } from 'path';
import sharp from 'sharp';

const ASSETS = 'public/assets';

const extensions = new Set(['.png', '.jpg', '.jpeg']);

async function optimize(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      await optimize(full);
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if (!extensions.has(ext)) continue;
      const out = full.replace(ext, '.webp');
      if (existsSync(out)) continue;
      console.log(`→ ${full}`);
      await sharp(full).webp({ quality: 80 }).toFile(out);
    }
  }
}

optimize(ASSETS).then(() => console.log('✅ Terminé')).catch(console.error);
