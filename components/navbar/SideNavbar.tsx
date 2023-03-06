import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import shortid from "shortid";
import { Category } from "@/types/category";
import { categoryList } from "@/constants/category";

export default function SideNavbar() {
  // Make a dropdown menu for each catagory
  //   when user clicks on a catagory, it should expand (if it has subCat) and show the sub catagories below it

  const [expanded, setExpanded] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setCategories(categoryList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="side-nav">
      <h2 className="heading">Categories</h2>

      <div className="catagories">
        {categories.map((category, index) => {
          return (
            <MenuItem
              key={category.name}
              category={category}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          );
        })}
      </div>
    </div>
  );
}

// A recursive component that displays a menu item
// It can either be a category or a sub category
function MenuItem({
  category,
  expanded,
  setExpanded,
}: {
  category: Category;
  expanded: string | null;
  setExpanded: (expanded: string | null) => void;
}) {
  let shouldExpand = false;

  // Check if the id is expanded
  // or check if any of this category's children is expanded
  // Recursively check if any of the children's children is expanded
  function checkIfExpanded(category: Category) {
    if (expanded === category.subCategory?.id) {
      shouldExpand = true;
    } else if (category.subCategory) {
      category.subCategory.categories.forEach((c) => {
        checkIfExpanded(c);
      });
    }
  }

  checkIfExpanded(category);

  return (
    <div className="category">
      <div className="upper">
        {category.subCategory?.id ? (
          <button
            className={`btn name ${
              expanded === category.subCategory?.id ? "expanded" : ""
            }`}
            onClick={() => {
              if (expanded === category.subCategory?.id) {
                // Find its parent and set that as expanded
                setExpanded(category.parent || null);
              } else {
                setExpanded(category.subCategory?.id || "");
              }
            }}
          >
            {category.name}

            {expanded === category.subCategory.id ? (
              <FaCaretUp className="icon" />
            ) : (
              <FaCaretDown className="icon" />
            )}
          </button>
        ) : (
          <Link href={category.href || "#"} className="link name">
            {category.name}
          </Link>
        )}
      </div>

      <div
        className={`sub-categories`}
        style={{
          // smooth transition
          maxHeight: shouldExpand ? "10000px" : "0px",
          overflow: "hidden",
          transition: "all 0.3s ease-in-out",
        }}
      >
        {category.subCategory ? (
          category.subCategory.categories.map((subCategory) => {
            return (
              <MenuItem
                key={subCategory.name}
                category={subCategory}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
