import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-zinc-800 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-slate-900 to-zinc-900 dark:from-white dark:to-slate-200 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-white dark:text-black">ASM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-zinc-900 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                  Agile Scrum Master
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  AI-Powered Agile Platform
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              Revolutionizing agile project management with intelligent sprint planning, auto-assignment, and real-time insights.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">Features</Link></li>
              <li><Link href="/pricing" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">Pricing</Link></li>
              <li><Link href="/solution" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">Solution</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">About</Link></li>
              <li><Link href="/docs" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">Docs</Link></li>
              <li><Link href="/developers" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">API</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-600 dark:text-slate-400 order-2 md:order-1">
            © 2024 Agile Scrum Master. All rights reserved.
          </p>
          <div className="flex gap-4 order-1 md:order-2">
            <Link href="https://github.com/yourorg/agile-scrum-master" className="w-5 h-5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
              <Github />
            </Link>
            <Link href="https://twitter.com/agilescrumai" className="w-5 h-5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
              <Twitter />
            </Link>
            <Link href="https://linkedin.com/company/agile-scrum-master" className="w-5 h-5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
