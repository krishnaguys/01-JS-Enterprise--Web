import { SITE_NAME } from "@/lib/constants";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {SITE_NAME}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Enterprise-level solutions
            </p>
          </div>
          {["Company", "Products", "Support"].map((section) => (
            <div key={section}>
              <h4 className="font-semibold text-gray-900 dark:text-white">{section}</h4>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Link</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Link</a></li>
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};