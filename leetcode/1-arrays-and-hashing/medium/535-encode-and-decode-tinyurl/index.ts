let urlMap = new Map<string, string>();
let baseUrl = "http://tinyurl.com/";

// function to generate a hash for a given string
function fnvHash(str: string): string {
  // 32-bit FNV-1a hash for each char in the string
  const FNV_PRIME = 16777619;
  // offset basis for FNV-1a hash
  const FNV_OFFSET_BASIS = 2166136261;

  let hash = FNV_OFFSET_BASIS;

  // hash each char in the string
  for (let i = 0; i < str.length; i++) {
    // xor the low 8 bits of the hash with the char
    hash ^= str.charCodeAt(i);
    // multiply by the FNV prime
    hash *= FNV_PRIME;
  }

  // return the hash as a 32-bit unsigned int
  return hash.toString(16);
}

// Encodes a URL to a shortened URL.
function encode(longUrl: string): string {
  if (urlMap.has(longUrl)) {
    return urlMap.get(longUrl)!;
  }

  const hash = fnvHash(longUrl);
  const shortUrl = baseUrl + hash;
  urlMap.set(longUrl, shortUrl);
  urlMap.set(shortUrl, longUrl);

  return shortUrl;
}

function decode(shortUrl: string): string {
  return urlMap.get(shortUrl) || "";
}

// class Solution {
//   private urlMap: Map<string, string>;
//   private idChars: string;
//   private idLength: number;
//   private baseUrl: string;

//   constructor() {
//     this.urlMap = new Map();
//     this.idChars =
//       "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     this.idLength = 6;
//     this.baseUrl = "http://tinyurl.com/";
//   }

//   // Encodes a URL to a shortened URL.
//   encode(longUrl: string): string {
//     // If the longUrl is already in the map, return the shortUrl
//     if (this.urlMap.has(longUrl)) {
//       return this.urlMap.get(longUrl)!;
//     }

//     // Generate a random id and check if it's already in the map
//     let id = this.generateId();
//     // If it is, generate a new id and check again
//     while (this.urlMap.has(id)) {
//       id = this.generateId();
//     }

//     // Construct the shortUrl
//     const shortUrl = this.baseUrl + id;
//     // Add the longUrl and shortUrl to the map
//     this.urlMap.set(longUrl, shortUrl);
//     this.urlMap.set(shortUrl, longUrl);

//     return shortUrl;
//   }

//   // Decodes a shortened URL to its original URL.
//   decode(shortUrl: string): string {
//     // If the shortUrl is not in the map, return an empty string
//     return this.urlMap.get(shortUrl) || "";
//   }

//   // Generates a random id
//   private generateId(): string {
//     let id = "";
//     // Generate a random character from idChars and append it to id
//     for (let i = 0; i < this.idLength; i++) {
//       // Generate a random index from 0 to idChars.length
//       const randomIndex = Math.floor(Math.random() * this.idChars.length);
//       // Append the random character to id
//       id += this.idChars.charAt(randomIndex);
//     }
//     return id;
//   }
// }
