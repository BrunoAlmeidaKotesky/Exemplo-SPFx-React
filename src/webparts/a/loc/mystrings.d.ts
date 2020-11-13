declare interface IAWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'AWebPartStrings' {
  const strings: IAWebPartStrings;
  export = strings;
}
