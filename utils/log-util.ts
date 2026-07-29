type LogRunResult<T> = {
  functionName: string;
  input: unknown[];
  output: T;
  expectedResult?: T;
  isMatch?: boolean;
  executionTimeMs: number;
};

/* ─── ANSI helpers ─── */
const C = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  gray: '\x1b[90m',
};

function stripAnsi(str: string): string {
  // eslint-disable-next-line no-control-regex
  return str.replace(/\x1b\[[0-9;]*m/g, '');
}

function color(label: string, value: string, colorCode: string): string {
  return `${C.dim}${label}${C.reset} ${colorCode}${value}${C.reset}`;
}

/* ─── value formatter ─── */
function formatValue(value: unknown): string {
  if (value === undefined) return 'undefined';
  if (value === null) return 'null';
  if (typeof value === 'string') return `"${value}"`;
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (Array.isArray(value)) {
    const items = value.map(formatValue).join(', ');
    return `[${items}]`;
  }
  if (typeof value === 'object') {
    try {
      return JSON.stringify(value);
    } catch {
      return String(value);
    }
  }
  return String(value);
}

/* ─── pretty boxed printer ─── */
function printBoxedLog(result: LogRunResult<unknown>): void {
  const fnName = result.functionName || 'anonymous';
  const inputStr = result.input.map(formatValue).join(', ');
  const outputStr = formatValue(result.output);
  const timeStr = `${result.executionTimeMs.toFixed(4)} ms`;

  const coloredLines = [
    color('Function :', fnName, C.cyan + C.bold),
    color('Input    :', inputStr, C.gray),
    color('Output   :', outputStr, C.white),
    ...(result.expectedResult !== undefined
      ? [color('Expected :', formatValue(result.expectedResult), C.white)]
      : []),
    ...(result.isMatch !== undefined
      ? [
          result.isMatch
            ? `${C.dim}Status   :${C.reset} ${C.green}${C.bold}PASS${C.reset}`
            : `${C.dim}Status   :${C.reset} ${C.red}${C.bold}FAIL${C.reset}`,
        ]
      : []),
    color('Duration :', timeStr, C.yellow),
  ];

  const visibleLengths = coloredLines.map((l) => stripAnsi(l).length);
  const maxLen = Math.max(...visibleLengths);
  const border = `${C.gray}─${C.reset}`.repeat(maxLen + 4);

  console.log(`${C.gray}┌${C.reset}${border}${C.gray}┐${C.reset}`);
  for (const line of coloredLines) {
    const pad = maxLen - stripAnsi(line).length;
    console.log(`${C.gray}│${C.reset}  ${line}${' '.repeat(pad)}  ${C.gray}│${C.reset}`);
  }
  console.log(`${C.gray}└${C.reset}${border}${C.gray}┘${C.reset}`);
}

/**
 * Executes a function, measures its execution time, and prints a formatted log box
 * with function name, inputs, output, and duration.
 *
 * Optionally accepts an expected result as the last argument to compare against
 * the actual output, displaying PASS/FAIL status.
 *
 * @param fn - The function to execute and log
 * @param allArgs - Function arguments, optionally followed by expected result
 * @returns The actual result from executing `fn`
 *
 * @example
 * // Without expected result — just logs execution
 * logger(twoSum, [2, 7, 11, 15], 9);
 * // Output: twoSum([2, 7, 11, 15], 9) → [0, 1] in 0.0421 ms
 *
 * @example
 * // With expected result — also checks correctness
 * logger(twoSum, [2, 7, 11, 15], 9, [0, 1]);
 * // Output: twoSum([2, 7, 11, 15], 9) → [0, 1] | Expected: [0, 1] | PASS in 0.0036 ms
 *
 * @example
 * // Expected mismatch — FAIL shown in red
 * logger(twoSum, [2, 7, 11, 15], 9, [1, 2]);
 * // Output: twoSum([2, 7, 11, 15], 9) → [0, 1] | Expected: [1, 2] | FAIL in 0.0024 ms
 */
export function logger<T extends (...args: any[]) => any>(
  fn: T,
  ...allArgs: [...Parameters<T>, ReturnType<T>?]
): ReturnType<T> {
  const arity = fn.length;
  const hasExpected = allArgs.length === arity + 1;

  const expectedResult = hasExpected ? (allArgs.pop() as ReturnType<T>) : undefined;
  const args = allArgs as unknown as Parameters<T>;

  const start = performance.now();
  const output = fn(...args);
  const end = performance.now();

  const isMatch =
    expectedResult !== undefined
      ? JSON.stringify(output) === JSON.stringify(expectedResult)
      : undefined;

  const result: LogRunResult<ReturnType<T>> = {
    functionName: fn.name,
    input: args,
    output,
    expectedResult,
    isMatch,
    executionTimeMs: end - start,
  };

  printBoxedLog(result);
  return output;
}

/**
 * Wraps a function so that every call automatically logs execution details.
 *
 * The returned function behaves exactly like the original, but will print
 * a formatted log box with inputs, output, duration, and optional PASS/FAIL.
 *
 * @param fn - The function to wrap with automatic logging
 * @returns A new function that logs on every invocation
 *
 * @example
 * const loggedTwoSum = withLog(twoSum);
 *
 * // Each call prints a log automatically
 * loggedTwoSum([2, 7, 11, 15], 9);
 * // Output: twoSum([2, 7, 11, 15], 9) → [0, 1] in 0.0580 ms
 *
 * @example
 * // With expected result for assertion
 * loggedTwoSum([2, 7, 11, 15], 9, [0, 1]);
 * // Output: twoSum([2, 7, 11, 15], 9) → [0, 1] | Expected: [0, 1] | PASS
 */
export function withLog<T extends (...args: any[]) => any>(fn: T) {
  return (...allArgs: [...Parameters<T>, ReturnType<T>?]): ReturnType<T> => logger(fn, ...allArgs);
}
