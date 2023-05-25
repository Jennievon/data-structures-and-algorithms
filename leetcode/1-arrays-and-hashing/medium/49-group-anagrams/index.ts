function groupAnagrams(strings: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const string of strings) {
    const key = string.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key)?.push(string);
  }

  return Array.from(map.values());
}
