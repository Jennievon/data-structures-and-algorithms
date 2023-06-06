// 2 args - old, new
// split the string
// i = 0 --> v1[i] = v2[i] --> continue, v1[i] > v2[i] --> return v1, v1[i] < v2[i] --> v2

function versionHandler(v1: string, v2: string) {
  const version1 = v1.split(".");
  const version2 = v2.split(".");

  const joinVersion = (version: string[]) => {
    return version.join(".");
  };

  const maximumLength = Math.max(version1.length, version2.length);

  for (let i = 0; i < maximumLength; i++) {
    const parsedVersion1 = +version1[i];
    const parsedVersion2 = +version2[i];

    if (parsedVersion1 && parsedVersion2) {
      if (parsedVersion1 === parsedVersion2) {
        continue;
      }
      if (parsedVersion1 > parsedVersion2) {
        return joinVersion(version1);
      }
      if (parsedVersion1 < parsedVersion2) {
        return joinVersion(version2);
      }
    }
    if (parsedVersion1) {
      return joinVersion(version1);
    } else if (parsedVersion2 !== 0) {
      return joinVersion(version2);
    } else {
      return joinVersion(version1);
    }
  }
}

const latestVersion0 = versionHandler("3.10.0.0", "3.20.0.0");
console.log(latestVersion0);
const latestVersion1 = versionHandler("1.0.0", "1.0.0.0");
console.log(latestVersion1);
const latestVersion2 = versionHandler("1.0.0", "1.0.3");
console.log(latestVersion2);
const latestVersion3 = versionHandler("3.2.1", "1.0.0.0");
console.log(latestVersion3);
