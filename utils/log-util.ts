type LogRunResult<T> = {
  functionName: string;
  input: unknown[];
  output: T;
  executionTimeMs: number;
};

function formatValue(value: unknown): string {
  if (value === undefined) return "undefined";
  if (value === null) return "null";
  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) {
    const items = value.map(formatValue).join(", ");
    return `[${items}]`;
  }
  if (typeof value === "object") {
    try {
      return JSON.stringify(value);
    } catch {
      return String(value);
    }
  }
  return String(value);
}

function printBoxedLog(result: LogRunResult<unknown>): void {
  const fnName = result.functionName || "anonymous";
  const inputStr = result.input.map(formatValue).join(", ");
  const outputStr = formatValue(result.output);
  const timeStr = `${result.executionTimeMs.toFixed(4)} ms`;

  const line1 = `  Function : ${fnName}`;
  const line2 = `  Input    : ${inputStr}`;
  const line3 = `  Output   : ${outputStr}`;
  const line4 = `  Duration : ${timeStr}`;

  const maxLen = Math.max(line1.length, line2.length, line3.length, line4.length);
  const border = "─".repeat(maxLen + 4);

  console.log(`┌${border}┐`);
  console.log(`│  ${line1.padEnd(maxLen)}  │`);
  console.log(`│  ${line2.padEnd(maxLen)}  │`);
  console.log(`│  ${line3.padEnd(maxLen)}  │`);
  console.log(`│  ${line4.padEnd(maxLen)}  │`);
  console.log(`└${border}┘`);
}

export function logger<T extends (...args: any[]) => any>(
  fn: T,
  ...args: Parameters<T>
): ReturnType<T> {
  const start = performance.now();
  const output = fn(...args);
  const end = performance.now();

  const result: LogRunResult<ReturnType<T>> = {
    functionName: fn.name,
    input: args,
    output,
    executionTimeMs: end - start,
  };

  printBoxedLog(result);
  return output;
}

export function withLog<T extends (...args: any[]) => any>(fn: T) {
  return (...args: Parameters<T>): ReturnType<T> => logger(fn, ...args);
}
