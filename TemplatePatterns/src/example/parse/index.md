```typescript
const csvParser = new CsvParser();
csvParser.parse(path.join(__dirname, "Users.csv"));

const mdParser = new MarkdownParser();
mdParser.parse(path.join(__dirname, "Users.md"));
```
