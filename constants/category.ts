import { Category } from "../types/category";

// TODO
// Save these categories in database
// Or make a program to create these programmatically
export const categoryList: Category[] = [
  {
    name: "Electronics",
    subCategory: {
      id: "asdfghjkl",
      categories: [
        {
          name: "Mobiles",
          parent: "asdfghjkl",
          subCategory: {
            id: "aaaaaa",
            categories: [
              {
                name: "Apple",
                parent: "aaaaaa",
                subCategory: {
                  id: "bbbbbb",
                  categories: [
                    {
                      name: "iPhone 12",
                      href: "/iphone-12",
                      parent: "bbbbbb",
                    },
                    {
                      name: "iPhone 12 Pro",
                      href: "/iphone-12-pro",
                      parent: "bbbbbb",
                    },
                    {
                      name: "iPhone 12 Pro Max",
                      href: "/iphone-12-pro-max",
                      parent: "bbbbbb",
                    },
                    {
                      name: "iPhone 12 Mini",
                      href: "/iphone-12-mini",
                      parent: "bbbbbb",
                    },
                  ],
                },
              },
              {
                name: "Samsung",
                parent: "aaaaaa",
                subCategory: {
                  id: "dddddd",
                  categories: [
                    {
                      name: "Galaxy S21",
                      href: "/galaxy-s21",
                      parent: "dddddd",
                    },
                    {
                      name: "Galaxy S21 Ultra",
                      href: "/galaxy-s21-ultra",
                      parent: "dddddd",
                    },
                    {
                      name: "Galaxy S21 Plus",
                      href: "/galaxy-s21-plus",
                      parent: "dddddd",
                    },
                    {
                      name: "Galaxy S20",
                      href: "/galaxy-s20",
                      parent: "dddddd",
                    },
                    {
                      name: "Galaxy S20 Ultra",
                      href: "/galaxy-s20-ultra",
                      parent: "dddddd",
                    },
                    {
                      name: "Galaxy S20 Plus",
                      href: "/galaxy-s20-plus",
                      parent: "dddddd",
                    },
                    {
                      name: "Galaxy S20 FE",
                      href: "/galaxy-s20-fe",
                      parent: "dddddd",
                    },
                    {
                      name: "Galaxy Note 20",
                      href: "/galaxy-note-20",
                      parent: "dddddd",
                    },
                    {
                      name: "Galaxy Note 20 Ultra",
                      href: "/galaxy-note-20-ultra",
                      parent: "dddddd",
                    },
                    {
                      name: "Galaxy Note 20 Plus",
                      href: "/galaxy-note-20-plus",
                      parent: "dddddd",
                    },
                    {
                      name: "Galaxy Note 10",
                      href: "/galaxy-note-10",
                      parent: "dddddd",
                    },
                    {
                      name: "Galaxy Note 10 Plus",
                      href: "/galaxy-note-10-plus",
                      parent: "dddddd",
                    },
                  ],
                },
              },
              {
                name: "OnePlus",
                parent: "aaaaaa",
                subCategory: {
                  id: "eeeeee",
                  categories: [
                    {
                      name: "OnePlus 9",
                      href: "/oneplus-9",
                      parent: "eeeeee",
                    },
                    {
                      name: "OnePlus 9 Pro",
                      href: "/oneplus-9-pro",
                      parent: "eeeeee",
                    },
                    {
                      name: "OnePlus 9R",
                      href: "/oneplus-9r",
                      parent: "eeeeee",
                    },
                  ],
                },
              },
              {
                name: "Xiaomi",
                parent: "aaaaaa",
                subCategory: {
                  id: "ffffff",
                  categories: [
                    {
                      name: "Redmi Note 10",
                      href: "/redmi-note-10",
                      parent: "ffffff",
                    },
                    {
                      name: "Redmi Note 10 Pro",
                      href: "/redmi-note-10-pro",
                      parent: "ffffff",
                    },
                    {
                      name: "Mi A3",
                      href: "/mi-a3",
                      parent: "ffffff",
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          name: "Laptops",
          parent: "asdfghjkl",
          subCategory: {
            id: "gggggg",
            categories: [
              {
                name: "Apple",
                parent: "gggggg",
                subCategory: {
                  id: "hhhhhh",
                  categories: [
                    {
                      name: "MacBook Air",
                      href: "/macbook-air",
                      parent: "hhhhhh",
                    },
                    {
                      name: "MacBook Pro",
                      href: "/macbook-pro",
                      parent: "hhhhhh",
                    },
                    {
                      name: "MacBook Pro 13",
                      href: "/macbook-pro-13",
                      parent: "hhhhhh",
                    },
                  ],
                },
              },

              {
                name: "Dell",
                parent: "gggggg",
                subCategory: {
                  id: "iiiiii",
                  categories: [
                    {
                      name: "Inspiron 15",
                      href: "/inspiron-15",
                      parent: "iiiiii",
                    },
                    {
                      name: "Inspiron 15 3000",
                      href: "/inspiron-15-3000",
                      parent: "iiiiii",
                    },
                  ],
                },
              },
              {
                name: "Asus",
                parent: "gggggg",
                subCategory: {
                  id: "jjjjjj",
                  categories: [
                    {
                      name: "VivoBook 15",
                      href: "/vivobook-15",
                      parent: "jjjjjj",
                    },
                    {
                      name: "VivoBook 15 X512",
                      href: "/vivobook-15-x512",
                      parent: "jjjjjj",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },

  // TODO: Add more categories
];
