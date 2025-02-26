# CLAUDE.md - Guidelines for fruit-letter-counter

## Build/Test/Lint Commands
- `npm install` - Install dependencies
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run all tests
- `npm test -- -t "testName"` - Run specific test
- `npm run lint` - Run linter
- `npm run lint -- --fix` - Auto-fix lint issues

## Code Style Guidelines
- **React Components**: Use functional components with hooks
- **State Management**: Use React hooks (useState, useEffect)
- **Imports**: Group imports: React, third-party, components, utils
- **Naming**: 
  - Components: PascalCase (Ex: XTRM9000FruitAnalyzer)
  - Functions/variables: camelCase (Ex: handleFruitChange)
  - Constants: UPPER_CASE
- **Formatting**: Use consistent 2-space indentation
- **Organization**: Group related functions and state variables
- **Styling**: Use Tailwind CSS for styling (className approach)
- **Error Handling**: Use try/catch for data handling where appropriate