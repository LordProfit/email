"use client"

import Link from 'next/link';
import { Home, Calendar, Mail, FileText, Settings, MessageSquare, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-64 bg-background h-full shadow-lg">
      <div className="flex flex-col h-full">
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Assistant AI</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2 p-4">
            <li>
              <Link href="/dashboard" className="flex items-center p-2 hover:bg-accent rounded">
                <Home className="mr-2" /> Dashboard
              </Link>
            </li>
            <li>
              <Link href="/dashboard/calendar" className="flex items-center p-2 hover:bg-accent rounded">
                <Calendar className="mr-2" /> Calendar
              </Link>
            </li>
            <li>
              <Link href="/dashboard/email" className="flex items-center p-2 hover:bg-accent rounded">
                <Mail className="mr-2" /> Email
              </Link>
            </li>
            <li>
              <Link href="/dashboard/tasks" className="flex items-center p-2 hover:bg-accent rounded">
                <FileText className="mr-2" /> Tasks
              </Link>
            </li>
            <li>
              <Link href="/dashboard/chat" className="flex items-center p-2 hover:bg-accent rounded">
                <MessageSquare className="mr-2" /> AI Chat
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings" className="flex items-center p-2 hover:bg-accent rounded">
                <Settings className="mr-2" /> Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;