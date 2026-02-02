import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase;

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
} else {
  console.warn("Supabase URL and Anon Key are missing. Using mock client.");

  // Mock data
  const mockProjects = [
    {
      id: 1,
      Title: "Karinex - Premium Küchenprodukte",
      Description: "Vollständiger E-Commerce-Shop für Premium-Küchenprodukte. Entwickelt mit Shopify, optimiert für SEO und Conversion.",
      Img: "https://via.placeholder.com/800x600/5B9AA0/ffffff?text=Karinex.de",
      Link: "https://www.karinex.de",
      Github: "",
      TechStack: ["Shopify", "Liquid", "JavaScript", "CSS", "SEO"],
      Category: "E-Commerce"
    }
  ];

  const mockCertificates = [
    {
      id: 1,
      Img: "https://via.placeholder.com/600x400/A8C9A3/ffffff?text=Google+Ads"
    },
    {
      id: 2,
      Img: "https://via.placeholder.com/600x400/A8C9A3/ffffff?text=Google+Analytics"
    },
    {
      id: 3,
      Img: "https://via.placeholder.com/600x400/5B9AA0/ffffff?text=Shopify"
    },
    {
      id: 4,
      Img: "https://via.placeholder.com/600x400/5B9AA0/ffffff?text=Digital+Marketing"
    }
  ];

  const mockChain = {
    select: () => mockChain,
    order: (field, options) => {
      // Return mock data based on the table
      const mockData = mockChain._table === 'projects' ? mockProjects : mockCertificates;
      return Promise.resolve({ data: mockData, error: null });
    },
    eq: () => mockChain,
    single: () => Promise.resolve({ data: null, error: null }),
    insert: () => Promise.resolve({ error: null }),
    _table: null
  };

  const mockChannel = {
    on: () => mockChannel,
    subscribe: () => mockChannel,
    unsubscribe: () => { },
  };

  supabase = {
    from: (table) => {
      mockChain._table = table;
      return mockChain;
    },
    channel: () => mockChannel,
    storage: {
      from: () => ({
        upload: () => Promise.resolve({ error: null }),
        getPublicUrl: () => ({ data: { publicUrl: "" } }),
      }),
    },
  };
}

export { supabase };