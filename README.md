# React Native Challenge

In this challenge you will be building a basic Pokemon Trading Card browsing app. This template is based on the Expo typescript template with added scaffolding for navigation and a library for querying Pokemon cards.

> Note: We have used Expo in this template for simplicity of environment setup. You are not required to use this template for the challenge. We do not use Expo in our production app and will not expect any Expo specific knowledge/implementation in this challenge.

## Challenge
Use design.pdf as reference for the layout of the screens, feel free to improve and expand upon the design.
> [Pokemon API Documentation](https://docs.pokemontcg.io)

> [React Navigation Documentation](https://reactnavigation.org/docs/getting-started/)
- Display a list of Pokemon card sets
  - Set's logo on the left, symbol on the upper right
  - Set name, series, and a tag list of the legality keys "Unlimited", "Extended", etc.
- Navigate to a Set's detail screen and display a list of cards in the set
  - Header
    - Background with Set's logo behind a partial opacity black overlay, display Set Name, release date, and total number of cards in set
  - List of cards in set
    - Color card background based on type (grass, fire, etc) and use constrasting text color on the card row.
    - Card image on left,
    - Card name, hp, and tag list of subtypes
      - Color the subtypes tags based on the supertype (use a contrasting text color and keep the color for that supertype consistent across all cards)
    - For Pokemon (supertype) cards display 'flavor' text
    - For other supertypes display rules or similar information about the card

### What we are looking for in your implementation
  - Composition and reuse of components in your layouts
  - Consistent layout styling (sizing, padding, margin, color, etc)
  - Performance considerations
    - Appropriate usage of hooks (useState, useEffect, useCallback, custom hooks, etc)
    - Using FlatList
    - Paging items from the API (20 items per page, and load more pages as the user scrolls)

### Bonus
  - Filter, search, and/or sort functionality
  - Thoughtful use of animations & transitions (e.g. during loading or state changes)
  - Personal flourishes & additions to the app
  - Appropriate usage of Typescript

# TypeScript Example

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  <!-- Web -->
  <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
</p>

```sh
npx create-react-native-app -t with-typescript
```

TypeScript is a superset of JavaScript which gives you static types and powerful tooling in Visual Studio Code including autocompletion and useful inline warnings for type errors.

## 🚀 How to use

#### Creating a new project

- Install the CLI: `npm i -g expo-cli`
- Create a project: `npx create-react-native-app -t with-typescript`
- `cd` into the project

### Adding TypeScript to existing projects

- Create a blank TypeScript config: `touch tsconfig.json`
- Run `expo start` to automatically configure TypeScript
- Rename files to TypeScript, `.tsx` for React components and `.ts` for plain typescript files

> 💡 You can disable the TypeScript setup in Expo CLI with the environment variable `EXPO_NO_TYPESCRIPT_SETUP=1 expo start`

## 📝 Notes

- [Expo TypeScript guide](https://docs.expo.dev/versions/latest/guides/typescript/)
