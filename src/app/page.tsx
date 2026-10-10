'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductCard from './components/ProductCard';
import Banner from './components/shared/home/Banner';
import RisenProducts from './components/shared/home/RisenProducts';

// --- Types ---
interface Product {
  id: string | number;
  name: string;
  category: string;
  unit: string;
  currentPrice: number;
  previousPrice?: number;
  priceChangePercent: number;
  priceChangeDirection: 'up' | 'down' | 'flat';
  emoji: string;
}

interface Category {
  id: string | number;
  name: string;
  slug: string;
}

// --- Helper Functions ---
const BASE_URL = 'https://api.abcz.workers.dev/api/bazardor';

function toBengaliNumber(num: number | string): string {
  const englishToBengaliMap: Record<string, string> = {
    '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
    '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯',
  };
  return num
    .toString()
    .replace(/[0-9]/g, (digit) => englishToBengaliMap[digit] || digit);
}

// Format currency in Bengali (e.g., 148 -> ১৪৮ টাকা)
function formatPrice(price: number): string {
  return `${toBengaliNumber(price.toLocaleString('bn-BD'))} টাকা`;
}



function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Simulated User State (BetterAuth state can replace this)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [prodRes, catRes] = await Promise.all([
          fetch(`${BASE_URL}/products`),
          fetch(`${BASE_URL}/categories`)
        ]);

        if (prodRes.ok) {
          const prodData = await prodRes.json();
          setProducts(prodData);
        }
        if (catRes.ok) {
          const catData = await catRes.json();
          setCategories(catData);
        }
      } catch (error) {
        console.error('Error fetching home page data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Filter products for risers and fallers
  const risers = products
    .filter((p) => p.priceChangeDirection === 'up' || p.priceChangePercent > 0)
    .sort((a, b) => b.priceChangePercent - a.priceChangePercent)
    .slice(0, 6);

  const fallers = products
    .filter((p) => p.priceChangeDirection === 'down' || p.priceChangePercent < 0)
    .sort((a, b) => a.priceChangePercent - b.priceChangePercent)
    .slice(0, 6);

  // Active Category Filter for #সব-পণ্য Section
  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);
  return (
    <div>
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8 space-y-12">
      <Banner></Banner>
      <ProductCard ></ProductCard>
        {/* ================= 3. PRODUCT SECTIONS ================= */}

        {/* Loading Skeleton */}
        {loading ? (
          <div className="space-y-8">
            <div className="h-8 bg-slate-200 rounded w-48 animate-pulse"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-xl border border-slate-200 space-y-3 animate-pulse"
                >
                  <div className="h-12 w-12 bg-slate-200 rounded-lg"></div>
                  <div className="h-5 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                  <div className="h-6 bg-slate-200 rounded w-full"></div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Section A — “আজ দাম বেড়েছে ▲”: Top 6 Risers */}
            {risers.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-red-500">▲</span> আজ দাম বেড়েছে
                  </h2>
                  <span className="text-xs bg-red-100 text-red-700 font-semibold px-2 py-0.5 rounded-full">
                    শীর্ষ ৬
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {risers.map((product) => (
                    <ProductCard
                      key={`riser-${product.id}`}
                      product={product}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Section B — “আজ দাম কমেছে ▼”: Top 6 Fallers */}
            {fallers.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-green-600">▼</span> আজ দাম কমেছে
                  </h2>
                  <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">
                    শীর্ষ ৬
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {fallers.map((product) => (
                    <ProductCard
                      key={`faller-${product.id}`}
                      product={product}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Section C — “সব পণ্য” All Products Grid */}
            <section id="সব-পণ্য" className="space-y-6 pt-4 scroll-mt-24">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">সব পণ্য</h2>
                  <p className="text-sm text-slate-500">
                    বাজারের প্রতিটি পণ্যের হালনাগাদ দরদাম তালিকা
                  </p>
                </div>

                {/* Optional local category tab switch */}
                <div className="flex items-center gap-2 overflow-x-auto py-1">
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                      activeCategory === "all"
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    সব
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.slug)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition whitespace-nowrap ${
                        activeCategory === cat.slug
                          ? "bg-slate-900 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredProducts.map((product) => (
                    <ProductCard key={`all-${product.id}`} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
                  <p className="text-slate-500 text-base">
                    এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
                  </p>
                </div>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
