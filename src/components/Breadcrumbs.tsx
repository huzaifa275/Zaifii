import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-500">
        <li>
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors py-1 px-2 rounded-md hover:bg-blue-50/80 cursor-pointer"
          >
            <Home className="w-3.5 h-3.5 text-blue-600" />
            <span>Home</span>
          </button>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={item.path}>
              <li className="text-slate-300 select-none">
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li>
                {isLast ? (
                  <span className="text-slate-800 font-bold py-1 px-2 rounded-md bg-slate-100/70" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <button
                    onClick={() => onNavigate(item.path)}
                    className="hover:text-blue-600 transition-colors py-1 px-2 rounded-md hover:bg-blue-50/80 cursor-pointer"
                  >
                    {item.name}
                  </button>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
