/**
 * Audit all pages for heading compliance
 * Rules:
 * - Exactly 1 H1 per page
 * - Maximum 2 H2 per page
 * - No restrictions on H3-H6
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

interface HeadingCount {
  file: string;
  h1: number;
  h2: number;
  h1Tags: string[];
  h2Tags: string[];
}

function extractHeadings(content: string): { h1: string[]; h2: string[] } {
  const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/gi;
  const h2Regex = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;

  const h1Tags = [...content.matchAll(h1Regex)].map(match =>
    match[1].replace(/<[^>]*>/g, '').trim()
  );
  const h2Tags = [...content.matchAll(h2Regex)].map(match =>
    match[1].replace(/<[^>]*>/g, '').trim()
  );

  return { h1: h1Tags, h2: h2Tags };
}

function scanDirectory(dir: string, results: HeadingCount[] = []): HeadingCount[] {
  const files = readdirSync(dir);

  for (const file of files) {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      scanDirectory(filePath, results);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      const content = readFileSync(filePath, 'utf-8');
      const headings = extractHeadings(content);

      if (headings.h1.length > 0 || headings.h2.length > 0) {
        results.push({
          file: filePath.replace(process.cwd(), ''),
          h1: headings.h1.length,
          h2: headings.h2.length,
          h1Tags: headings.h1,
          h2Tags: headings.h2,
        });
      }
    }
  }

  return results;
}

// Run audit
const appDir = join(process.cwd(), 'src/app');
const results = scanDirectory(appDir);

console.log('\n📊 HEADING AUDIT REPORT\n');
console.log('Rules:');
console.log('- ✅ Exactly 1 H1 per page');
console.log('- ✅ Maximum 2 H2 per page');
console.log('- ℹ️  No restrictions on H3-H6\n');

let violations = 0;

for (const result of results) {
  let hasViolation = false;

  if (result.h1 !== 1) {
    console.log(`\n❌ ${result.file}`);
    console.log(`   H1 count: ${result.h1} (expected: 1)`);
    if (result.h1Tags.length > 0) {
      result.h1Tags.forEach((tag, idx) => {
        console.log(`   H1 #${idx + 1}: "${tag}"`);
      });
    }
    hasViolation = true;
  }

  if (result.h2 > 2) {
    if (!hasViolation) {
      console.log(`\n❌ ${result.file}`);
    }
    console.log(`   H2 count: ${result.h2} (maximum: 2)`);
    result.h2Tags.forEach((tag, idx) => {
      console.log(`   H2 #${idx + 1}: "${tag}"`);
    });
    hasViolation = true;
  }

  if (hasViolation) {
    violations++;
  } else if (result.h1 === 1 && result.h2 <= 2) {
    console.log(`\n✅ ${result.file}`);
    console.log(`   H1: "${result.h1Tags[0]}"`);
    if (result.h2Tags.length > 0) {
      result.h2Tags.forEach((tag, idx) => {
        console.log(`   H2 #${idx + 1}: "${tag}"`);
      });
    }
  }
}

console.log(`\n\n📈 Summary:`);
console.log(`   Total files scanned: ${results.length}`);
console.log(`   Files with violations: ${violations}`);
console.log(`   Compliant files: ${results.length - violations}`);

if (violations > 0) {
  console.log(`\n⚠️  Fix violations before deploying!`);
  process.exit(1);
} else {
  console.log(`\n✅ All files are SEO compliant!`);
  process.exit(0);
}