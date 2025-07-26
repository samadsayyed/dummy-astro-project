import { c as createComponent, r as renderTemplate, a as renderComponent, e as renderScript } from '../chunks/astro/server_BDYBIJ9N.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Bqao17MK.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import React, { useState, useEffect, useMemo } from 'react';
import { Filter, X, ChevronUp, ChevronDown, SortAsc, Grid, List, ChevronLeft, MoreHorizontal, ChevronRight } from 'lucide-react';
import { p as productsService } from '../chunks/productsService_B-1gmcsj.mjs';
import { C as CategoriesService } from '../chunks/categoriesService_Dq2tWJlr.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const FilterSidebar = ({
  filters,
  onFiltersChange,
  isOpen,
  onToggle,
  categories = [],
  priceRange = { min: 0, max: 1e5 }
}) => {
  const [localFilters, setLocalFilters] = useState(filters);
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    category: true,
    availability: true
  });
  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);
  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...localFilters, [filterType]: value };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };
  const handlePriceChange = (type, value) => {
    const newPriceFilter = { ...localFilters.price, [type]: parseInt(value) };
    handleFilterChange("price", newPriceFilter);
  };
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  const clearAllFilters = () => {
    const clearedFilters = {
      category: [],
      price: priceRange,
      availability: "all",
      search: ""
    };
    setLocalFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };
  const activeFilterCount = () => {
    let count = 0;
    if (localFilters.category?.length > 0) count++;
    if (localFilters.price?.min > priceRange.min || localFilters.price?.max < priceRange.max) count++;
    if (localFilters.availability !== "all") count++;
    if (localFilters.search?.length > 0) count++;
    return count;
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden",
        onClick: onToggle
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: `
        fixed lg:relative lg:translate-x-0 top-0 left-0 h-full lg:h-auto
        w-80 lg:w-72 bg-white shadow-xl lg:shadow-none border-r border-gray-200
        z-50 lg:z-auto transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        flex flex-col
      `, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Filter, { className: "w-5 h-5 text-gray-600" }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Filters" }),
          activeFilterCount() > 0 && /* @__PURE__ */ jsx("span", { className: "bg-black text-white text-xs px-2 py-1", children: activeFilterCount() })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          activeFilterCount() > 0 && /* @__PURE__ */ jsx(
            "button",
            {
              onClick: clearAllFilters,
              className: "text-sm text-gray-500 hover:text-gray-700 transition-colors",
              children: "Clear all"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: onToggle,
              className: "lg:hidden p-1 hover:bg-gray-100 transition-colors",
              children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5 text-gray-500" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto p-6 space-y-6", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Search products...",
            value: localFilters.search || "",
            onChange: (e) => handleFilterChange("search", e.target.value),
            className: "w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => toggleSection("price"),
              className: "flex items-center justify-between w-full text-left",
              children: [
                /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-gray-900 uppercase tracking-wider", children: "Price Range" }),
                expandedSections.price ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-4 h-4 text-gray-500" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 text-gray-500" })
              ]
            }
          ),
          expandedSections.price && /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-xs text-gray-600 mb-1", children: "Min Price" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "number",
                    value: localFilters.price?.min || priceRange.min,
                    onChange: (e) => handlePriceChange("min", e.target.value),
                    className: "w-full px-3 py-2 border border-gray-300 text-sm focus:ring-1 focus:ring-black focus:border-transparent",
                    min: priceRange.min,
                    max: priceRange.max
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-xs text-gray-600 mb-1", children: "Max Price" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "number",
                    value: localFilters.price?.max || priceRange.max,
                    onChange: (e) => handlePriceChange("max", e.target.value),
                    className: "w-full px-3 py-2 border border-gray-300 text-sm focus:ring-1 focus:ring-black focus:border-transparent",
                    min: priceRange.min,
                    max: priceRange.max
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
              "input",
              {
                type: "range",
                min: priceRange.min,
                max: priceRange.max,
                value: localFilters.price?.max || priceRange.max,
                onChange: (e) => handlePriceChange("max", e.target.value),
                className: "w-full h-2 bg-gray-200 appearance-none cursor-pointer slider"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => toggleSection("category"),
              className: "flex items-center justify-between w-full text-left",
              children: [
                /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-gray-900 uppercase tracking-wider", children: "Categories" }),
                expandedSections.category ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-4 h-4 text-gray-500" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 text-gray-500" })
              ]
            }
          ),
          expandedSections.category && /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-3 max-h-48 overflow-y-auto", children: categories.length > 0 ? categories.map((category) => /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                checked: localFilters.category?.includes(category.id) || false,
                onChange: (e) => {
                  const currentCategories = localFilters.category || [];
                  const newCategories = e.target.checked ? [...currentCategories, category.id] : currentCategories.filter((id) => id !== category.id);
                  handleFilterChange("category", newCategories);
                },
                className: "w-4 h-4 text-black border-gray-300 focus:ring-black focus:ring-2"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700 flex-1", children: category.name })
          ] }, category.id)) : /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "No categories available" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => toggleSection("availability"),
              className: "flex items-center justify-between w-full text-left",
              children: [
                /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-gray-900 uppercase tracking-wider", children: "Availability" }),
                expandedSections.availability ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-4 h-4 text-gray-500" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 text-gray-500" })
              ]
            }
          ),
          expandedSections.availability && /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-3", children: [
            { value: "all", label: "All Products" },
            { value: "in_stock", label: "In Stock" },
            { value: "out_of_stock", label: "Out of Stock" }
          ].map((option) => /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "radio",
                name: "availability",
                value: option.value,
                checked: localFilters.availability === option.value,
                onChange: (e) => handleFilterChange("availability", e.target.value),
                className: "w-4 h-4 text-black border-gray-300 focus:ring-black focus:ring-2"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: option.label })
          ] }, option.value)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          background: #000;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #000;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
      ` })
  ] });
};

const ProductSort = ({
  sortBy,
  sortOrder,
  onSortChange,
  viewMode,
  onViewModeChange,
  onFilterToggle,
  totalResults,
  className = ""
}) => {
  const sortOptions = [
    { value: "name", label: "Name" },
    { value: "price", label: "Price" },
    { value: "created_at", label: "Newest" },
    { value: "popularity", label: "Popularity" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: `flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-4 border border-gray-200 ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: onFilterToggle,
          className: "lg:hidden flex items-center space-x-2 px-3 py-2 border border-gray-300 hover:bg-gray-50 transition-colors",
          children: [
            /* @__PURE__ */ jsx(Filter, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Filters" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600", children: [
        /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900", children: totalResults }),
        " products found"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(SortAsc, { className: "w-4 h-4 text-gray-500" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600 hidden sm:block", children: "Sort by:" }),
        /* @__PURE__ */ jsx(
          "select",
          {
            value: `${sortBy}-${sortOrder}`,
            onChange: (e) => {
              const [field, order] = e.target.value.split("-");
              onSortChange(field, order);
            },
            className: "border border-gray-300 px-3 py-1.5 text-sm focus:ring-2 focus:ring-black focus:border-transparent bg-white",
            children: sortOptions.map((option) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
              /* @__PURE__ */ jsxs("option", { value: `${option.value}-asc`, children: [
                option.label,
                " (A-Z)"
              ] }),
              /* @__PURE__ */ jsxs("option", { value: `${option.value}-desc`, children: [
                option.label,
                " (Z-A)"
              ] })
            ] }, option.value))
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center border border-gray-300 overflow-hidden", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => onViewModeChange("grid"),
            className: `p-2 transition-colors ${viewMode === "grid" ? "bg-gray-900 text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`,
            title: "Grid view",
            children: /* @__PURE__ */ jsx(Grid, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => onViewModeChange("list"),
            className: `p-2 transition-colors ${viewMode === "list" ? "bg-gray-900 text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`,
            title: "List view",
            children: /* @__PURE__ */ jsx(List, { className: "w-4 h-4" })
          }
        )
      ] })
    ] })
  ] });
};

const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  showLoadMore = false,
  onLoadMore,
  loading = false,
  className = ""
}) => {
  const generatePageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;
    if (!showEllipsis) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage <= 4) {
        for (let i = 2; i <= 5; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push("ellipsis");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          if (i > 1) pages.push(i);
        }
      } else {
        pages.push("ellipsis");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
        pages.push(totalPages);
      }
    }
    return pages;
  };
  const pageNumbers = generatePageNumbers();
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  if (totalPages <= 1 && !showLoadMore) {
    return null;
  }
  return /* @__PURE__ */ jsxs("div", { className: `flex flex-col space-y-4 ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center text-sm text-gray-600", children: [
      "Showing ",
      /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900", children: startItem }),
      " to",
      " ",
      /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900", children: endItem }),
      " of",
      " ",
      /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900", children: totalItems }),
      " results"
    ] }),
    showLoadMore && currentPage < totalPages && /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onLoadMore,
        disabled: loading,
        className: "bg-white border-2 border-gray-900 text-gray-900 px-8 py-3 \r\n                     hover:bg-gray-900 hover:text-white transition-all duration-300 \r\n                     disabled:opacity-50 disabled:cursor-not-allowed\r\n                     font-medium text-sm tracking-wide transform hover:scale-105",
        children: loading ? /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" }),
          /* @__PURE__ */ jsx("span", { children: "Loading..." })
        ] }) : "Load More Products"
      }
    ) }),
    !showLoadMore && totalPages > 1 && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => onPageChange(currentPage - 1),
          disabled: currentPage === 1,
          className: "flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 \r\n                     hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed\r\n                     transition-all duration-200",
          children: [
            /* @__PURE__ */ jsx(ChevronLeft, { className: "w-4 h-4 mr-1" }),
            "Previous"
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-1", children: pageNumbers.map((page, index) => /* @__PURE__ */ jsx(React.Fragment, { children: page === "ellipsis" ? /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-10 h-10", children: /* @__PURE__ */ jsx(MoreHorizontal, { className: "w-4 h-4 text-gray-400" }) }) : /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => onPageChange(page),
          className: `w-10 h-10 text-sm font-medium transition-all duration-200 
                      ${currentPage === page ? "bg-gray-900 text-white shadow-md transform scale-105" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:text-gray-900"}`,
          children: page
        }
      ) }, index)) }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => onPageChange(currentPage + 1),
          disabled: currentPage === totalPages,
          className: "flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 \r\n                     hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed\r\n                     transition-all duration-200",
          children: [
            "Next",
            /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4 ml-1" })
          ]
        }
      )
    ] }),
    totalPages > 10 && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-2 text-sm", children: [
      /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Go to page:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          min: "1",
          max: totalPages,
          value: currentPage,
          onChange: (e) => {
            const page = parseInt(e.target.value);
            if (page >= 1 && page <= totalPages) {
              onPageChange(page);
            }
          },
          className: "w-16 px-2 py-1 text-center border border-gray-300 \r\n                     focus:ring-2 focus:ring-black focus:border-transparent"
        }
      ),
      /* @__PURE__ */ jsxs("span", { className: "text-gray-600", children: [
        "of ",
        totalPages
      ] })
    ] })
  ] });
};

const ProductCardWrapper = ({ product, viewMode = "grid" }) => {
  const formatPrice = (price) => {
    return parseFloat(price).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };
  const getFirstImage = (product2) => {
    return product2.gallery && product2.gallery[0] || "https://placehold.co/400x400";
  };
  const addToCart = (product2, buttonElement) => {
    if (!product2.in_stock || product2.stock_quantity <= 0) {
      showToast("Product is out of stock", "error");
      return;
    }
    buttonElement.disabled = true;
    buttonElement.style.transform = "scale(0.98) translateY(0)";
    let cart = JSON.parse(localStorage.getItem("cart")) || {
      items: [],
      totalItems: 0,
      subtotal: 0
    };
    if (!cart.items) {
      cart.items = [];
    }
    const existingItemIndex = cart.items.findIndex(
      (item) => item.id === product2.id
    );
    if (existingItemIndex >= 0) {
      cart.items[existingItemIndex].quantity += 1;
    } else {
      cart.items.push({
        id: product2.id,
        name: product2.name,
        price: product2.discount_price || product2.price,
        image: getFirstImage(product2),
        quantity: 1
      });
    }
    cart.totalItems = cart.items.reduce(
      (total, item) => total + item.quantity,
      0
    );
    cart.subtotal = cart.items.reduce(
      (total, item) => total + parseFloat(item.price) * item.quantity,
      0
    );
    localStorage.setItem("cart", JSON.stringify(cart));
    setTimeout(() => {
      buttonElement.classList.add("success");
      buttonElement.style.transform = "scale(1.02) translateY(-1px)";
      showToast(`${product2.name} added to cart`, "success");
      const cartIcon = document.querySelector(".cart-icon");
      if (cartIcon) {
        cartIcon.classList.add("cart-bounce");
        setTimeout(() => cartIcon.classList.remove("cart-bounce"), 800);
      }
      window.dispatchEvent(new CustomEvent("cart-updated", { detail: cart }));
    }, 200);
    setTimeout(() => {
      buttonElement.classList.remove("success");
      buttonElement.disabled = false;
      buttonElement.querySelector(".btn-text").style.display = "inline-block";
      buttonElement.querySelector(".btn-success").style.display = "none";
      buttonElement.style.transform = "";
    }, 2500);
  };
  const showToast = (message, type = "success") => {
    const toast = document.querySelector(".toast-notification");
    if (!toast) return;
    const toastMessage = toast.querySelector(".toast-message");
    toastMessage.textContent = message;
    if (type === "error") {
      toast.classList.remove("bg-gray-900", "border-gray-700");
      toast.classList.add("bg-gray-800", "border-gray-600");
    } else {
      toast.classList.remove("bg-gray-800", "border-gray-600");
      toast.classList.add("bg-gray-900", "border-gray-700");
    }
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 4e3);
  };
  if (viewMode === "grid") {
    return /* @__PURE__ */ jsxs("article", { className: "relative bg-white flex flex-col group border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-gray-300 overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
        product.in_stock && product.stock_quantity > 0 && product.discount_price && parseFloat(product.discount_price) < parseFloat(product.price) && /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3 flex gap-1 z-10", children: /* @__PURE__ */ jsx("span", { className: "bg-black text-white text-xs font-medium px-3 py-1 tracking-wider", children: "SALE" }) }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: getFirstImage(product),
            alt: product.name,
            className: "w-full h-80 object-cover transition-all duration-700 ease-out group-hover:scale-105 filter group-hover:contrast-110",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-500 group-hover:bg-black/5", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute top-4 right-4 flex flex-col gap-3 transition-all duration-500 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `/shop/${product.slug}`,
                className: "bg-white p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-100 hover:border-gray-300",
                children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-4 w-4 text-gray-700",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      }
                    )
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx("button", { className: "bg-white p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-100 hover:border-gray-300", children: /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-4 w-4 text-gray-700",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  }
                )
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: "add-to-cart-btn absolute w-full bottom-0 left-0 cursor-pointer right-0 mx-auto py-3 text-center text-white font-medium tracking-wide transition-all duration-500 bg-gray-900 hover:bg-black opacity-0 group-hover:opacity-100 overflow-hidden border-t border-gray-800",
              onClick: (e) => addToCart(product, e.target),
              disabled: !product.in_stock || product.stock_quantity <= 0,
              children: [
                /* @__PURE__ */ jsx("span", { className: "btn-text transition-all duration-300", children: product.in_stock && product.stock_quantity > 0 ? "ADD TO CART" : "OUT OF STOCK" }),
                /* @__PURE__ */ jsxs("span", { className: "btn-success hidden", children: [
                  /* @__PURE__ */ jsx("svg", { className: "inline-block w-4 h-4 mr-2", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }),
                  "ADDED TO CART"
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("button", { className: "absolute bottom-16 right-4 bg-white p-3 shadow-lg transition-all duration-500 transform opacity-0 group-hover:opacity-100 hover:scale-110 translate-x-2 group-hover:translate-x-0 border border-gray-100 hover:border-gray-300", children: /* @__PURE__ */ jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-4 w-4 text-gray-700",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              }
            )
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-5 flex-grow", children: [
        /* @__PURE__ */ jsx("a", { href: `/shop/${product.slug}`, className: "block", children: /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg text-gray-900 hover:text-gray-600 transition-colors duration-300 leading-tight", children: product.name }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 flex items-center", children: product.discount_price && parseFloat(product.discount_price) < parseFloat(product.price) ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-lg text-gray-900", children: formatPrice(product.discount_price) }),
          /* @__PURE__ */ jsx("span", { className: "line-through text-gray-500 text-sm", children: formatPrice(product.price) })
        ] }) : /* @__PURE__ */ jsx("span", { className: "font-bold text-lg text-gray-900", children: formatPrice(product.price) }) }),
        product.attributes && Object.keys(product.attributes).length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-gray-600", children: Object.entries(product.attributes).slice(0, 1).map(([key, value]) => /* @__PURE__ */ jsxs("span", { className: "capitalize", children: [
          key,
          ": ",
          value
        ] }, key)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "toast-notification fixed top-6 right-6 bg-gray-900 text-white px-6 py-4 shadow-2xl transform translate-x-full opacity-0 transition-all duration-500 ease-out z-50 border border-gray-700", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 mr-3", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }),
        /* @__PURE__ */ jsx("span", { className: "toast-message font-medium", children: "Added to cart!" })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxs("article", { className: "relative bg-white flex flex-col md:flex-row group border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-gray-300 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden md:w-40 md:flex-shrink-0", children: [
      product.in_stock && product.stock_quantity > 0 && product.discount_price && parseFloat(product.discount_price) < parseFloat(product.price) && /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3 flex gap-1 z-10", children: /* @__PURE__ */ jsx("span", { className: "bg-black text-white text-xs font-medium px-3 py-1 tracking-wider", children: "SALE" }) }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: getFirstImage(product),
          alt: product.name,
          className: "w-full h-48 md:h-full md:aspect-square object-cover transition-all duration-700 ease-out group-hover:scale-105 filter group-hover:contrast-110",
          loading: "lazy"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 p-5 flex flex-col justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("a", { href: `/shop/${product.slug}`, className: "block", children: /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg text-gray-900 hover:text-gray-600 transition-colors duration-300 leading-tight mb-2", children: product.name }) }),
          /* @__PURE__ */ jsx("div", { className: "mb-3", children: product.discount_price && parseFloat(product.discount_price) < parseFloat(product.price) ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-xl text-gray-900", children: formatPrice(product.discount_price) }),
            /* @__PURE__ */ jsx("span", { className: "line-through text-gray-500 text-sm", children: formatPrice(product.price) })
          ] }) : /* @__PURE__ */ jsx("span", { className: "font-bold text-xl text-gray-900", children: formatPrice(product.price) }) }),
          product.attributes && Object.keys(product.attributes).length > 0 && /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 mb-4", children: Object.entries(product.attributes).slice(0, 2).map(([key, value]) => /* @__PURE__ */ jsxs("span", { className: "capitalize mr-4", children: [
            key,
            ": ",
            value
          ] }, key)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 ml-4", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `/shop/${product.slug}`,
              className: "bg-white p-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 border border-gray-200 hover:border-gray-300",
              title: "Quick View",
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-4 w-4 text-gray-700",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "bg-white p-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 border border-gray-200 hover:border-gray-300",
              title: "Add to Wishlist",
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-4 w-4 text-gray-700",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    }
                  )
                }
              )
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pt-4 border-t border-gray-100", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: "add-to-cart-btn bg-gray-900 text-white px-6 py-2 font-medium tracking-wide transition-all duration-300 hover:bg-black transform hover:scale-105",
              onClick: (e) => addToCart(product, e.target),
              disabled: !product.in_stock || product.stock_quantity <= 0,
              children: [
                /* @__PURE__ */ jsx("span", { className: "btn-text transition-all duration-300", children: product.in_stock && product.stock_quantity > 0 ? "ADD TO CART" : "OUT OF STOCK" }),
                /* @__PURE__ */ jsxs("span", { className: "btn-success hidden", children: [
                  /* @__PURE__ */ jsx("svg", { className: "inline-block w-4 h-4 mr-2", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }),
                  "ADDED TO CART"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `/shop/${product.slug}`,
              className: "text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors duration-300",
              children: "View Details →"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm", children: product.in_stock && product.stock_quantity > 0 ? /* @__PURE__ */ jsx("span", { className: "text-green-600 font-medium", children: "In Stock" }) : /* @__PURE__ */ jsx("span", { className: "text-red-600 font-medium", children: "Out of Stock" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "toast-notification fixed top-6 right-6 bg-gray-900 text-white px-6 py-4 shadow-2xl transform translate-x-full opacity-0 transition-all duration-500 ease-out z-50 border border-gray-700", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 mr-3", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }),
      /* @__PURE__ */ jsx("span", { className: "toast-message font-medium", children: "Added to cart!" })
    ] }) })
  ] });
};

const ShopContainer = ({
  initialProducts = [],
  categories = [],
  itemsPerPage = 12
}) => {
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: [],
    price: { min: 0, max: 1e5 },
    availability: "all",
    search: ""
  });
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const priceRange = useMemo(() => {
    if (products.length === 0) return { min: 0, max: 1e5 };
    const prices = products.map((p) => {
      const price = p.discount_price && parseFloat(p.discount_price) < parseFloat(p.price) ? parseFloat(p.discount_price) : parseFloat(p.price);
      return price;
    });
    return {
      min: Math.floor(Math.min(...prices)),
      max: Math.ceil(Math.max(...prices))
    };
  }, [products]);
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      price: priceRange
    }));
  }, [priceRange]);
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(
        (product) => product.name.toLowerCase().includes(searchTerm) || product.attributes && Object.values(product.attributes).some(
          (attr) => attr.toLowerCase().includes(searchTerm)
        )
      );
    }
    if (filters.category.length > 0) {
      filtered = filtered.filter(
        (product) => filters.category.includes(product.category_id)
      );
    }
    if (filters.price) {
      filtered = filtered.filter((product) => {
        const price = product.discount_price && parseFloat(product.discount_price) < parseFloat(product.price) ? parseFloat(product.discount_price) : parseFloat(product.price);
        return price >= filters.price.min && price <= filters.price.max;
      });
    }
    if (filters.availability !== "all") {
      if (filters.availability === "in_stock") {
        filtered = filtered.filter((product) => product.in_stock && product.stock_quantity > 0);
      } else if (filters.availability === "out_of_stock") {
        filtered = filtered.filter((product) => !product.in_stock || product.stock_quantity <= 0);
      }
    }
    filtered.sort((a, b) => {
      let aValue, bValue;
      switch (sortBy) {
        case "price":
          aValue = a.discount_price && parseFloat(a.discount_price) < parseFloat(a.price) ? parseFloat(a.discount_price) : parseFloat(a.price);
          bValue = b.discount_price && parseFloat(b.discount_price) < parseFloat(b.price) ? parseFloat(b.discount_price) : parseFloat(b.price);
          break;
        case "name":
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case "created_at":
          aValue = new Date(a.created_at || 0);
          bValue = new Date(b.created_at || 0);
          break;
        default:
          aValue = a[sortBy];
          bValue = b[sortBy];
      }
      if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
      if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
    return filtered;
  }, [products, filters, sortBy, sortOrder]);
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };
  const handleSortChange = (field, order) => {
    setSortBy(field);
    setSortOrder(order);
    setCurrentPage(1);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.getElementById("products-grid")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  const handleLoadMore = async () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage((prev) => prev + 1);
      setLoading(false);
    }, 500);
  };
  const toggleFilterSidebar = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const getGridClass = () => {
    if (viewMode === "list") {
      return "flex flex-col space-y-4";
    }
    return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6";
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-8", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-8", children: [
    /* @__PURE__ */ jsx(
      FilterSidebar,
      {
        filters,
        onFiltersChange: handleFiltersChange,
        isOpen: isFilterOpen,
        onToggle: toggleFilterSidebar,
        categories,
        priceRange
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-2", children: "Our Products" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Discover our curated collection of premium products" })
      ] }),
      /* @__PURE__ */ jsx(
        ProductSort,
        {
          sortBy,
          sortOrder,
          onSortChange: handleSortChange,
          viewMode,
          onViewModeChange: setViewMode,
          onFilterToggle: toggleFilterSidebar,
          totalResults: filteredAndSortedProducts.length,
          className: "mb-6"
        }
      ),
      /* @__PURE__ */ jsx("div", { id: "products-grid", className: "mb-8", children: paginatedProducts.length > 0 ? /* @__PURE__ */ jsx("div", { className: getGridClass(), children: paginatedProducts.map((product) => /* @__PURE__ */ jsx(ProductCardWrapper, { product, viewMode }, product.id)) }) : /* @__PURE__ */ jsxs("div", { className: "text-center py-16", children: [
        /* @__PURE__ */ jsx("div", { className: "text-gray-400 mb-4", children: /* @__PURE__ */ jsx("svg", { className: "w-16 h-16 mx-auto", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1, d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-4h-2M9 9h2m0 0h2m-2 0V7m0 2v2" }) }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No products found" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Try adjusting your filters or search criteria" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handleFiltersChange({
              category: [],
              price: priceRange,
              availability: "all",
              search: ""
            }),
            className: "bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors",
            children: "Clear all filters"
          }
        )
      ] }) }),
      paginatedProducts.length > 0 && /* @__PURE__ */ jsx(
        Pagination,
        {
          currentPage,
          totalPages,
          totalItems: filteredAndSortedProducts.length,
          itemsPerPage,
          onPageChange: handlePageChange,
          onLoadMore: handleLoadMore,
          loading,
          className: "mt-8"
        }
      )
    ] })
  ] }) }) });
};

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let products = [];
  let categories = [];
  try {
    const productData = await productsService.getProducts();
    products = productData.map((product) => {
      return {
        id: product.id,
        name: product.name,
        slug: product.slug,
        price: product.price.toString(),
        discount_price: product.discount_price ? product.discount_price.toString() : void 0,
        gallery: product.gallery || [],
        in_stock: product.in_stock,
        stock_quantity: product.stock_quantity,
        attributes: product.attributes || {},
        category_id: product.category_id || null,
        created_at: product.created_at || (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    const categoryData = await CategoriesService.getAll();
    categories = categoryData.map((category) => ({
      id: category.id,
      name: category.name,
      slug: category.slug || category.name.toLowerCase().replace(/\s+/g, "-")
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    products = [];
    categories = [];
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Shop | Bablon", "data-astro-cid-2eaphvki": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ShopContainer", ShopContainer, { "initialProducts": products, "categories": categories, "itemsPerPage": 12, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/components/ShopContainer", "client:component-export": "default", "data-astro-cid-2eaphvki": true })} ` })}  <!-- Performance optimizations --> ${renderScript($$result, "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/pages/shop/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/pages/shop/index.astro", undefined);

const $$file = "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/pages/shop/index.astro";
const $$url = "/shop";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
