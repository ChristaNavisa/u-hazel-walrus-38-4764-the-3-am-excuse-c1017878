import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "3 AM signing? I don't do overtime — my keys unionized at midnight.";

function resolveOutDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function wordCount(line: string): number {
  return line.split(" ").filter((w) => w !== "—").length;
}

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, line, "utf8");
}

writeEntry(resolveOutDir(), LINE);
console.log(`wrote ${resolveOutDir()}/entry.txt: ${LINE.length} chars, ${wordCount(LINE)} words, ${Buffer.byteLength(LINE, "utf8")} bytes`);
