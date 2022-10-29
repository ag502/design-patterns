```typescript
abstract class FileParser {
  // Template Method
  parse(filePath: string) {
    const content = this.readFile(filePath);
    const fileData = this.parseFile(content);
    this.processData(fileData);
  }

  private readFile(filePath: string) {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, "utf8");
    }
  }

  protected abstract parseFile(fileContent: string): any;

  private processData(fileData: any[]) {
    console.log(fileData);
  }
}
```
