"use client";

import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { detailServices } from "@/services/detailServices";
import LoadingSkeleton from "@/app/loading";

const AutocompleteVariants = cva("relative w-full", {
  variants: {
    variant: {
      default: "justify-end",
    },
  },
});

interface AutocompleteProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof AutocompleteVariants> {
  className?: string;
  variant?: "default";
}

interface Suggestion {
  original: string;
  url: string;
  lowercase: string;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  className,
  variant = "default",
  ...props
}) => {
  const [query, setQuery] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>(
    []
  );
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await detailServices();
        const fetchedSuggestions = res?.data.map((item: any) => ({
          original: item.name,
          url: item.slug, // Assuming `slug` is used as URL
          lowercase: item.name.toLowerCase(),
        }));
        setSuggestions(fetchedSuggestions);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (query) {
      const lowerQuery = query.toLowerCase();
      const filtered = suggestions.filter((item) =>
        item.lowercase.includes(lowerQuery)
      );
      setFilteredSuggestions(filtered.slice(0, 5)); // Limit to 5 results
      setDropdownVisible(filtered.length > 0);
    } else {
      setDropdownVisible(false);
    }
  }, [query, suggestions]);

  return (
    <div className={cn(AutocompleteVariants({ variant }), className)}>
      <Input
        type="text"
        placeholder="Search for a device..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="lg:w-64 w-full p-2 border bg-white border-gray-300 rounded"
        {...props}
      />
      {isLoading && <LoadingSkeleton />}
      {isDropdownVisible && filteredSuggestions.length > 0 && (
        <div className="absolute left-0 right-0 mt-6 lg:mt-12 bg-white border border-gray-300 rounded shadow-lg">
          {filteredSuggestions.map((suggestion, index) => (
            <Link
              key={index}
              href={`/computer-services/${suggestion.url}`} // Use `url` here
              target="_blank"
              className="py-3 max-h-32 h-full"
            >
              <div className="p-2 hover:bg-gray-100 cursor-pointer">
                {suggestion.original}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
