export default async function fileNaming(filename: any, languageData: { namingConvension: string; fileExtension: string; }) {
  if (languageData.namingConvension === "camelCase") return (await camelCase(filename)) + "." + languageData.fileExtension;
  if (languageData.namingConvension === "kebab-case") return (await kebabCase(filename)) + "." + languageData.fileExtension;
  if (languageData.namingConvension === "snake_case") return (await snakeCase(filename)) + "." + languageData.fileExtension;
  if (languageData.namingConvension === "PascalCase") return (await PascalCase(filename)) + "." + languageData.fileExtension;
}

async function camelCase(filename: string) {
  return await filename
    .split(" ")
    .map((word: string | any[], index: number) => {
      if (index === 0) return word;
      return word[0].toUpperCase() + word.slice(1);
    })
    .join("");
}

async function kebabCase(filename: string) { return await filename.toLowerCase().split(" ").join("-"); }
async function snakeCase(filename: string) { return await filename.toLowerCase().split(" ").join("_"); }

async function PascalCase(filename: string) {
  return await filename
    .split(" ")
    .map((word: string | any[]) => word[0].toUpperCase() + word.slice(1))
    .join("");
}
