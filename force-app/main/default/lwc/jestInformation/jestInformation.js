import { LightningElement } from "lwc";

export default class JestInformation extends LightningElement {
  items = [
    {
      label: "lwc",
      name: "0",
      expanded: true,
      items: [
        {
          label: "component",
          name: "1",
          expanded: false,
          items: [
            {
              label: "__tests__",
              name: "2",
              expanded: false,
              items: [
                {
                  label: "component.test.js",
                  name: "3",
                  expanded: false
                }
              ]
            },
            {
              label: "component.css",
              name: "4",
              expanded: false
            },
            {
              label: "component.html",
              name: "5",
              expanded: false
            },
            {
              label: "component.js",
              name: "6",
              expanded: false
            },
            {
              label: "component.js-meta.xml",
              name: "7",
              expanded: false
            }
          ]
        },
        {
          label: "anotherComponent",
          name: "8",
          expanded: false,
          items: [
            {
              label: "__tests__",
              name: "9",
              expanded: false,
              items: [
                {
                  label: "anotherComponent.test.js",
                  name: "10",
                  expanded: false
                }
              ]
            },
            {
              label: "anotherComponent.css",
              name: "11",
              expanded: false
            },
            {
              label: "anotherComponent.html",
              name: "12",
              expanded: false
            },
            {
              label: "anotherComponent.js",
              name: "13",
              expanded: false
            },
            {
              label: "anotherComponent.js-meta.xml",
              name: "14",
              expanded: false
            }
          ]
        }
      ]
    }
  ];
}